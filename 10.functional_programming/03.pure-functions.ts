import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Writing Pure Functions")

console.log("➜ Referential transparency")
console.log("  • The function always gives the same return value for the same arguments")
console.log("  • The function cannot depend on any mutable state\n")

console.log("➜ Side-effect free:")
console.log("  • The function cannot cause any side effects.")
console.log("  • Side effects may include I/O (eg, writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.")

let value = 2
console.log("\n'value' before functions call ➜", value)

const squareAndUpdateValue = (num: number) => {

  value = num * num
  return {
    value: value,
    result: value
  }
}
console.log("Impure function transform data outside of their scopes", squareAndUpdateValue(3))

value = 2
console.log("\n'value' before functions call ➜", value)

const square = (num: number) => {

  return {
    value: value,
    result: num * num
  }
}

console.log("Pure function do not transform ", square(3))

const colors = ["red", "orange"]

// IMPURE
function addToArray(arr: string[], value: string) {
  console.log(`\n${TEXT.DARK_BLUE}${TEXT.BOLD}after an Impure function${TEXT.CLOSURE}`)

  return arr.push(value)
}

// PURE
function pureAddToArray(arr: string[], value: string) {

  const result = [...arr, value]
  console.log("\npureAddToArray ➜", result)
  console.log(`${TEXT.DARK_BLUE}${TEXT.BOLD}after a Pure function${TEXT.CLOSURE}`)

  return result
}

console.log("\ncolors ➜", colors)

addToArray(colors, "yellow")
console.log("colors ➜", colors)

pureAddToArray(colors, "brown")
console.log("colors ➜", colors)
