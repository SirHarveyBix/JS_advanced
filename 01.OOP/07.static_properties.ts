import { logger } from "."

logger(__filename, "Static Properties :")

class Cat {
  static species = "Felis Catus"
  public name: string
  public breed: string

  constructor(name: string, breed: string) {
    this.breed = breed
    this.name = name
  }
}

const myCat = new Cat("EHPAD", "Noisy stinky")

console.log("myCat : ", myCat, " & ", Cat.species, "\n")
console.log("species of 'myCat' is only accessible by referring to the class itself :\n ", myCat)
console.log("\n  -> myCat :", myCat, "\n  -> Cat :", Cat)


