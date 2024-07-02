import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { nextPage_ErrorHandling } from "./06.error_handling"


export const nextPage_PromiseChaining = async () => {
  logger(__filename, `   Promise Chaining to Flatten code`)


  const callbackHell = async () => {

    return fetch(`${POKEMON_BASE_URL}/1`)
      .then((response1) => {
        console.log(`${TEXT.RED}${TEXT.BOLD}THIS IS CALLBACK HELL !${TEXT.CLOSURE}`)
        console.log(" [callbackHell] RESPONSE 1")
        return fetch(`${POKEMON_BASE_URL}/2`)
          .then((response2) => {
            console.log("  [callbackHell] RESPONSE 2")
            return fetch(`${POKEMON_BASE_URL}/3`)
              .then((response3) => {
                console.log("   [callbackHell] RESPONSE 3")
                return fetch(`${POKEMON_BASE_URL}/4`)
                  .then((response4) => {
                    console.log("    [callbackHell] RESPONSE 4, Enough !")
                  })
                  .catch((error) => console.error("ERR!", error))
              })
              .catch((error) => console.error("ERR!", error))
          })
          .catch((error) => console.error("ERR!", error))
      })
      .catch((error) => console.error("ERR!", error))
  }

  const simpleCallback = async () => {
    return fetch(`${POKEMON_BASE_URL}/1`)
      .then((response1) => {
        console.log("\nRESPONSE 1 ", response1.body)
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
        console.error("IN THE CATCH! Error: ", error)
      })
  }

  await callbackHell()
  await simpleCallback()

  console.log(`\n• When calling ${TEXT.ITALIC}.then${TEXT.CLOSURE} on a promise, can return ${TEXT.ITALIC}new${TEXT.CLOSURE} promise in callback!`)
  console.log(`  ➜ Can chain asynchronous operations together with ${TEXT.ITALIC}.then${TEXT.CLOSURE} calls`)
  console.log(`• Only need ${TEXT.ITALIC}one .catch${TEXT.CLOSURE} at the end - you don't have to catch every promise`)

  nextPage_ErrorHandling()

}