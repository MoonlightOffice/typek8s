import { FakeFileIOPort } from "./fake-file-io-port.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, util } from "./deps.ts"

Deno.test("FakeFileIOPort.read", async (t) => {
  type In = {
    initialFiles: Record<string, Uint8Array<ArrayBuffer>>
    initialDirs: string[]
    path: string
    mutateReadResult?: {
      index: number
      value: number
    }
  }

  type Want = {
    res: tsUtil.Result<Uint8Array<ArrayBuffer>>
    afterMutationRes?: tsUtil.Result<Uint8Array<ArrayBuffer>>
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a text file exists; its contents are returned",
      in: {
        initialFiles: { "example.txt": util.stringToBytes("hello, world!") },
        initialDirs: [],
        path: "example.txt",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("hello, world!")),
      },
    },
    {
      name: "a nested file exists; its contents are returned",
      in: {
        initialFiles: { "configs/app/settings.json": util.stringToBytes('{"mode":"test"}') },
        initialDirs: [],
        path: "configs/app/settings.json",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes('{"mode":"test"}')),
      },
    },
    {
      name: "a path contains dot segments; the normalized file contents are returned",
      in: {
        initialFiles: { "fixtures/example.txt": util.stringToBytes("normalized") },
        initialDirs: [],
        path: "./fixtures/./example.txt",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("normalized")),
      },
    },
    {
      name: "a path contains windows separators; the normalized file contents are returned",
      in: {
        initialFiles: { "fixtures/example.txt": util.stringToBytes("windows-path") },
        initialDirs: [],
        path: ".\\fixtures\\example.txt",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("windows-path")),
      },
    },
    {
      name: "an absolute path exists; its contents are returned",
      in: {
        initialFiles: { "/tmp/example.txt": util.stringToBytes("absolute-path") },
        initialDirs: [],
        path: "/tmp/example.txt",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("absolute-path")),
      },
    },
    {
      name: "bytes are read; mutating the returned bytes does not change stored contents",
      in: {
        initialFiles: { "archive.tgz": new Uint8Array([0, 255, 1, 2]) },
        initialDirs: [],
        path: "archive.tgz",
        mutateReadResult: {
          index: 1,
          value: 0,
        },
      },
      want: {
        res: tsUtil.result(true, new Uint8Array([0, 255, 1, 2])),
        afterMutationRes: tsUtil.result(true, new Uint8Array([0, 255, 1, 2])),
      },
    },
    {
      name: "a file does not exist; an error is thrown",
      in: {
        initialFiles: { "example.txt": util.stringToBytes("hello, world!") },
        initialDirs: [],
        path: "missing.txt",
      },
      want: {
        res: tsUtil.result(false, entity.ErrNotFound),
      },
    },
    {
      name: "a path points to a directory; an error is thrown",
      in: {
        initialFiles: {},
        initialDirs: ["fixtures"],
        path: "fixtures",
      },
      want: {
        res: tsUtil.result(false, entity.ErrNotFound),
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const port = new FakeFileIOPort(tt.in.initialFiles, tt.in.initialDirs)
      const res = port.read(tt.in.path)
      if (tt.want.res.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.res.err), true)
      } else {
        stdAssert.assertEquals(res, tt.want.res)
      }

      if (tt.in.mutateReadResult != null) {
        stdAssert.assertEquals(res.err, null)
        res.val[tt.in.mutateReadResult.index] = tt.in.mutateReadResult.value
        stdAssert.assertEquals(port.read(tt.in.path), tt.want.afterMutationRes)
      }
    })
  }
})

Deno.test("FakeFileIOPort.write", async (t) => {
  type In = {
    initialFiles: Record<string, Uint8Array<ArrayBuffer>>
    initialDirs: string[]
    write: {
      dir: string
      fname: string
      content: Uint8Array<ArrayBuffer>
    }
    readPath: string
    listDir: string
  }

  type Want = {
    res: tsUtil.Result<Uint8Array<ArrayBuffer>>
    fileNames: string[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a new relative file is written; the new contents are readable",
      in: {
        initialFiles: {},
        initialDirs: ["fixtures"],
        write: {
          dir: "fixtures",
          fname: "example.txt",
          content: util.stringToBytes("hello, world!"),
        },
        readPath: "fixtures/example.txt",
        listDir: "fixtures",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("hello, world!")),
        fileNames: ["example.txt"],
      },
    },
    {
      name: "an existing file is written again; the contents are replaced in place",
      in: {
        initialFiles: { "fixtures/example.txt": util.stringToBytes("before") },
        initialDirs: [],
        write: {
          dir: "fixtures",
          fname: "example.txt",
          content: util.stringToBytes("after"),
        },
        readPath: "fixtures/example.txt",
        listDir: "fixtures",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("after")),
        fileNames: ["example.txt"],
      },
    },
    {
      name: "the directory and filename use dot segments and windows separators; the normalized file is written",
      in: {
        initialFiles: {},
        initialDirs: [],
        write: {
          dir: ".\\fixtures\\nested",
          fname: ".\\example.txt",
          content: util.stringToBytes("normalized"),
        },
        readPath: "fixtures/nested/example.txt",
        listDir: "./fixtures/./nested",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("normalized")),
        fileNames: ["example.txt"],
      },
    },
    {
      name: "an absolute directory is written; the file is readable from the absolute path",
      in: {
        initialFiles: {},
        initialDirs: [],
        write: {
          dir: "/tmp/cache",
          fname: "app.json",
          content: util.stringToBytes('{"mode":"test"}'),
        },
        readPath: "/tmp/cache/app.json",
        listDir: "/tmp/cache",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes('{"mode":"test"}')),
        fileNames: ["app.json"],
      },
    },
    {
      name: "binary bytes are written; the same bytes are readable",
      in: {
        initialFiles: {},
        initialDirs: [],
        write: {
          dir: "/tmp/cache",
          fname: "archive.tgz",
          content: new Uint8Array([0, 255, 1, 2]),
        },
        readPath: "/tmp/cache/archive.tgz",
        listDir: "/tmp/cache",
      },
      want: {
        res: tsUtil.result(true, new Uint8Array([0, 255, 1, 2])),
        fileNames: ["archive.tgz"],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const port = new FakeFileIOPort(tt.in.initialFiles, tt.in.initialDirs)

      port.write(tt.in.write.dir, tt.in.write.fname, tt.in.write.content)

      const res = port.read(tt.in.readPath)
      if (tt.want.res.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.res.err), true)
      } else {
        stdAssert.assertEquals(res, tt.want.res)
      }
      stdAssert.assertEquals(port.listFiles(tt.in.listDir), tt.want.fileNames)
    })
  }
})

Deno.test("FakeFileIOPort.listFiles", async (t) => {
  type In = {
    initialFiles: Record<string, Uint8Array<ArrayBuffer>>
    initialDirs: string[]
    dir: string
  }

  type Want = {
    fileNames: string[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a directory contains direct files; the sorted file names are returned",
      in: {
        initialFiles: {
          "fixtures/zeta.txt": util.stringToBytes("zeta"),
          "fixtures/alpha.txt": util.stringToBytes("alpha"),
          "fixtures/middle.txt": util.stringToBytes("middle"),
        },
        initialDirs: [],
        dir: "fixtures",
      },
      want: {
        fileNames: ["alpha.txt", "middle.txt", "zeta.txt"],
      },
    },
    {
      name: "a directory contains nested descendant files; only direct children are returned",
      in: {
        initialFiles: {
          "fixtures/top.txt": util.stringToBytes("top"),
          "fixtures/nested/child.txt": util.stringToBytes("child"),
          "fixtures/nested/deeper/leaf.txt": util.stringToBytes("leaf"),
        },
        initialDirs: [],
        dir: "fixtures",
      },
      want: {
        fileNames: ["top.txt"],
      },
    },
    {
      name: "the directory path contains dot segments and windows separators; the normalized directory is listed",
      in: {
        initialFiles: {
          "fixtures/nested/app.ts": util.stringToBytes("export {}"),
        },
        initialDirs: [],
        dir: ".\\fixtures\\nested\\.",
      },
      want: {
        fileNames: ["app.ts"],
      },
    },
    {
      name: "a directory has no files; an empty list is returned",
      in: {
        initialFiles: {},
        initialDirs: ["fixtures/empty"],
        dir: "fixtures/empty",
      },
      want: {
        fileNames: [],
      },
    },
    {
      name: "a directory does not exist; an empty list is returned",
      in: {
        initialFiles: {
          "fixtures/example.txt": util.stringToBytes("hello"),
        },
        initialDirs: [],
        dir: "missing",
      },
      want: {
        fileNames: [],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const port = new FakeFileIOPort(tt.in.initialFiles, tt.in.initialDirs)

      stdAssert.assertEquals(port.listFiles(tt.in.dir), tt.want.fileNames)
    })
  }
})

Deno.test("FakeFileIOPort.mkdir", async (t) => {
  type In = {
    initialFiles: Record<string, Uint8Array<ArrayBuffer>>
    initialDirs: string[]
    path: string
  }

  type Want = {
    fileNames: string[]
    res: tsUtil.Result<Uint8Array<ArrayBuffer>>
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a new nested relative directory is created; existing files remain unchanged",
      in: {
        initialFiles: {
          "fixtures/example.txt": util.stringToBytes("hello"),
        },
        initialDirs: [],
        path: "fixtures/nested",
      },
      want: {
        fileNames: [],
        res: tsUtil.result(true, util.stringToBytes("hello")),
      },
    },
    {
      name:
        "an absolute directory path contains dot segments and windows separators; it is handled without changing files",
      in: {
        initialFiles: {
          "/tmp/example.txt": util.stringToBytes("absolute"),
        },
        initialDirs: [],
        path: "/tmp\\nested\\./child",
      },
      want: {
        fileNames: [],
        res: tsUtil.result(true, util.stringToBytes("absolute")),
      },
    },
    {
      name: "an existing directory is created again; it remains a no-op",
      in: {
        initialFiles: {},
        initialDirs: ["fixtures"],
        path: "fixtures",
      },
      want: {
        fileNames: [],
        res: tsUtil.result(false, entity.ErrNotFound),
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const port = new FakeFileIOPort(tt.in.initialFiles, tt.in.initialDirs)

      port.mkdir(tt.in.path)

      stdAssert.assertEquals(port.listFiles(tt.in.path), tt.want.fileNames)

      const probePath = tt.want.res.err == null ? Object.keys(tt.in.initialFiles)[0] : tt.in.path
      const res = port.read(probePath)
      if (tt.want.res.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.res.err), true)
      } else {
        stdAssert.assertEquals(res, tt.want.res)
      }
    })
  }
})

Deno.test("FakeFileIOPort.remove", async (t) => {
  type In = {
    initialFiles: Record<string, Uint8Array<ArrayBuffer>>
    initialDirs: string[]
    path: string
    readPath: string
    siblingDir: string
  }

  type Want = {
    res: tsUtil.Result<Uint8Array<ArrayBuffer>>
    fileNames: string[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a file is removed; the file is no longer readable and sibling files remain",
      in: {
        initialFiles: {
          "fixtures/remove.txt": util.stringToBytes("remove"),
          "fixtures/keep.txt": util.stringToBytes("keep"),
        },
        initialDirs: [],
        path: "fixtures/remove.txt",
        readPath: "fixtures/remove.txt",
        siblingDir: "fixtures",
      },
      want: {
        res: tsUtil.result(false, entity.ErrNotFound),
        fileNames: ["keep.txt"],
      },
    },
    {
      name: "a directory is removed; all descendant files are removed recursively",
      in: {
        initialFiles: {
          "fixtures/nested/remove.txt": util.stringToBytes("remove"),
          "fixtures/nested/deeper/leaf.txt": util.stringToBytes("leaf"),
          "fixtures/keep.txt": util.stringToBytes("keep"),
        },
        initialDirs: [],
        path: "fixtures/nested",
        readPath: "fixtures/nested/remove.txt",
        siblingDir: "fixtures",
      },
      want: {
        res: tsUtil.result(false, entity.ErrNotFound),
        fileNames: ["keep.txt"],
      },
    },
    {
      name: "the removal path contains dot segments and windows separators; the normalized target is removed",
      in: {
        initialFiles: {
          "/tmp/cache/app.json": util.stringToBytes("{}"),
          "/tmp/keep.txt": util.stringToBytes("keep"),
        },
        initialDirs: [],
        path: "/tmp\\cache\\.",
        readPath: "/tmp/cache/app.json",
        siblingDir: "/tmp",
      },
      want: {
        res: tsUtil.result(false, entity.ErrNotFound),
        fileNames: ["keep.txt"],
      },
    },
    {
      name: "a path does not exist; removal is a no-op",
      in: {
        initialFiles: {
          "fixtures/example.txt": util.stringToBytes("hello"),
        },
        initialDirs: [],
        path: "fixtures/missing",
        readPath: "fixtures/example.txt",
        siblingDir: "fixtures",
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("hello")),
        fileNames: ["example.txt"],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const port = new FakeFileIOPort(tt.in.initialFiles, tt.in.initialDirs)

      port.remove(tt.in.path)

      const res = port.read(tt.in.readPath)
      if (tt.want.res.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.res.err), true)
      } else {
        stdAssert.assertEquals(res, tt.want.res)
      }
      stdAssert.assertEquals(port.listFiles(tt.in.siblingDir), tt.want.fileNames)
    })
  }
})
