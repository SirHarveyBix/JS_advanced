import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Simple Compos Function")

type fn<T, R> = (arg: T) => R

/* Overkill Generic  TypeScript Shit ! */

function compose<T, U, V>(function1: fn<T, U>, function2: fn<U, V>) {
  return function (value: T): V {
    return function2(function1(value))
  }
}

console.log(`You can think if this function as ${TEXT.ITALIC}f(g(x))${TEXT.CLOSURE}.\n`)


function repeatTwice(string: string) {
  return string.repeat(2)
}

function upperCase(string: string) {
  return string.toUpperCase()
}

const composed = compose(repeatTwice, upperCase)

console.log(composed("hello"))

const double: fn<number, number> = (a: number) => a * a
const square: fn<number, number> = (a: number) => a * 2

const composedMath = compose(double, square)
console.log(composedMath(2))

console.log(TEXT.BLUE, TEXT.BOLD, "\nIt is the same than de previous module, but here the interesting point is the typing, ", TEXT.CLOSURE)