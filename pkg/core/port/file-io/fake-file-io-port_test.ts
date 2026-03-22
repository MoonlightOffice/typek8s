import { FakeFileIOPort } from "./fake-file-io-port.ts"
import { "@std/assert" as stdAssert } from "./deps.ts"

Deno.test("FakeFileIOPort.read", async (t) => {
  type In = {
    initialFiles: Record<string, string>
    initialDirs: string[]
    path: string
  }

  type Want = {
    content: string
    isError: boolean
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
        content: "hello, world!",
        isError: false,
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
        content: '{"mode":"test"}',
        isError: false,
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
        content: "normalized",
        isError: false,
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
        content: "windows-path",
        isError: false,
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
        content: "absolute-path",
        isError: false,
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
        content: "",
        isError: true,
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
        content: "",
        isError: true,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const port = new FakeFileIOPort(tt.in.initialFiles, tt.in.initialDirs)
      if (tt.want.isError) {
        stdAssert.assertThrows(() => port.read(tt.in.path))
        return
      }
      stdAssert.assertEquals(port.read(tt.in.path), tt.want.content)
    })
  }
})
