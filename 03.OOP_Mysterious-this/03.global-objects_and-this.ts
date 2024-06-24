import { logger } from "."

logger(__filename, "   Global Objects and This:")

class Cat {
  public firstName: string

  constructor(firstName: string) {
    this.firstName = firstName
  }

  dance(style = "tango") {
    return `  Meow, I am ${this?.firstName}` + ` and I like to ${style}`
  }
}

function greet() {
  return 'Hello There !'
}

console.log("When you call a function on noting, you call it on the 'Global Oject'")
console.log("  - in browser js, that's windows (the browser windows)")
console.log("  - in NodeJS, thats 'Global' where some Node utilities are")
console.log("\nit could be called like this: window.console.log('it as been called this way')")