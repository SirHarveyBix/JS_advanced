import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Automatic Semicolon Insertion`)

console.log("You can write JavaScript with or without semicolons;")
console.log(`if you omit them, they will be inserted by JS in a process known as ${TEXT.ITALIC}ASI${TEXT.CLOSURE}`)
console.log(`${TEXT.ITALIC}automatic semicolon insertion.${TEXT.CLOSURE}`)

console.log("\nMostly, this means it works, either way — but there are some edges")

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Missing Semicolons:${TEXT.CLOSURE}`)

console.log(`\n${TEXT.ITALIC}${TEXT.BOLD}➜  Bug !                  ➜  Works !${TEXT.CLOSURE}`)

console.log(`console.log("hello")      console.log("hello")${TEXT.BOLD}${TEXT.GREEN};${TEXT.CLOSURE}\n\n[x, y] = [1, 2]           [x, y] = [1, 2]`)