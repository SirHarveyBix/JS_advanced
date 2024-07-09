import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Intro: Functional Programming")

console.log("➜ Is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.")
console.log("➜ Is often declarative rather than imperative, and application state flows through pure functions.")

console.log("\nFunctional programming methods you've met & should 100% know:")

console.log(`  • ${TEXT.ITALIC}map${TEXT.CLOSURE}`)
console.log(`  • ${TEXT.ITALIC}filter${TEXT.CLOSURE}`)
console.log(`  • ${TEXT.ITALIC}some / every${TEXT.CLOSURE}`)
console.log(`  • ${TEXT.ITALIC}find / findIndex${TEXT.CLOSURE}`)
console.log(`  • ${TEXT.ITALIC}reduce${TEXT.CLOSURE}`)

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Essential concepts: ${TEXT.CLOSURE}`)


console.log("  • higher order functions, first class functions")
console.log("  • pure functions")
console.log("  • immutability")
console.log("  • closure")
console.log("  • partial application / currying")
console.log("  • function composition")

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}What Functional Programming avoids${TEXT.CLOSURE}`)

console.log("  • looping")
console.log("  • mutation and shared state")
console.log("  • variable declaration")

console.log(`\n${TEXT.YELLOW}Examples: ${TEXT.CLOSURE}`)

// imperative programming
let sum = 0

for (let i = 1; i <= 5; i++) {
  sum += i
}

console.log("Imperative Programming ➜", sum)

// functional programming
const numbers = [1, 2, 3, 4, 5]

const value = numbers.reduce(
  (previousValue: number, currentValue) => {
    return previousValue + currentValue
  },
  0)

console.log("Functional Programming ➜", value)

/* - - - */
numbers.push(6, 7, 8, 9)
/* - - - */

// imperative approach
const evens = []

for (let number of numbers) {
  if (number % 2 === 0) {
    evens.push(number)
  }
}

console.log("\nImperative Approach ➜", evens)

// functional approach
const evensFunctional = numbers.filter((number) => number % 2 === 0)
console.log("Functional Approach ➜", evensFunctional)


console.log("\nWatch out the code to understand printed values")
