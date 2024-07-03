import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Floating point imprecision`)

console.log(`JavaScript represents numbers as ${TEXT.ITALIC}floating point${TEXT.CLOSURE}, like ${TEXT.GREEN}1.234${TEXT.CLOSURE}.\nSometimes, this leads to mildly imprecise results:\n `)

console.log("0.1 + 0.2 =", 0.1 + 0.2)

console.log(`This can lead to bugs: this ${TEXT.ITALIC}if${TEXT.CLOSURE} condition will fail: ${TEXT.BLUE}1 + .2 === .3${TEXT.CLOSURE}\n`)
console.log(`If you need to compare numbers "approximately",`)
console.log(`check out ${TEXT.BLUE}How to compare numbers correctly in JavaScript${TEXT.CLOSURE}.`)

function areFloatsEqual(a: number, b: number, epsilon = 1e-10) {
  return Math.abs(a - b) < epsilon
}

console.log(`you can use ${TEXT.BOLD}Epsilon${TEXT.CLOSURE}: ${TEXT.GREEN}1e-10${TEXT.CLOSURE}, to compare if floats are equals :`)
console.log(`\nMath.abs(0.3 - 0.1 + 0.2) < 1e-10 ➜ `, areFloatsEqual(0.3, 0.1 + 0.2))
console.log("Otherwise: 0.3, 0.1 + 0.2 ➜ ", 0.3, ",", 0.1 + 0.2)

