import { logger } from '.'
import { TEXT } from '../utils/colors'

logger(__filename, `   Prototypes: Part 2`)

const myObject = {
  color: 'PURPLE',
  score: 99,
  greet() {
    console.log('Hii !')
  },
}

console.log("  every thing is JS has a prototype")
console.log("  prototype is an Object that have shared functionalities, like '.toString', '.split' ..\n")
console.log("  that any Object can inherit from !")

console.log('myObject.__proto__ || Object.getPrototypeOf(myObject) => ', Object.getPrototypeOf(myObject), '\n')

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


console.log(elton)