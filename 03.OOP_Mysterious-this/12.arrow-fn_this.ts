import { TEXT } from '../utils/colors'
import { isIntervalStopped } from './11.bind-timers'
import { logger } from './index'

let isSecondIntervalStopped = false

class Cat {
  firstName: string

  constructor(firstName: string) {
    this.firstName = firstName
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`) // works
    console.log(`  ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this)

    setTimeout(function () {
      console.log(`\n#2 I am ${this.firstName}`) // uh oh
      console.log(`  ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this)
    }, 500)

    setTimeout(() => {
      console.log(`\n#3 I am ${this.firstName}`) // yay!
      console.log(`  ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this)
      isSecondIntervalStopped = true
    }, 1000)
  }
}

let kitty = new Cat("Kitty")

async function runAfterInterval() {
  while (!isIntervalStopped) {
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  logger(__filename, "   Arrow functions & 'This'")

  kitty.superGreet()
}

runAfterInterval()

export { isSecondIntervalStopped };