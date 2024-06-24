import { logger } from './index';

logger(__filename, '   Binding Arguments');

const applySalesTax = (taxRate: number, price: number) => {
  return price + price * taxRate
}

console.log("regular function call :", applySalesTax(0.005, 240))

const applyHighTVAsalesTax = applySalesTax.bind(null, 0.2)
const applyLowTVAsalesTax = applySalesTax.bind(null, 0.05)

console.log(" [bind]: Arguments function are now bound :")
console.log(" [bind]: applySalesTax.bind(null, 0.2) & applySalesTax.bind(null, 0.05)")
console.log(" [bind]: this way, now, 'applyHighTVAsalesTax' needs 1 argument, the price!\n")

console.log("applyHighTVAsalesTax:", applyHighTVAsalesTax(100))
console.log("applyLowTVAsalesTax:", applyLowTVAsalesTax(100))

console.log("")

function multiply(a: number, b: number) {
  return a * b
}

const doubleIt = multiply.bind(null, 2) // refers to 'this' 
const trippeIt = multiply.bind(null, 3) // refers to 'this'

console.log(" [bind]: a function that'll alway multiply by 2, will be written this way: multiply.bind(null, 2) - doubleIt(5) =>", doubleIt(5))
console.log(" [bind]: but be careful, the first argument of bind: 'null', refers to 'this' ")