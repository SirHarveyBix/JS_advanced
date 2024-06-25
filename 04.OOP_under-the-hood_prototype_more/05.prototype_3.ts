import { logger } from '.'
import { TEXT } from '../utils/colors'

logger(__filename, `   Prototypes: Part 3`)

class Dog {
  name: string
  breed: string

  constructor(name: string, breed: string) {
    this.name = name
    this.breed = breed
  }

  sleep = function () {
    return `${this.name} sleeping !`
  }

  bark = function () {
    return `${this.name} barks Woofs !`
  }
}

function DogConstructorFn(name: string, breed: string) {
  this.name = name
  this.breed = breed
}

console.log("Now we know how to manipulate prototype we can get rid of the function inside DogConstructorFn ")
console.log("and, 'insert' it trough a prototype : 'DogConstructorFn.prototype.bark = function', \n")

const winky = new DogConstructorFn("Winky", "Catus Felis")

console.log(`   ${TEXT.BOLD}${TEXT.RED}DON'T FORGET THE KEYWORD : ${TEXT.GREEN}new${TEXT.CLOSURE}\n`)

DogConstructorFn.prototype.bark = function () {
  return `${this.name} barks Woofs !`
}

DogConstructorFn.prototype.sleep = function () {
  return `${this.name} sleeping !`
}

console.log("Which gives us :", winky.bark())
console.log("                ", winky.sleep())

console.log("\nevery function has a prototype method, and gives access to the constructor,")
console.log("which point back to the function")

const constructedWinky = new winky.constructor("Bilbo", "Pug")
console.log("\nnew winky.constructor('bilbo', 'pug') => ", constructedWinky)

console.log(`\nWhen the ${TEXT.BOLD}${TEXT.ITALIC}${TEXT.GREEN}new${TEXT.CLOSURE} keyword is used to invoke a function,\na link between the object created from new and the prototype object is established!`)

console.log("\nwinky.__proto__: ", winky.__proto__)