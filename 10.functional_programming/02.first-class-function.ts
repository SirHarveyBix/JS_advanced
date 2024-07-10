import { logger } from "."

logger(__filename, "   First Class Functions")

console.log(" ➜ To understand what's going on, go to the code\n")

const functions = [
  function (person: string) {
    console.log("hello there " + person)
  },
  (person: string) => {
    console.log("I HATE YOU " + person)
  },
  (person: string) => {
    console.log("This is the third index of our array function", person, "nothing much to say !\n")
  }
]

functions.forEach((greeting) => {
  greeting("kevin")
})

/** - - - */

function callWithAdams(argumentFunction: { (name: string): void }) {
  argumentFunction("Adam")
}

callWithAdams((name: string) => console.log(`${name} is my friend`))