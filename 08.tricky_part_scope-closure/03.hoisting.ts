import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Hoisting`)

console.log(`${TEXT.YELLOW}${TEXT.BOLD}Hoisting${TEXT.CLOSURE}\n`)

console.log(`• ${TEXT.ITALIC}var${TEXT.CLOSURE} variable ${TEXT.ITALIC}declarations${TEXT.CLOSURE} are pulled to the top of their function`)
console.log(`  • So the variable is legal, but equal to ${TEXT.ITALIC}undefined${TEXT.CLOSURE} until definition`)

console.log("food (before declaration) ➜", food)
var food = "pizza"

console.log("Behind the scene, it goes like this :\n")
console.log(`  ${TEXT.PURPLE}var${TEXT.CLOSURE} food ${TEXT.PURPLE}=${TEXT.CLOSURE} ${TEXT.DARK_BLUE}undefined${TEXT.CLOSURE}`)
console.log(`  ${TEXT.DARK_BLUE}console${TEXT.CLOSURE}.${TEXT.GREEN}log${TEXT.CLOSURE}(food)`)
console.log(`  food ${TEXT.PURPLE}=${TEXT.CLOSURE} ${TEXT.YELLOW}"pizza"${TEXT.CLOSURE}\n`)

console.log(`${TEXT.PURPLE}let${TEXT.CLOSURE} & ${TEXT.PURPLE}const${TEXT.CLOSURE}, doesn't that way, there is no hoisting !`)

