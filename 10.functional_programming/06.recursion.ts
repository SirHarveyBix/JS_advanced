import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Recursion")

function factorial(n: number) {
  let result = 1

  for (let i = n; i > 1; i--) {
    result *= i
  }

  return result
}

const nonRecursive = factorial(3)
console.log("nonRecursive ➜ ", nonRecursive)

function factorialRecursive(n: number) {
  if (n === 0 || n == 1) {
    return 1
  }

  return n * factorial(n - 1)
}

const recursive = factorialRecursive(3)


console.log("recursive    ➜ ", recursive)

console.log("\nsee the code below !")