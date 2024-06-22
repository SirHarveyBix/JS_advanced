import { logger } from "."

logger(__filename, "   Introducing This")

const person = {
  name: "Guillaume",
  city: "Nantes",
  lookingFor: function () {
    return `${this?.name} looking for a Job!`
  }
}

console.log("In this case, this.name, is defined:")
console.log("  ", person.lookingFor())

console.log("\nIn this next case, this.name, is not defined:")
const what = person.lookingFor

console.log("  ", what())

console.log("\nThe teacher will probably tell us that it's because 'person.lookingFor' points the reference, not the method !")
