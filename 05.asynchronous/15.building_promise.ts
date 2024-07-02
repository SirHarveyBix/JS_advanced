import { logger } from "."
import { TEXT } from "../utils/colors"
import { nextPage_Promisifying } from "./16.promisifying"

export const nextPage_BuildingPromise = async () => {
  logger(__filename, `   Building our own Promises Objects`)

  console.log(`${TEXT.BOLD}${TEXT.RED}${TEXT.CLOSURE}`)

  console.log(` • You can use ${TEXT.ITALIC}Promise${TEXT.CLOSURE} with the ${TEXT.ITALIC}new${TEXT.CLOSURE} keyword to make our own promises`)
  console.log(` • Unfortunately, the syntax here takes some time to getting used to`)
  console.log(` • ${TEXT.ITALIC}promise${TEXT.CLOSURE} accepts a single function (call it ${TEXT.ITALIC}fn${TEXT.CLOSURE}) as an argument`)
  console.log(`   ➜ ${TEXT.ITALIC}fn${TEXT.CLOSURE} accepts  two functions as arguments, ${TEXT.ITALIC}resolve${TEXT.CLOSURE} and ${TEXT.ITALIC}reject${TEXT.CLOSURE}`)
  console.log(`   ➜ pass ${TEXT.ITALIC}resolve${TEXT.CLOSURE} a value for the promise to resolve to that value`)
  console.log(`   ➜ pass ${TEXT.ITALIC}reject${TEXT.CLOSURE} a value for the promise to reject to that value\n`)

  async function wait(duration: number) {
    const promise = new Promise((resolve, rejects) => {
      setTimeout(() => {

        const random = Math.random()
        if (random < 0.5) {
          resolve("[RESOLVE]: THIS IS THE RESOLVED VALUE !")
        } else {
          rejects("[REJECTS]: THE VALUE HAS BEEN REJECTED !")
        }
      }, duration)
    })
    return promise
  }

  wait(1500)
    .then((value) => {
      console.log("INSIDE first .then():", value)
      return wait(1500)
    })
    .then((value) => {
      console.log("INSIDE second .then():", value)
      return wait(500)
    })
    .catch(error => console.error("INSIDE CATCH:", error))
    .finally(async () => await nextPage_Promisifying())
}
