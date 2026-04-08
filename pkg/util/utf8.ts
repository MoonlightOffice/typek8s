const textDecoder = new TextDecoder()
const textEncoder = new TextEncoder()

export function bytesToString(bytes: Uint8Array<ArrayBufferLike>): string {
  return textDecoder.decode(bytes)
}

export function stringToBytes(text: string): Uint8Array<ArrayBuffer> {
  return textEncoder.encode(text)
}
