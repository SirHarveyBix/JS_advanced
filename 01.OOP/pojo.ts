console.info("POJO - Plain Old Javascript Object \n")

const key = "species"
const pet: any = {
  species: "Dog",
  name: "Elton",
  age: 1.5
}
console.log("pet[key]", pet[key])

pet["friend"] = []
pet.bark = () => {
  return "Woof, Wooof !"
}
console.log("pet", pet)
console.log("pet.bark", pet.bark())

/* Area of right triangle */
const getTriangleArea = (a: number, b: number) =>
  (a * b) / 2


/* Hypotenuse of right triangle */
const getTriangleHypotenuse = (a: number, b: number) =>
  Math.sqrt(a ** 2 + b ** 2)


console.log("getTriangleArea ", getTriangleArea(2, 4))
console.log("getTriangleArea ", getTriangleHypotenuse(2, 4))

console.log("getTriangleArea ", getTriangleArea(5, 12))
console.log("getTriangleArea ", getTriangleHypotenuse(5, 12))

const myTriangle = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a + this.b) / 2
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}
console.log("myTriangle ", myTriangle)
console.log("myTriangle.getArea ", myTriangle.getArea())


myTriangle.a = 5
myTriangle.b = 12
console.log("myTriangle ", myTriangle)

console.log("myTriangle.getArea ", myTriangle.getArea())
console.log("myTriangle.getHypotenuse ", myTriangle.getHypotenuse())