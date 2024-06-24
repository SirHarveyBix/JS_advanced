import { TEXT } from '../utils/colors'
import { isSecondIntervalStopped } from './12.arrow-fn_this'
import { logger } from './index'


async function runAfterInterval() {
  while (!isSecondIntervalStopped) {
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  logger(__filename, "   'This' Takeaways")
  console.log("Don't lose your 'This' ")
  console.log("if you don't call a function yourself (as any callback), use .bind()")

}

runAfterInterval()