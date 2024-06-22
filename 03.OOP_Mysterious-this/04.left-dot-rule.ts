import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   The 'Left Of The Dot' Rule")

const person = {
  name: "Guillaume",
  city: "Nantes",
  lookingFor: function () {
    console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is${TEXT.CLOSURE}`, this)
    return `\n${this?.name} looking for a Job!\n`
  }
}

console.log("\nPerson -> person.lookingFor(): ", person.lookingFor())

const what = person.lookingFor
console.log('\nwhat = person.lookingFor: ', what)
console.log('\nwhat() = person.lookingFor: ', what())

console.log("  'This', does not every time refers to the object, it changes whether the way you call it")
console.log("  'This' depends on the left side of the '.'")