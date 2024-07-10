import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Currying Basics")

console.log(`${TEXT.BOLD}➜ ${TEXT.RED}CAUTION ${TEXT.YELLOW}Advanced idea ahead!${TEXT.CLOSURE}\n`)

console.log("    Currying is interesting, and more advanced -")
console.log("    you may find it useful to study this after you've mastered some of the basics.\n")

console.log(`A ${TEXT.ITALIC}curried${TEXT.CLOSURE} function can be called with any number of arguments — \nif you call it with fewer args than it takes, it returns a "smaller" partial,\nwhich you can then call with remaining arguments.\n`)

console.log("➜ classical function ")
function add(a: number, b: number, c: number) {
  return a + b + c
}

console.log(`${TEXT.GREEN}add${TEXT.PURPLE}(${TEXT.DARK_BLUE}1${TEXT.CLOSURE}, ${TEXT.DARK_BLUE}2${TEXT.CLOSURE}, ${TEXT.DARK_BLUE}3${TEXT.PURPLE})${TEXT.CLOSURE}`)
console.log("➜", add(1, 2, 3))

console.log(`\n➜ ${TEXT.ITALIC}curried${TEXT.CLOSURE} function`)
function addCurry(a: number) {
  return function (b: number) {
    return function (c: number) {
      return a + b + c
    }
  }
}
console.log(`${TEXT.GREEN}addCurry${TEXT.PURPLE}(${TEXT.DARK_BLUE}1${TEXT.PURPLE})(${TEXT.DARK_BLUE}2${TEXT.PURPLE})(${TEXT.DARK_BLUE}3${TEXT.PURPLE})${TEXT.CLOSURE}`)
console.log("➜", addCurry(1)(2)(3))
