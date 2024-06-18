
console.log("\nGood old Classes  with constructors :\n")

class TriangleC {
  private a: number = 0
  private b: number = 0

  constructor(sideA: number, sideB: number) {
    if (!Number.isFinite(sideA) || sideA <= 0) {
      console.error(`Invalid sideA value: ${sideA}`)
      this.a = NaN
    } else {
      this.a = sideA
    }

    if (!Number.isFinite(sideB) || sideB < 0) {
      console.error(`Invalid sideB value: ${sideB}`)
      this.b = NaN
    } else {
      this.b = sideB
    }
  }

  getArea() {
    return (this.a + this.b) / 2
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}

const triangleII = new TriangleC(2, 4)
const triangle = new TriangleC(5, 12)

console.log("after sat values, triangle.getArea :", triangle.getArea())
console.log("after sat values, triangleII.getArea :", triangleII.getArea())

console.log("\nConstructors ares used for :\n  - Validate Data, \n  - Assign properties \n")

console.log("\n -> Validate Data (sideB > 0): ", new TriangleC(5, -1), "\n")