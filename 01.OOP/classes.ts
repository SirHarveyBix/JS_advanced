
console.log("\nGood old Classes :\n")

class Triangle {
  public a: number = 0
  public b: number = 0
  private c: string = 'Private'

  getArea() {
    return (this.a + this.b) / 2
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }

  getPrivate() {
    return this.c
  }

  setPrivate(c: string) {
    console.log('  private field c is', this.c)
    this.c = c
    console.log('  private field c is now', this.c)

  }
}

const firstTriangle = new Triangle()
firstTriangle.a = 5
firstTriangle.b = 12

console.log(firstTriangle)

console.log("is firstTriangle constant is instance of Triangle ?", firstTriangle instanceof Triangle)

firstTriangle.setPrivate('Public')