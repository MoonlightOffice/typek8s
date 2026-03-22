import { FakeFileIOPort } from "./fake-file-io-port.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

Deno.test("FakeFileIOPort.read", async (t) => {
  type In = {
    initialFiles: Record<string, string>
    initialDirs: string[]
    path: string
  }

  type Want = {
    res: tsUtil.Result<string>
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a text file exists; its contents are returned",
      in: {
        initialFiles: { "example.txt": "hello, world!" },
        initialDirs: [],
        path: "example.txt",
      },
      want: {
        res: tsUtil.result(true, "hello, world!"),
      },
    },
    {
      name: "a nested file exists; its contents are returned",
      in: {
        initialFiles: { "configs/app/settings.json": '{"mode":"test"}' },
        initialDirs: [],
        path: "configs/app/settings.json",
      },
      want: {
        res: tsUtil.result(true, '{"mode":"test"}'),
      },
    },
    {
      name: "a path contains dot segments; the normalized file contents are returned",
      in: {
        initialFiles: { "fixtures/example.txt": "normalized" },
        initialDirs: [],
        path: "./fixtures/./example.txt",
      },
      want: {
        res: tsUtil.result(true, "normalized"),
      },
    },
    {
      name: "a path contains windows separators; the normalized file contents are returned",
      in: {
        initialFiles: { "fixtures/example.txt": "windows-path" },
        initialDirs: [],
        path: ".\\fixtures\\example.txt",
      },
      want: {
        res: tsUtil.result(true, "windows-path"),
      },
    },
    {
      name: "an absolute path exists; its contents are returned",
      in: {
        initialFiles: { "/tmp/example.txt": "absolute-path" },
        initialDirs: [],
        path: "/tmp/example.txt",
      },
      want: {
        res: tsUtil.result(true, "absolute-path"),
      },
    },
    {
      name: "a file does not exist; an error is thrown",
      in: {
        initialFiles: { "example.txt": "hello, world!" },
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
        res.err!.is(tt.want.res.err)
      } else {
        stdAssert.assertEquals(res, tt.want.res)
      }
    })
  }
})
