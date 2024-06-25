import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Intro: OOP Under the Hood")

class Dog {
  name: string
  breed: string

  constructor(name: string, breed: string) {
    this.name = name
    this.breed = breed
  }

  break(name: string, breed: string) {
    return name + " " + breed + " Woofs! "
  }
}

console.log(`${TEXT.BOLD}JS OO Under The Hood${TEXT.CLOSURE}`)
console.log(` - ${TEXT.BOLD}new${TEXT.CLOSURE}`)
console.log(" - prototypes")
console.log(" - constructor")
console.log(" - Object.getPrototypeOf")
console.log(" - Object.prototypes inheritance")

const dog = new Dog("killer", "hairy")

console.log("\n", dog.break.apply(null, ["Dany", "the dog"]))