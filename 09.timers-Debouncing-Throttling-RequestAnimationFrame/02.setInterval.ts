import { logger } from "."

logger(__filename, `   setInterval`)

const anyInterval = setInterval(() => {
  console.log("it's been 2 seconds, 2000 milli secs")
}, 2000)

clearInterval(anyInterval)

function startCountDown(duration: number) {
  let secondRemaining = duration

  const interval = setInterval(() => {
    console.log(secondRemaining)
    secondRemaining -= 1

    if (secondRemaining < 0) {
      clearInterval(interval)
    }
  }, 1000)
}

startCountDown(3)

