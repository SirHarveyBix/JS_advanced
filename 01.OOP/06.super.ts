import { logger } from "."
import { TEXT } from "../utils/colors"
import { TriangleC } from "./03.constructor"

logger(__filename, "The Super KeyWord :")

class ColoredTriangle extends TriangleC {

  public color: string = ""

  constructor(sideA: number, SideB: number, color: string) {
    super(sideA, SideB) //super inherit from the constructor of extended class:  TriangleC 

    console.log(`\n  ${TEXT.BOLD}-> super()${TEXT.CLOSURE}\n  inherit from the constructor of extended class: TriangleC\n  Needed if we need to set another property, Here: color\n`)

    this.color = color
  }
}

const coloredTriangle = new ColoredTriangle(3, 4, "blue")

class ColoredHappyTriangle extends ColoredTriangle {
  public mood: string = ""

  constructor(sideA: number, SideB: number, color: string, mood: string) {
    super(sideA, SideB, color)
    this.mood = mood

    console.log("sideA, SideB : inherited from TriangleC")
    console.log("color : inherited from ColoredTriangle")
    console.log("mood : is specific from ColoredHappyTriangle class")
  }
}

const coloredHappyTriangle = new ColoredHappyTriangle(3, 4, "blue", "SUPER")
console.log("\ncoloredHappyTriangle is super super inherited : ", coloredHappyTriangle)

const secondColoredHappyTriangle = new ColoredHappyTriangle(3, 4, "green", "Happy")
console.log("\nsecondColoredHappyTriangle is super super inherited : ", secondColoredHappyTriangle)

const thirdColoredHappyTriangle = new ColoredHappyTriangle(-1, -4, "green", "Happy")
console.log("\nthirdColoredHappyTriangle inherit TriangleC logic : ", thirdColoredHappyTriangle)