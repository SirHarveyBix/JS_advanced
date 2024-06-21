
import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Private Methods:")

class MyClass {
  #privateMethod() {
    console.log(`${TEXT.BOLD}  Inside a private method${TEXT.CLOSURE}`)
  }

  publicMethod() {
    this.#privateMethod()
  }
}

const myClass = new MyClass()

console.log("Private methods, or fields, work the same;\nCalling a public method, that calls a private method: \n")
myClass.publicMethod()