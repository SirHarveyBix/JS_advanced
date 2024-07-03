import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   BigInt() & Really Large Numbers`)

console.log(`Number.MAX_VALUE ➜`, Number.MAX_VALUE)

const largestNum = Number.MAX_SAFE_INTEGER
console.log(`\nNumber.MAX_SAFE_INTEGER ➜`, largestNum)
console.log("Number.MAX_SAFE_INTEGER + 2 ➜", largestNum + 2)
console.log(`${TEXT.RED}NOT CORRECT !${TEXT.CLOSURE}`)

const bigBoy = BigInt('184653218486628474851')
console.log("\nBigInt('184653218486628474851')", bigBoy)
console.log("  or simply : 184653218486628474851n ➜", 184653218486628474851n)
console.log("typeof BigInt('184653218486628474851') ➜", typeof bigBoy)
console.log(Number.isNaN(bigBoy))