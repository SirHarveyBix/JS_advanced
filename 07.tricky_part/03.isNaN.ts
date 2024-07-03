import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   isNaN() Vs. Number.isNaN`)

console.log(`Number.MAX_VALUE ➜`, Number.MAX_VALUE)

console.log(`${TEXT.YELLOW}${TEXT.BOLD}Not a Number${TEXT.CLOSURE}`)

console.log(`\nJavaScript's ${TEXT.ITALIC}NaN${TEXT.CLOSURE} value can be tricky. It often comes from:`)
console.log(`  • Logical math errors, like ${TEXT.BLUE}0 / 0${TEXT.CLOSURE}`)
console.log(`  • Imaginary numbers, like ${TEXT.BLUE}Math.sqrt(-1)${TEXT.CLOSURE}`)
console.log(`  • Conversion errors, like ${TEXT.BLUE}Number("nope")${TEXT.CLOSURE}`)

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Checking for NaN${TEXT.CLOSURE}`)
console.log(`All ${TEXT.ITALIC}NaN${TEXT.CLOSURE} values are considered unique, so ${TEXT.BLUE}NaN === NaN${TEXT.CLOSURE} is false.`)
console.log(`If you need to check for ${TEXT.ITALIC}NaN${TEXT.CLOSURE}, there are two different ways:`)
console.log(`• ${TEXT.BLUE}isNaN(n)${TEXT.CLOSURE}`)
console.log(`This returns true if ${TEXT.ITALIC}n${TEXT.CLOSURE} is ${TEXT.ITALIC}NaN${TEXT.CLOSURE} or is a value\nthat cannot be coerced into a number:`)
console.log("  isNaN(0 / 0) ➜", isNaN(0 / 0))
console.log("  isNaN(0 / 1) ➜", isNaN(0 / 1))
console.log("  isNaN('nope') ➜", isNaN('nope' as any))
console.log(`\n• ${TEXT.BLUE}Number.isNaN(n)${TEXT.CLOSURE}`)

console.log(`This returns true ${TEXT.BOLD}only${TEXT.CLOSURE} if ${TEXT.ITALIC}n${TEXT.CLOSURE} is ${TEXT.ITALIC}NaN${TEXT.CLOSURE} - everything else return false.`)
console.log("  Number.isNaN(0 / 0) ➜", Number.isNaN(0 / 0))
console.log("  Number.isNaN('nope') ➜", Number.isNaN('nope'))