import { logger } from "."
import { TriangleC } from "./03.constructor"

logger(__filename, "Inheritance Basics :")

class ShyTriangle extends TriangleC {

  describe() {
    return "(runs and hides)"
  }
}

const shyTriangle = new ShyTriangle(3, 4)

console.log("Describe ShyTriangle :", shyTriangle.describe())
console.log("getArea from ShyTriangle :", shyTriangle.getArea(), "\n")
console.log("ShyTriangle : ", shyTriangle)