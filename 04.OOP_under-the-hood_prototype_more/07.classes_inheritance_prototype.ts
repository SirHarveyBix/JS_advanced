import { logger } from '.'

logger(__filename, `   Classes, Inheritance & Prototypes`)

function Dog(name: string, breed: string) {
  this.name = name
  this.breed = breed

  this.sleep = function () {
    return `${this.name} sleeping !`
  }
  this.bark = function () {
    return `${this.name} barks Woofs !`
  }
}

function DogProto(name: string, breed: string) {
  this.name = name
  this.breed = breed
}
DogProto.prototype.bark = function () {
  return `${this.name} barks Woofs !`
}
DogProto.prototype.sleep = function () {
  return `${this.name} sleeping !`
}

class DogClass {
  name: string
  breed: string

  constructor(name: string, breed: string) {
    this.name = name
    this.breed = breed
  }

  sleep() {
    console.log("automatically added to the prototype")
    return `${this.name} sleeping !`
  }

  bark() {
    console.log("automatically added to the prototype")
    return `${this.name} barks Woofs !`
  }
}

const bilbo = new Dog("Bilbo", "Pug")
console.log("[function]: Dog > bilbo =>\n", bilbo)

class GuideDog extends DogClass {
  owner: string

  constructor(name: string, breed: string, owner: string) {
    super(name, breed)
    this.owner = owner
  }

  alert() {
    return `${this.name} alerts you from a imminent danger, Good Boy !`
  }
}

const guideDog = new GuideDog("Chaco", "Lab", "Maggie")

console.log("\n[class]GuideDog extends DogClass > guideDog =>\n ", guideDog)
console.log("\nMake sure you You're able to explain what prototype is !")