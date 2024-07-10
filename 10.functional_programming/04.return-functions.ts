import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Returning Functions")

console.log(`${TEXT.YELLOW}${TEXT.BOLD}High order Functions${TEXT.CLOSURE}`)
console.log(" ➜ a function that receives another function as an argument, returns a function, or does both\n")

function doTwice(func: { (): void }) {
  func()
  func()
}

doTwice(() => {
  console.log("Hello You pig Faced !")
})

const multiplyBy = (factor: number) => {
  return (number: number) => {
    return number * factor
  }
}

console.log("\nmultiplyBy(3) ➜", multiplyBy(3))

const triple = multiplyBy(3)
const double = multiplyBy(2)

const tripleResponse = triple(10)
const doubleResponse = double(10)

console.log("\ntriple = multiplyBy(3)")
console.log("double = multiplyBy(2)",)
console.log("\ntriple(10) ➜", tripleResponse)
console.log("double(10) ➜", doubleResponse)
