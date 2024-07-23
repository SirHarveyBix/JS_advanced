
import { logger } from "."
import { TEXT } from "../utils/colors"

console.log(`\n        ${TEXT.BOLD}${TEXT.YELLOW}Storage${TEXT.CLOSURE}`)

logger(__filename, "   LocalStorage Basics")

console.log(" [LocalStorage]: to explore a lil' bit, you must drop .html file on your browser\n")
console.log("Check out '01.localStorage.js' to explore local storage, but nothing complicated:")
console.log(`Key value pair with ${TEXT.GREEN}.setItem${TEXT.CLOSURE}(), key with ${TEXT.GREEN}.getItem${TEXT.CLOSURE}()`)

console.log(`\nBut remember with ${TEXT.PURPLE}LocalStorage${TEXT.CLOSURE}, everything is a string, to work with it ➜ ${TEXT.PURPLE}JSON${TEXT.BLUE}.${TEXT.GREEN}stringify${TEXT.CLOSURE} / ${TEXT.PURPLE}JSON${TEXT.BLUE}.${TEXT.GREEN}parse${TEXT.GREEN}`)
