import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Partial Application with bind")

function greet(greeting: string, name: string) {
  return `${greeting}, ${name} !`
}


console.log("Without Bind ➜", greet("hi", "Kev'"))

const bound = greet.bind(null, "Gday")

console.log(`\n${TEXT.DARK_BLUE}bound${TEXT.CLOSURE} ${TEXT.PURPLE}= ${TEXT.GREEN}greet${TEXT.CLOSURE}.${TEXT.GREEN}bind${TEXT.CLOSURE}(${TEXT.DARK_BLUE}null${TEXT.CLOSURE}, ${TEXT.YELLOW}"Gday${TEXT.CLOSURE}) will 'force' the first argument to be "Gday",\nevery time you call ${TEXT.GREEN}bound${TEXT.CLOSURE}${TEXT.PURPLE}(${TEXT.YELLOW}"Kev'"${TEXT.PURPLE})${TEXT.CLOSURE}`)

console.log(" ➜", bound("Kev'"))