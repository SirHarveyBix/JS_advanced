import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   The Scope Chain`)

console.log(`${TEXT.YELLOW}${TEXT.BOLD}Scope & closure${TEXT.CLOSURE}\n`)

console.log(`When we use a variable, Javascript tries to find the variable:`)
console.log(`  1. in the local scope`)
console.log(`  2. any outer functions`)
console.log(`  3. in the global scope\n`)

let age = 10 //global scope

function outer() {
  console.log("JavaScript, find it in 1. the local scope")
  let age = 99

  function inner() {
    console.log("  3. ➜", age)
  }

  if (true) {
    let age = "ageless"
    console.log("  1. ➜", age)
  }

  console.log("  1. ➜", age)
  inner()
}

console.log("  3. ➜", age)

outer()