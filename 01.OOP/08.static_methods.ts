import { logger } from "."

logger(__filename, "Static Methods :")

class Cat {
  public name: string
  public breed: string

  constructor(name: string, breed: string) {
    this.breed = breed
    this.name = name
  }

  static species = "Felis Catus"

  static meow() {
    return "MEOW MEEOOOOW !"
  }

  static classItself() {
    console.log("classItself - this :", this)
    return this
  }

  instance() {
    console.log("instance - this :", this)
    return this
  }
}

const myCat = new Cat("EHPAD", "Noisy stinky")

console.log("Statics properties, and static methods works the same, only accessible from the class, not the instance.")
console.log("myCat.meow() will throw an error, instead call the class : Cat.meow()\n", Cat.meow())

console.log("\nstatic refers to the class :", Cat.classItself())
console.log("\nfrom the instance : ", myCat.instance())
