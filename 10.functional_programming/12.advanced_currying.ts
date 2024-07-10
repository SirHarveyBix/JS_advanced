import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   More Advanced Currying")

console.log(`A ${TEXT.ITALIC}curried${TEXT.CLOSURE} function can be called with any number of arguments — \nif you call it with fewer args than it takes, it returns a "smaller" partial,\nwhich you can then call with remaining arguments.\n`)

function add3(a: number, b: number, c: number) {
  return a + b + c
}

console.log('we make the curry function more complex, either flexible (unless we get rid of TypeScript)\n')

function curry(fn: { (a: number, b: number, c: number): number }) {
  return function curried(...args: number[]) {
    if (args.length >= fn.length) {

      return fn.apply(this, args)
    } else {
      return function (...args2: number[]) {

        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

console.log("you should see the code bellow")

const curriedAdd = curry(add3)

console.log(curriedAdd(3, 4, 5))
console.log(curriedAdd(3)(4)(5))

console.log(`\n${TEXT.BOLD}➜ ${TEXT.RED}CAUTION ${TEXT.YELLOW}Advanced idea ahead!${TEXT.CLOSURE}\n`)

console.log("    Currying is interesting, and more advanced -")
console.log("    you may find it useful to study this after you've mastered some of the basics.\n")
