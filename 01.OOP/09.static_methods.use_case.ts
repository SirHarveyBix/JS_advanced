import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "Static Methods #FactoryMethods - Use Cases:")

class Cat {
  public name: string
  public breed: string
  static nameList = ["Muffin", "Biscuit", "Sleepy", "Dodo", "Ehpad", "Princess Butterface"]

  constructor(name: string, breed: string) {
    this.breed = breed.trim()
    this.name = name.trim()
  }

  // factory method :
  static registerStray() {
    const name = choice(this.nameList);
    console.log(`\n${TEXT.ITALIC} Your cat name will be randomly picked.\n${TEXT.CLOSURE}`)
    return new Cat(name, "unknown")
  }

  meow() {
    return `${this.name} says MEOW MEEOOOOW, again !`
  }
}

function choice(nameList: string[]) {
  const randIdx = Math.floor(Math.random() * nameList.length);
  return nameList[randIdx];
}

console.log("  Static Methods are mostly used as 'Factory', that executes logic inside the class,")
console.log("  it doesn't 'go out', that might be used for register an user")
console.log("registerStray => Example of factory method :", Cat.registerStray())

const myCat = new Cat("beer", "  random stray cat")
console.log("\nthe rest of the class logic stays available :", myCat)
