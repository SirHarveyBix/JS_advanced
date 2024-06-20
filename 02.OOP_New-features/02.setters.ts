import { logger } from ".";
import { TEXT } from "../utils/colors";

logger(__filename, "Setters:")

class Circle {
  private _radius: number

  constructor(radius: number) {
    this._radius = radius
  }

  set radius(value: number) {
    if (value < 0) {
      console.error(`${TEXT.RED}Radius can't be negative${TEXT.CLOSURE}`)
      return
    }
    this._radius = value
  }
}

const circle = new Circle(5)
circle.radius = -5