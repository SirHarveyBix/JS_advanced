import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Immutability")


const person = { name: "Teddy", age: 30 }
console.log(person)

person.age = 37
console.log(person)

console.log(" ➜ this Object as been mutated\n")

Object.freeze(person)

console.log(`with ${TEXT.BLUE}Object${TEXT.CLOSURE}.${TEXT.GREEN}freeze${TEXT.CLOSURE}(${TEXT.PURPLE}person${TEXT.CLOSURE}), any Object become Immutable ➜`, person)
console.log("with TypeScript any change will throw an error\n")

console.log("it's proper to return a copy of the 'mutated' value")

const numbers = [10, 20, 30, 40];

console.log("  ➜ before mutation   ➜", numbers)

function push(array: number[], value: number) {
  const mutatedArray = [...array, value]

  console.log("  ➜ mutated Array     ➜", mutatedArray)
  console.log("  ➜ original Array    ➜", array)

  return mutatedArray
}

push(numbers, 9489)

const newPerson = { ...person, age: 99 }

console.log(`\nCopied person ➜ ${TEXT.DARK_BLUE}newPerson ${TEXT.PURPLE}=${TEXT.CLOSURE} { ${TEXT.PURPLE}...${TEXT.CLOSURE}${TEXT.DARK_BLUE}person${TEXT.CLOSURE}, age${TEXT.PURPLE}: ${TEXT.DARK_BLUE}99${TEXT.CLOSURE} } ➜`, newPerson)