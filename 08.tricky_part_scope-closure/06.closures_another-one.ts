import { logger } from "."

logger(__filename, `   Closures: Another example`);

const counter = (function createCounter() {
  let count = 0
  console.log("➜ count is 'shield on the function'inaccessible from the outside can access to this variable\n")

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  }
})()

console.log('createCounter().decrement() ➜', counter.decrement())
console.log('createCounter().increment() ➜', counter.increment())
console.log('createCounter().getCount() ➜', counter.getCount())
