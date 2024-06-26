import { logger } from '.'

logger(__filename, `   Useful Prototypes Methods`)

const person = {
  isHuman: true,
  sing() {
    return 'la la la'
  }
}

const tom = Object.create(person)
tom.firstName = "tom"
console.log("   Object.create(person) allows to create an object from an existing one => \n", tom)

console.log(tom.firstName, tom.sing())
console.log("[__proto__]: you can access to the full prototype, from a browser => tom.__proto__")

const newTom = Object.setPrototypeOf(tom, { isHuman: false })
console.log("   Object.setPrototypeOf(tom, { isHuman: false }) => ", newTom)

const ling = Object.create(person)
ling.firstName = "ling"


console.log("   person.isPrototypeOf(ling) => ", person.isPrototypeOf(ling))