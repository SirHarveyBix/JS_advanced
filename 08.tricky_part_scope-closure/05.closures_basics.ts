import { logger } from "."

logger(__filename, `   Closures: The Basics`);


function outerFunction() {
  let outerVariable = "I am from Outer !"
  console.log("➜ outerVariable is 'shield on the function 'children function' can access to this variable\n")
  function innerFunction() {
    console.log("I Am Inner Function")
    console.log("outer variable is ➜", outerVariable)
  }

  return innerFunction // not executed
}

const myClosure = outerFunction()  // innerFunction has access to the variables to the parent fn scope

myClosure()

function idGenerator() {
  let count = 1
  console.log("\n➜ count is 'shield on the function 'children function' can access to this variable\n")

  return function generate() {
    return count++
  }
}

const nextId = idGenerator()

console.log(nextId()) // persistent shielded

console.log("  Closure is nothing but a function nested inside another function,\n  that can return & gain access to its parent variables after the function has been executed")