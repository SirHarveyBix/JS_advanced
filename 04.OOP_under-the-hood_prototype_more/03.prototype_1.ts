import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `${TEXT.CLOSURE}   the ${TEXT.BOLD}new${TEXT.CLOSURE} Keyword`)

class Dog {
  name: string
  breed: string

  constructor(name: string, breed: string) {
    this.name = name
    this.breed = breed
  }

  bark() {
    console.log(`   class => ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this)
    return `${this.name} barks Woofs !`
  }

  sleep() {
    return `${this.name} sleeping !`
  }
}

const elton = new Dog("Elton", "Aussie")
const wyatt = new Dog("Wyatt", "Aussie")
console.log("class Dog =>", elton.sleep())
console.log("class Dog =>", elton.bark())

function DogConstructorFn(name: string, breed: string) {
  this.name = name
  this.breed = breed

  this.bark = function () {
    return `${this.name} barks Woofs !`
  }

  this.sleep = function () {
    return `${this.name} sleeping !`
  }

  console.log(`   function => ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this)
}

console.log()
const eltonFn = new DogConstructorFn("Elton", "Aussie")
const wyattFn = new DogConstructorFn("Wyatt", "Aussie")
console.log()
console.log("DogConstructorFn() => ", eltonFn.sleep())
console.log("DogConstructorFn() => ", eltonFn.bark())

console.log("Classes Vs. Function")
console.log("a function as we just wrote down before, will create a new copy, every time")
console.log("a class, will not duplicate !")

console.log("is Bark function shares the same reference ? \n")
console.log(`${TEXT.RED}${TEXT.BOLD}class ${TEXT.CLOSURE}   => elton.bark === wyatt.bark:`, elton.bark === wyatt.bark)
console.log(`${TEXT.RED}${TEXT.BOLD}function ${TEXT.CLOSURE}=> eltonFn.bark === wyattFn.bark:`, eltonFn.bark === wyattFn.bark)
console.log(`  -> ${TEXT.RED}${TEXT.BOLD}They do not share the same reference ! ${TEXT.CLOSURE}`)