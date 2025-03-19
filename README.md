# bun-err
Handle errors with ease in Bun.

## Installation
```bash
bun add github.com:phillip-england/bun-err
```

## Usage
```ts
const [val, noErr] = await go(async () => {
  return "Hello, Non-Existent, Error-Free World!";
});

const [_, someErr] = await go(async () => {
  throw new Error("Hello, Honest, Error-Prone World!")
});

if (someErr) {
  console.log(someErr)
}
```