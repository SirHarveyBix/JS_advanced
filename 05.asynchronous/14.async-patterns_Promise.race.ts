import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import axios from "axios"
import { nextPage_BuildingPromise } from "./15.building_promise"

export const nextPage_AsyncPatternsPromiseRace = async () => {
  logger(__filename, `   Async Patterns: Promise.race()`)

  console.log(`${TEXT.BOLD}${TEXT.RED}Building own promises${TEXT.CLOSURE}`)

  console.log(` • You can use ${TEXT.ITALIC}Promise${TEXT.CLOSURE} with the ${TEXT.ITALIC}new${TEXT.CLOSURE} keyword to make our own promises`)
  console.log(` • Unfortunately, the syntax here takes some time to getting used to`)
  console.log(` • ${TEXT.ITALIC}promise${TEXT.CLOSURE} accepts a single function (call it ${TEXT.ITALIC}fn${TEXT.CLOSURE}) as an argument`)
  console.log(`   ➜ ${TEXT.ITALIC}fn${TEXT.CLOSURE} accepts  two functions as arguments, ${TEXT.ITALIC}resolve${TEXT.CLOSURE} and ${TEXT.ITALIC}reject${TEXT.CLOSURE}`)
  console.log(`   ➜ pass ${TEXT.ITALIC}resolve${TEXT.CLOSURE} a value for the promise to resolve to that value`)
  console.log(`   ➜ pass ${TEXT.ITALIC}reject${TEXT.CLOSURE} a value for the promise to reject to that value\n`)

  const lots0fFetchCalls = [
    axios.get(`${POKEMON_BASE_URL}/1`),
    axios.get(`${POKEMON_BASE_URL}/2`),
    axios.get(`${POKEMON_BASE_URL}/3`),
    axios.get(`${POKEMON_BASE_URL}/4`),
    axios.get(`${POKEMON_BASE_URL}/5`),
    axios.get(`${POKEMON_BASE_URL}/6`),
    // axios.get(`${POKEMON_BASE_URL}/0`)
  ]

  Promise.race(lots0fFetchCalls)
    .then(winner => console.log("[Winner]: the first request to be rejected, or fulfilled :", winner.data.id, winner.data.name))
    .catch(error => console.error(error.message))
    .finally(async () => await nextPage_BuildingPromise())
}
