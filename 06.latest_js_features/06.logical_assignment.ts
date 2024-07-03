import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Logical assignment`)

console.log(`Logical assignments are a combination of logical operators (${TEXT.ITALIC}&&${TEXT.CLOSURE}, ${TEXT.ITALIC}||${TEXT.CLOSURE}, or${TEXT.ITALIC}??${TEXT.CLOSURE}) and assignment expressions.`)
console.log("'todo.priority ||= 'MEDIUM'")

let todo = { priority: null, task: "Finish Editing Course", isTraining: false, score: null }
console.log(todo.priority)

todo.priority ||= "MEDIUM"
console.log(todo.priority)

todo.priority || (todo.priority = "MEDIUM\n")
console.log(todo.priority)

// if (!todo) {
//   todo = { ...todo, priority: 'HIGH' }
// }

todo &&= { ...todo, priority: 'HIGH' }
console.log(todo)

todo.score ??= 10
console.log(todo)

function doSomeSetup(options: any = {}) {
  options.timeout ??= 3000
  options.retries ??= 55
  options.countDown ||= 10

  console.log()
  console.log(options)
}

doSomeSetup()
doSomeSetup({ timeout: 18 })
console.log('\noptions.countDown ||= 10 ➜ doSomeSetup({  retries: 0,  countDown: 0})')
doSomeSetup({
  retries: 0,
  countDown: 0 // ||= will keep the default value
})