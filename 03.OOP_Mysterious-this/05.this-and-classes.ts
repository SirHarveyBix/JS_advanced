import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   This & Classes")

class Cat {
  public firstName: string

  constructor(firstName: string) {
    this.firstName = firstName
  }

  static getRandomCat() {
    console.log("getRandomCat(), 'This' is :", this)
  }

  dance(style = "tango") {
    console.log("dance(), 'This' is :", this, "")
    return `Meow, I am ${this?.firstName}` + ` and I like to ${style}\n`
  }
}

const cat = new Cat("Ehpad")
console.log("calling dance():", cat.dance())

const dancingCat = cat.dance
console.log("calling dancingCat = cat.dance:", dancingCat())


console.log("\n cat.dance('Reggaeton')")
console.log(`  - ${TEXT.BOLD}Find${TEXT.CLOSURE} the ${TEXT.ITALIC}dance${TEXT.CLOSURE} method on cat`)
console.log(`  - ${TEXT.BOLD}Call${TEXT.CLOSURE} the ${TEXT.ITALIC}dance${TEXT.CLOSURE} method on cat\n`)

dancingCat('Reggaeton')

console.log(`  - ${TEXT.BOLD}Find${TEXT.CLOSURE} the ${TEXT.ITALIC}dance${TEXT.CLOSURE} method on cat`)
console.log(`  - ${TEXT.BOLD}Call${TEXT.CLOSURE} the ${TEXT.ITALIC}dance${TEXT.CLOSURE} method on.. undefined ???\n`)

console.log(`\n             ${TEXT.BOLD}OOP and${TEXT.CLOSURE} ${TEXT.ITALIC}this${TEXT.CLOSURE}\n`)
console.log("      when you call a function on nothing,")
console.log("   but th function comes from inside a class,")
console.log("the value of 'This' will be undefined, not the 'Window',")

console.log("\nin either case, you'll see this referred to as 'losing the 'This' context.")
console.log("\nFortunately, there are ways to force the value of 'This' to be whatever we want.")