import { "@std/assert" as stdAssert, "@std/path" as stdPath, "ts-util" as tsUtil, entity, port, util } from "./deps.ts"
import { AdapterFileIOPort } from "./adapter-file-io-port.ts"

function withTempDir(run: (dir: string) => void): void {
  using stack = new DisposableStack()

  const dir = Deno.makeTempDirSync()
  stack.defer(() => Deno.removeSync(dir, { recursive: true }))

  run(dir)
}

Deno.test("AdapterFileIOPort.read", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  type In = {
    seed?: (dir: string) => void
    path: (dir: string) => string
  }

  type Want = {
    res?: tsUtil.Result<Uint8Array<ArrayBuffer>>
    err?: tsUtil.Err
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a utf8 file exists; its contents are returned",
      in: {
        seed: (dir) => {
          Deno.writeFileSync(stdPath.join(dir, "example.txt"), util.stringToBytes("hello, world!"))
        },
        path: (dir) => stdPath.join(dir, "example.txt"),
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("hello, world!")),
      },
    },
    {
      name: "a binary file exists; its raw bytes are returned",
      in: {
        seed: (dir) => {
          Deno.writeFileSync(stdPath.join(dir, "archive.tgz"), new Uint8Array([0, 255, 1, 2]))
        },
        path: (dir) => stdPath.join(dir, "archive.tgz"),
      },
      want: {
        res: tsUtil.result(true, new Uint8Array([0, 255, 1, 2])),
      },
    },
    {
      name: "a file does not exist; ErrNotFound is returned",
      in: {
        path: (dir) => stdPath.join(dir, "missing.txt"),
      },
      want: {
        err: entity.ErrNotFound,
      },
    },
    {
      name: "a path points to a directory; ErrNotFound is returned",
      in: {
        seed: (dir) => {
          Deno.mkdirSync(stdPath.join(dir, "fixtures"))
        },
        path: (dir) => stdPath.join(dir, "fixtures"),
      },
      want: {
        err: entity.ErrNotFound,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      withTempDir((dir) => {
        tt.in.seed?.(dir)
        const fileIOPort: port.fileIo.FileIOPort = new AdapterFileIOPort()

        const res = fileIOPort.read(tt.in.path(dir))

        if (tt.want.err != null) {
          stdAssert.assertExists(res.err)
          stdAssert.assertEquals(res.err.is(tt.want.err), true)
          return
        }

        stdAssert.assertEquals(res, tt.want.res)
      })
    })
  }
})

Deno.test("AdapterFileIOPort.write", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  type In = {
    seed?: (dir: string) => void
    dir: (root: string) => string
    fname: string
    content: Uint8Array<ArrayBuffer>
    readPath: (root: string) => string
    listDir: (root: string) => string
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
      name: "a new file is written; the contents are readable",
      in: {
        dir: (root) => stdPath.join(root, "fixtures"),
        fname: "example.txt",
        content: util.stringToBytes("hello, world!"),
        readPath: (root) => stdPath.join(root, "fixtures", "example.txt"),
        listDir: (root) => stdPath.join(root, "fixtures"),
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("hello, world!")),
        fileNames: ["example.txt"],
      },
    },
    {
      name: "an existing file is written again; the contents are replaced in place",
      in: {
        seed: (dir) => {
          const fixturesDir = stdPath.join(dir, "fixtures")
          Deno.mkdirSync(fixturesDir, { recursive: true })
          Deno.writeFileSync(stdPath.join(fixturesDir, "example.txt"), util.stringToBytes("before"))
        },
        dir: (root) => stdPath.join(root, "fixtures"),
        fname: "example.txt",
        content: util.stringToBytes("after"),
        readPath: (root) => stdPath.join(root, "fixtures", "example.txt"),
        listDir: (root) => stdPath.join(root, "fixtures"),
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("after")),
        fileNames: ["example.txt"],
      },
    },
    {
      name: "a nested directory does not exist; write creates it before writing the file",
      in: {
        dir: (root) => stdPath.join(root, "nested", "deeper"),
        fname: "app.json",
        content: util.stringToBytes('{"mode":"test"}'),
        readPath: (root) => stdPath.join(root, "nested", "deeper", "app.json"),
        listDir: (root) => stdPath.join(root, "nested", "deeper"),
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes('{"mode":"test"}')),
        fileNames: ["app.json"],
      },
    },
    {
      name: "binary bytes are written; the same bytes are readable",
      in: {
        dir: (root) => stdPath.join(root, "fixtures"),
        fname: "archive.tgz",
        content: new Uint8Array([0, 255, 1, 2]),
        readPath: (root) => stdPath.join(root, "fixtures", "archive.tgz"),
        listDir: (root) => stdPath.join(root, "fixtures"),
      },
      want: {
        res: tsUtil.result(true, new Uint8Array([0, 255, 1, 2])),
        fileNames: ["archive.tgz"],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      withTempDir((dir) => {
        tt.in.seed?.(dir)
        const fileIOPort: port.fileIo.FileIOPort = new AdapterFileIOPort()

        fileIOPort.write(tt.in.dir(dir), tt.in.fname, tt.in.content)

        stdAssert.assertEquals(fileIOPort.read(tt.in.readPath(dir)), tt.want.res)
        stdAssert.assertEquals(fileIOPort.listFiles(tt.in.listDir(dir)), tt.want.fileNames)
      })
    })
  }
})

Deno.test("AdapterFileIOPort.listFiles", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  type In = {
    seed?: (dir: string) => void
    path: (dir: string) => string
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
        seed: (dir) => {
          const fixturesDir = stdPath.join(dir, "fixtures")
          Deno.mkdirSync(fixturesDir, { recursive: true })
          Deno.writeTextFileSync(stdPath.join(fixturesDir, "zeta.txt"), "zeta")
          Deno.writeTextFileSync(stdPath.join(fixturesDir, "alpha.txt"), "alpha")
          Deno.writeTextFileSync(stdPath.join(fixturesDir, "middle.txt"), "middle")
        },
        path: (dir) => stdPath.join(dir, "fixtures"),
      },
      want: {
        fileNames: ["alpha.txt", "middle.txt", "zeta.txt"],
      },
    },
    {
      name: "a directory contains nested files; only direct child files are returned",
      in: {
        seed: (dir) => {
          const fixturesDir = stdPath.join(dir, "fixtures")
          const nestedDir = stdPath.join(fixturesDir, "nested")
          Deno.mkdirSync(nestedDir, { recursive: true })
          Deno.writeTextFileSync(stdPath.join(fixturesDir, "top.txt"), "top")
          Deno.writeTextFileSync(stdPath.join(nestedDir, "child.txt"), "child")
        },
        path: (dir) => stdPath.join(dir, "fixtures"),
      },
      want: {
        fileNames: ["top.txt"],
      },
    },
    {
      name: "a directory does not exist; an empty list is returned",
      in: {
        path: (dir) => stdPath.join(dir, "missing"),
      },
      want: {
        fileNames: [],
      },
    },
    {
      name: "a path points to a file; an empty list is returned",
      in: {
        seed: (dir) => {
          Deno.writeTextFileSync(stdPath.join(dir, "example.txt"), "hello")
        },
        path: (dir) => stdPath.join(dir, "example.txt"),
      },
      want: {
        fileNames: [],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      withTempDir((dir) => {
        tt.in.seed?.(dir)
        const fileIOPort: port.fileIo.FileIOPort = new AdapterFileIOPort()

        stdAssert.assertEquals(fileIOPort.listFiles(tt.in.path(dir)), tt.want.fileNames)
      })
    })
  }
})

Deno.test("AdapterFileIOPort.mkdir", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  type In = {
    seed?: (dir: string) => void
    path: (dir: string) => string
    probeDir: (dir: string) => string
    probeFile?: {
      path: (dir: string) => string
      content: Uint8Array<ArrayBuffer>
    }
  }

  type Want = {
    fileNames: string[]
    probeRead?: tsUtil.Result<Uint8Array<ArrayBuffer>>
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a new nested directory is created; it is listable afterward",
      in: {
        path: (dir) => stdPath.join(dir, "fixtures", "nested"),
        probeDir: (dir) => stdPath.join(dir, "fixtures", "nested"),
      },
      want: {
        fileNames: [],
      },
    },
    {
      name: "an existing directory is created again; existing files remain unchanged",
      in: {
        seed: (dir) => {
          const fixturesDir = stdPath.join(dir, "fixtures")
          Deno.mkdirSync(fixturesDir, { recursive: true })
          Deno.writeFileSync(stdPath.join(fixturesDir, "example.txt"), util.stringToBytes("hello"))
        },
        path: (dir) => stdPath.join(dir, "fixtures"),
        probeDir: (dir) => stdPath.join(dir, "fixtures"),
        probeFile: {
          path: (dir) => stdPath.join(dir, "fixtures", "example.txt"),
          content: util.stringToBytes("hello"),
        },
      },
      want: {
        fileNames: ["example.txt"],
        probeRead: tsUtil.result(true, util.stringToBytes("hello")),
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      withTempDir((dir) => {
        tt.in.seed?.(dir)
        const fileIOPort: port.fileIo.FileIOPort = new AdapterFileIOPort()

        fileIOPort.mkdir(tt.in.path(dir))

        stdAssert.assertEquals(fileIOPort.listFiles(tt.in.probeDir(dir)), tt.want.fileNames)
        if (tt.in.probeFile != null) {
          stdAssert.assertEquals(fileIOPort.read(tt.in.probeFile.path(dir)), tt.want.probeRead)
        }
      })
    })
  }
})

Deno.test("AdapterFileIOPort.remove", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  type In = {
    seed?: (dir: string) => void
    path: (dir: string) => string
    readPath: (dir: string) => string
    siblingDir: (dir: string) => string
  }

  type Want = {
    err?: tsUtil.Err
    res?: tsUtil.Result<Uint8Array<ArrayBuffer>>
    fileNames: string[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a file is removed; sibling files remain",
      in: {
        seed: (dir) => {
          const fixturesDir = stdPath.join(dir, "fixtures")
          Deno.mkdirSync(fixturesDir, { recursive: true })
          Deno.writeFileSync(stdPath.join(fixturesDir, "remove.txt"), util.stringToBytes("remove"))
          Deno.writeFileSync(stdPath.join(fixturesDir, "keep.txt"), util.stringToBytes("keep"))
        },
        path: (dir) => stdPath.join(dir, "fixtures", "remove.txt"),
        readPath: (dir) => stdPath.join(dir, "fixtures", "remove.txt"),
        siblingDir: (dir) => stdPath.join(dir, "fixtures"),
      },
      want: {
        err: entity.ErrNotFound,
        fileNames: ["keep.txt"],
      },
    },
    {
      name: "a directory is removed recursively; descendant files are removed",
      in: {
        seed: (dir) => {
          const nestedDir = stdPath.join(dir, "fixtures", "nested", "deeper")
          Deno.mkdirSync(nestedDir, { recursive: true })
          Deno.writeFileSync(stdPath.join(dir, "fixtures", "nested", "remove.txt"), util.stringToBytes("remove"))
          Deno.writeFileSync(stdPath.join(nestedDir, "leaf.txt"), util.stringToBytes("leaf"))
          Deno.writeFileSync(stdPath.join(dir, "fixtures", "keep.txt"), util.stringToBytes("keep"))
        },
        path: (dir) => stdPath.join(dir, "fixtures", "nested"),
        readPath: (dir) => stdPath.join(dir, "fixtures", "nested", "remove.txt"),
        siblingDir: (dir) => stdPath.join(dir, "fixtures"),
      },
      want: {
        err: entity.ErrNotFound,
        fileNames: ["keep.txt"],
      },
    },
    {
      name: "a missing path is removed; the operation is a no-op",
      in: {
        seed: (dir) => {
          const fixturesDir = stdPath.join(dir, "fixtures")
          Deno.mkdirSync(fixturesDir, { recursive: true })
          Deno.writeFileSync(stdPath.join(fixturesDir, "example.txt"), util.stringToBytes("hello"))
        },
        path: (dir) => stdPath.join(dir, "fixtures", "missing"),
        readPath: (dir) => stdPath.join(dir, "fixtures", "example.txt"),
        siblingDir: (dir) => stdPath.join(dir, "fixtures"),
      },
      want: {
        res: tsUtil.result(true, util.stringToBytes("hello")),
        fileNames: ["example.txt"],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      withTempDir((dir) => {
        tt.in.seed?.(dir)
        const fileIOPort: port.fileIo.FileIOPort = new AdapterFileIOPort()

        fileIOPort.remove(tt.in.path(dir))

        const res = fileIOPort.read(tt.in.readPath(dir))
        if (tt.want.err != null) {
          stdAssert.assertExists(res.err)
          stdAssert.assertEquals(res.err.is(tt.want.err), true)
        } else {
          stdAssert.assertEquals(res, tt.want.res)
        }
        stdAssert.assertEquals(fileIOPort.listFiles(tt.in.siblingDir(dir)), tt.want.fileNames)
      })
    })
  }
})
