import { logger } from "."

logger(__filename, `   Array.prototype.at()`)

console.log("colors = ['red', 'orange', 'yellow', 'green']")
const colors = ['red', 'orange', 'yellow', 'green']
console.log("colors[2] ➜", colors[2])
console.log("colors.at(2) ➜", colors.at(2))
console.log("colors.at(-1) ➜", colors.at(-1))