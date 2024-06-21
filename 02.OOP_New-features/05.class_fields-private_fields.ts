
import { logger } from "."

logger(__filename, "   Private Fields:")

class Circle {
  #radius: number
  private secondRadius: number

  diameter: string = "diameter"
  public secondDiameter = "secondDiameter"

  constructor(radius: number) {
    this.#radius = radius
    this.secondRadius = radius
  }

  getPrivateRadius() {
    return this.#radius
  }
  getPrivateSecondRadius() {
    return this.secondRadius
  }

  get radius() {
    return this.#radius
  }
}

console.log("Private class fields are not accessible from an instance of a class\n")

const circle = new Circle(5)
console.log("shorthands for private fields was initially '_', but was still public, then it become: '#'\nin other words: 'circle.#radius' would throw an error! ")

console.log("\nso, to access a private field, you must use a getter or a method, but that means : Is it necessary to get a private fields ?")
console.log("getter :", circle.radius)
console.log("with method: getPrivateRadius :", circle.getPrivateRadius())