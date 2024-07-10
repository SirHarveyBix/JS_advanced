import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Composition Basics")

console.log("Function composition is a mechanism of combining multiple functions to build a more complicated one.")
console.log("\nThe result of each function is passed to the next one.")

console.log(`In math, this can be expressed as ${TEXT.ITALIC}f(g(x))${TEXT.CLOSURE}.`)

const add = (a: number, b: number) => a + b
const square = (a: number) => a * a

const squaredComposition = square(add(1, 3))

console.log(`\n${TEXT.GREEN}square${TEXT.CLOSURE}(${TEXT.GREEN}add${TEXT.PURPLE}(${TEXT.DARK_BLUE}1${TEXT.CLOSURE}, ${TEXT.DARK_BLUE}3${TEXT.PURPLE})${TEXT.CLOSURE}) ➜`, squaredComposition)

const addAndSquare = (a: number, b: number) => square(add(a, b))

addAndSquare(2, 3)

/** COMPLETE EXAMPLE */
function lowerCaseString(string: string) {
  return string.toLowerCase()
}
function splitWords(string: string) {
  return string.split(" ")
}

function joinWithDash(array: string[]) {
  return array.join("-")
}

joinWithDash(
  splitWords(
    lowerCaseString("My favorite Function")
  )
)
