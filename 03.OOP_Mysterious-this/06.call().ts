import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   The call() method")

class Cat {
  public firstName: string

  constructor(firstName: string) {
    this.firstName = firstName
  }

  static getRandomCat() {
    console.log("getRandomCat() => 'This' is :", this)
  }

  dance(style = "tango") {
    console.log("dance() => 'This' is :", this, "")
    return `Meow, I am ${TEXT.GREEN}${TEXT.BOLD}'${this?.firstName}'${TEXT.CLOSURE}` + ` and I like to ${style}\n`
  }
}

const ehpad = new Cat("Ehpad")
console.log("calling dance():", ehpad.dance())

const dancingEhpad = ehpad.dance
console.log("calling dancingEhpad = cat.dance:", dancingEhpad())

const kitty = new Cat('Kitty')

console.log("ehpad.dance() =>", ehpad.dance())
console.log("   The value of 'firstName' is ehpad, as it is supposed to be !\n")

console.log("dancingEhpad.call(kitty) =>", dancingEhpad.call(kitty))
console.log("   The value of 'firstName' is Kitty, as it is NOT supposed to be !\n")

console.log("dancingEhpad.call(kitty, 'salsa') =>", dancingEhpad.call(kitty, 'salsa'))

const guillaume = {
  name: "Guillaume",
  city: "Nantes",
  lookingFor: function () {
    console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is${TEXT.CLOSURE}`, this)
    return `${this?.name} looking for a Job!\n`
  }
}

const lisa = {
  name: "Marion",
  city: "Plévenon"
}

console.log("   Works the same way for classical JSON :\n")

console.log("\n'guillaume.lookingFor()' =>", guillaume.lookingFor())
console.log("\n'guillaume.lookingFor.call(lisa)' =>", guillaume.lookingFor.call(lisa))
