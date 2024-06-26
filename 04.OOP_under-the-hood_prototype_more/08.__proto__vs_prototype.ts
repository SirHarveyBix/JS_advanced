import { logger } from '.'

logger(__filename, `   __proto__ Vs. Prototype`)

function DogProto(name: string, breed: string) {
  this.name = name
  this.breed = breed
}
DogProto.prototype.bark = function () {
  return `${this.name} barks Woofs !`
}
DogProto.prototype.sleep = function () {
  return `${this.name} sleeping !`
}

console.log("[prototype]: exists on functions, here it will points to the methods defined on it: sleep() & bark()")
console.log("[__proto__]: proper to the JS engine, so you can access it trough a browser")
console.log("[__proto__]: internal property, don't touche it !")