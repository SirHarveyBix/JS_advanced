
// TS ignore

import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `${TEXT.CLOSURE}   the ${TEXT.BOLD}new${TEXT.CLOSURE} Keyword`)


console.log(`   ➜ ${TEXT.BOLD}${TEXT.RED}new${TEXT.CLOSURE}`)

console.log(`○ the ${TEXT.ITALIC}new${TEXT.CLOSURE} keyword does four things:`)
console.log("  1. Creates an empty object")
console.log(`  2. Sets the keyword ${TEXT.ITALIC}this${TEXT.CLOSURE} to be that object`)
console.log(`  3. returns the object - ${TEXT.ITALIC}return this${TEXT.CLOSURE}`)

class Dog {
  name: string
  breed: string

  constructor(name: string, breed: string) {
    this.name = name
    this.breed = breed
  }

  break() {
    return "Woofs! "
  }
}

console.log("\n     new Array() => ", new Array())
console.log("     new Object() => ", new Object())
console.log("     new Dog('Elton', 'Aussie') => ", new Dog("Elton", "Aussie"))

function DogConstructorFn(name: string, breed: string) {
  this.name = name
  this.breed = breed
  console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this)

}

console.log("\na constructor works a as a regular function()")
console.log(`but to use it, we must use ${TEXT.BOLD}new${TEXT.CLOSURE} keyword, as it follows :\n`)
console.log("new DogConstructorFn('Elton', 'Aussie') =>", new DogConstructorFn("Elton", "Aussie"))
console.log(`otherwise ${TEXT.BOLD}this${TEXT.CLOSURE} is undefined!\n`)
