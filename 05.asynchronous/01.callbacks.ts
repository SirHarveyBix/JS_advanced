import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Callback: Our Good Friend`)

console.log(`${TEXT.BOLD}${TEXT.GREEN}Goals:${TEXT.CLOSURE}`)
console.log(`  • Examine callbacks in context of asynchronicity`)
console.log(`  • Understand role of promises`)
console.log(`  • Understand role of ${TEXT.ITALIC}async / await${TEXT.CLOSURE}`)
console.log(`  • See common patterns and how to solve with ${TEXT.ITALIC}async / await${TEXT.CLOSURE}`)

console.log("\nA callback is a function passed to another function, for it to call.\nThey are used for many things in JS.\n")

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const simpleCallback = nums
  .filter(function (num) {
    return num % 2 === 0
  })

console.log("example of simple function using a callback : '.map', '.filter', etc ..\n", simpleCallback)


console.log(`\n${TEXT.BOLD}${TEXT.GREEN}Callbacks Will Always Be Useful${TEXT.CLOSURE}\n`)

console.log("First two cases will always be done with callbacks:")
console.log("  • Functional programming patterns,")
console.log("  • Event-driven programming")
console.log("Let's talk about third case, for handling asynchronicity")