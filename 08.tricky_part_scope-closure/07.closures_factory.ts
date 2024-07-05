import { logger } from "."

logger(__filename, `   Closures: Factory Function`);

function createExponentFunction(exponent: number) {
  console.log('exponent ➜', exponent)

  return function (value: number) {

    console.log('value ➜', value)
    return value ** exponent
  }
}

console.log('\n 1. Store createExponentFunction with exponent parameter')
const square = createExponentFunction(2)
const cube = createExponentFunction(10)

console.log('\n 2. Executes stored createExponentFunction with value parameter')
console.log('\nsquare(10) ➜', square(10))
console.log('\ncube(3) ➜', cube(3))

function uniqueIDGenerator(prefix: string) {
  let id = 0
  return () => {
    id += 1
    return `${prefix}${id}`
  }
}

console.log('\n 1. Store uniqueIDGenerator with prefix parameter')

const getBookId = uniqueIDGenerator('book_')
const getUserId = uniqueIDGenerator('user/')

console.log(' 2. Executes stored uniqueIDGenerator\n')
console.log('getBookId ➜', getBookId())
console.log('getUserId ➜', getUserId())

console.log('getBookId ➜', getBookId())
