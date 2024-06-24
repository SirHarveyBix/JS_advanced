import { logger } from "."

logger(__filename, "   The mystery of the Keyword This:")

class Cat {
  public firstName: string

  constructor(firstName: string) {
    this.firstName = firstName
  }

  dance(style = "tango") {
    return `  Meow, I am ${this?.firstName}` + ` and I like to ${style}`
  }
}

const cat = new Cat("Ehpad")
console.log(cat.dance())

console.log(cat.dance("Hip Hop"))

const dancingCat = cat.dance
console.log(dancingCat())