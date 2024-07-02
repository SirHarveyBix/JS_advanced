import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { nextPage_AsyncAwait } from "./07.async_await"


export const nextPage_ErrorHandling = async () => {
  logger(__filename, `   Error Handling with Promises`)

  const simpleCallback = async () => {
    return fetch(`${POKEMON_BASE_URL}/1`)
      .then((response1) => {
        console.log("RESPONSE 1 ", response1.body)
        return fetch(`${POKEMON_BASE_URL}/2`)
      })
      .then((response2) => {
        console.log("RESPONSE 2 ", response2.body)
        return fetch(`http://nope.nope`)
      })
      .then((response3) => {
        console.log("RESPONSE 3 ", response3.body)
        return fetch(`${POKEMON_BASE_URL}/4`)
      })
      .then((response4) => {
        console.log("RESPONSE 4 ", response4.body)
      })
      .catch((error) => {

        console.log(`${TEXT.BOLD}${TEXT.BOLD}RESPONSE 3 & 4${TEXT.CLOSURE} has not be hit !`)
        console.error("IN THE CATCH! Error: ", error)
      })
  }

  await simpleCallback()

  console.log(`\n${TEXT.BOLD}Benefits of Promises Over Callbacks${TEXT.CLOSURE}\n`)
  console.log("• Easier to write good functions")
  console.log("  ➜ Each step doesn't have be tied directly to next step")
  console.log(`  ➜ With promises, ${TEXT.BOLD}.then${TEXT.CLOSURE} method can just return value for next without having to itself know what comes next`)

  await nextPage_AsyncAwait()
}