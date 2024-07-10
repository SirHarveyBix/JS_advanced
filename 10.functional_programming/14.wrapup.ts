import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Functional Programming Wrapup")

console.log(`${TEXT.YELLOW}${TEXT.BOLD}Essential concepts${TEXT.CLOSURE}`)

console.log("  • higher order functions, first class functions")
console.log("  • pure functions")
console.log("  • immutability")
console.log("  • closure")
console.log("  • partial application / currying")
console.log("  • function composition")

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Functional Programming avoid :${TEXT.CLOSURE}`)

console.log("  • looping")
console.log("  • mutation and shared state")
console.log("  • variable declaration")

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Pure Functions${TEXT.CLOSURE}`)

console.log("  • Referential transparency")
console.log("    • The function always gives the same return value for the same arguments")
console.log("    • The function cannot depend on any mutable state")
console.log("  • Side-effect free:")
console.log("    • The function cannot cause any side effects.")

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Benefits of Pure Functions${TEXT.CLOSURE}`)

console.log(`  • Can be easier to reason about/debug because they don't depend on any state.`)
console.log(`  • Return value can be cached or ${TEXT.ITALIC}memoized${TEXT.CLOSURE} to avoid recomputation later.`)
console.log(`  • Can be easier to test as there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.`)

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Javascript Libraries Functional Programming${TEXT.CLOSURE}`)
console.log(`  • ${TEXT.BLUE}ramda${TEXT.CLOSURE}`)
console.log(`  • ${TEXT.BLUE}lodash/fp${TEXT.CLOSURE}`)


console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}Resources${TEXT.CLOSURE}`)

console.log(`  • ${TEXT.BLUE}Professor Frisby's mostly adequate guide to functional programming${TEXT.CLOSURE}`)
console.log("       ➜ https://mostly-adequate.gitbook.io/mostly-adequate-guide")
console.log(`  • ${TEXT.BLUE}What is functional programming?${TEXT.CLOSURE}`)
console.log("       ➜ https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0#")

console.log(`\n${TEXT.YELLOW}${TEXT.BOLD}OOP Vs. Functional Programming${TEXT.CLOSURE}`)

console.log("  • OOP is often easier to reason about and read.")
console.log("  • Functional Programming has a much steeper learning curve, but can allow for functions to be simplified and easily composed.")
console.log("  • Different languages have different takes")
console.log("    • Some are primarily functional (eg, Haskell, Schema, Clojure)")
console.log("    • Some are primarily object-oriented (eg, Java)")
console.log("    • Most are 'multi-paradigm' and allow both styles and even mix them")
console.log("      (eg, JavaScript, Python, C#, Swift, Ruby)")


