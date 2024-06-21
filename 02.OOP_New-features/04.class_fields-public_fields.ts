import { logger } from "."

logger(__filename, "   Public Fields:")

class Cat {
  private name: string
  static numbOfCats = 0

  public hasTail = true
  numbLegs = 4

  constructor(name: string) {
    this.name = name
    Cat.numbOfCats += 1
  }

  amputate() {
    this.numbLegs -= 1
  }
}

console.log("We actually use Fields since the beginning of this entire course,\n")

const cat = new Cat("pony")
const anotherCat = new Cat("dunno")

console.log(cat)
console.log(`Class has ${Cat.numbOfCats} Cat so far`)

console.log("\nthere's many keywords for fields : static, private, public, etc...;")
console.log("public fields has none 'numbLegs' has been declared this way: 'numbLegs = 4'")
