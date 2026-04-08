import { "@std/assert" as stdAssert } from "../deps.ts"
import { bytesToString, stringToBytes } from "./mod.ts"

Deno.test("stringToBytes", async (t) => {
  const tests: Array<{
    name: string
    input: string
    want: number[]
  }> = [
    {
      name: "ascii text is encoded as utf8 bytes",
      input: "hello",
      want: [104, 101, 108, 108, 111],
    },
    {
      name: "multibyte text is encoded as utf8 bytes",
      input: "こんにちは🌏",
      want: [227, 129, 147, 227, 130, 147, 227, 129, 171, 227, 129, 161, 227, 129, 175, 240, 159, 140, 143],
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      stdAssert.assertEquals(Array.from(stringToBytes(tt.input)), tt.want)
    })
  }
})

Deno.test("bytesToString", async (t) => {
  const tests: Array<{
    name: string
    input: Uint8Array<ArrayBuffer>
    want: string
  }> = [
    {
      name: "ascii bytes are decoded as utf8 text",
      input: new Uint8Array([104, 101, 108, 108, 111]),
      want: "hello",
    },
    {
      name: "multibyte bytes are decoded as utf8 text",
      input: new Uint8Array([
        227,
        129,
        147,
        227,
        130,
        147,
        227,
        129,
        171,
        227,
        129,
        161,
        227,
        129,
        175,
        240,
        159,
        140,
        143,
      ]),
      want: "こんにちは🌏",
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      stdAssert.assertEquals(bytesToString(tt.input), tt.want)
    })
  }
})

Deno.test("utf8 helpers round-trip multibyte text", () => {
  const input = "TypeK8S こんにちは🌏"

  stdAssert.assertEquals(bytesToString(stringToBytes(input)), input)
})
