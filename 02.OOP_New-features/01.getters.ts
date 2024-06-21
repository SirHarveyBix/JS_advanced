import { logger } from ".";

logger(__filename, "Getters:")

class Circle {
  private _radius: number

  constructor(radius: number) {
    this._radius = radius
  }

  get diameter() {
    return this._radius * 2
  }

  get radius() {
    return this._radius
  }
}

const circle = new Circle(2)

console.log("getter are meant to reach element from a class as a property,")
console.log("after some transformation, for example here, diameter transform the 'radius', previously set:")

console.log(" circle.radius as been set to :", circle, "\n diameter as been transformed :", circle.diameter)

console.log("\n it as been accessed like any public property")