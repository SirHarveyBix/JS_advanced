import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Post & Pre Increment: ++x Vs. x++`)

console.log(`There is a difference between ${TEXT.BLUE}++x${TEXT.CLOSURE} and ${TEXT.BLUE}x++${TEXT.CLOSURE}:`)

let x = 5
console.log("let x = 5;")
let y = ++x
console.log("  y = ++x ➜ ", y, "// add 1 to x then evaluate; y and X are both 6")
y = x++
console.log("  y = ++x ➜ ", y, "// evaluate x and set y that, then add 1 to x")

console.log("\nWorks with decrementing")
y = --x
console.log("  y = --x ➜ ", y)
y = x--
console.log("  y = x-- ➜ ", y)