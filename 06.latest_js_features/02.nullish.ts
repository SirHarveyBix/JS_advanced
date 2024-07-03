import { logger } from "."
import { TEXT } from "../utils/colors"
import { getUser } from "../utils/variables"

logger(__filename, `   Nullish coalescing`)

console.log(`The nullish coalescing operator (${TEXT.ITALIC}??${TEXT.CLOSURE}) is a logical operator that returns its right-hand operand`)
console.log(`when its left-hand operand is ${TEXT.ITALIC}null${TEXT.CLOSURE} or ${TEXT.ITALIC}undefined${TEXT.CLOSURE}, and otherwise returns its left-hand operand.`)
console.log(`This is a way to handle default values more predictably than using the ${TEXT.BOLD}OR${TEXT.CLOSURE} (||) operator.\n`)

const user = getUser()

console.log("[USER]:", user)

const firstName = user?.name?.first || 'anonymous'

console.log(firstName)

console.log(`\n ➜ ${TEXT.GREEN}'0 || 'it is not true''${TEXT.CLOSURE} ➜ will always return 'it is not true',\n ➜ ${TEXT.GREEN}'0 ?? 'it is not true''${TEXT.CLOSURE} ➜ will return 0\n`)