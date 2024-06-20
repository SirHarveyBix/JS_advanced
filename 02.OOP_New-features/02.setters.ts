import { logger } from ".";
import { TEXT } from "../utils/colors";

logger(__filename, "Setters:")

class Circle {
  private _radius: number
  private _color: string = ""
  static allowedColors = new Set(["red", "green", "blue", "pink"])

  constructor(radius: number, color: string) {
    this._radius = radius
    this.setColor(color)
  }

  get radius() {
    return this._radius
  }

  set radius(value: number) {
    if (value < 0) {
      console.error(`${TEXT.RED}  ERROR: Radius can't be negative${TEXT.CLOSURE}`)
      return
    }
    this._radius = value
  }

  get color() {
    return this._color
  }

  set color(newColor: string) {
    this.setColor(newColor)
  }

  setColor(newColor: string) {
    const color = newColor.toLowerCase().trim()
    if (Circle.allowedColors.has(color)) {
      this._color = color
      return
    }
    console.error(`${TEXT.RED}  ERROR: The ${TEXT.BOLD}${newColor}${TEXT.CLOSURE}${TEXT.RED} color is not allowed${TEXT.CLOSURE}`)
  }
}

console.log("Setter works exactly like getter, except, it needs ONLY ONE argument\n ")

const circle = new Circle(5, "pink")
console.log(circle)

circle.radius = -5
circle.color = "yellow"
console.log("\n", circle)

circle.color = "Green"

console.log("", circle)
