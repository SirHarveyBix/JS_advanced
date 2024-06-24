import { logger } from './index'
import { TEXT } from '../utils/colors'

logger(__filename, '   The apply() method')

const guillaume = {
  firstName: 'Guillaume',
  greet: function (greeting: string, punctuation: string) {
    console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is${TEXT.CLOSURE}`, this)
    return `${this?.firstName} says ${greeting}${punctuation}\n`
  }
}

const georges = {
  firstName: 'georges',
  lastName: 'Harrison'
}

console.log(
  "guillaume.greet.call(georges, 'hi') =>",
  guillaume.greet.call(georges, 'hi', '!!!')
)

console.log('\n   apply() needs an array to work on function parameter:')
console.log(
  "guillaume.greet.apply(georges, ['hi']) =>",
  guillaume.greet.apply(georges, ['Yo Bruh', '!! as []'])
)

const nums = [1, 2, 5, 99, 3, 18]

console.log("'Math.max.apply(null, nums) =>'", Math.max.apply(null, nums))
console.log(
  "'Math.max.call(null, nums) =>'",
  `${TEXT.RED}[ERROR]: will throws an error !${TEXT.CLOSURE}, unless you spread it`
)

function maximum(...argumentsNamesDoesNotMatter: any) {
  console.log("\nfor the return line, on JS, the course doesn't mention destructuring")
  console.log(arguments)
  return Math.max.apply(null, [...arguments])
}

maximum(1, 8, 1988)
maximum(1)
