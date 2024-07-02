import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import axios from "axios"
import { nextPage_AsyncPatternsPromiseRace } from "./14.async-patterns_Promise.race"

export const nextPage_AsyncPatternsPromiseAllSettled = async () => {
  logger(__filename, `   Async Patterns: Promise.allSettled()`)

  console.log(`${TEXT.BOLD}${TEXT.RED}Many Calls, in Sequences${TEXT.CLOSURE}`)

  console.log(` • ${TEXT.ITALIC}Promise.all${TEXT.CLOSURE} accepts an array of promises and returns a ${TEXT.ITALIC}new${TEXT.CLOSURE} promise`)
  console.log(` • New promise will resolve when every promise in array resolves,\n   and will be rejected if any promise in array is rejected\n`)

  console.log(` • ${TEXT.ITALIC}Promise.allSettled${TEXT.CLOSURE} accepts an array of promises and returns a ${TEXT.ITALIC}new${TEXT.CLOSURE} promise`)
  console.log(" • The promise resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.")

  const lots0fFetchCalls = [
    axios.get(`${POKEMON_BASE_URL}/1`),
    axios.get(`${POKEMON_BASE_URL}/2`),
    axios.get(`${POKEMON_BASE_URL}/3`),
    axios.get(`${POKEMON_BASE_URL}/4`),
    axios.get(`${POKEMON_BASE_URL}/5`),
    axios.get(`${POKEMON_BASE_URL}/6`),
    axios.get(`${POKEMON_BASE_URL}/0`),
  ]

  async function getLots0fPokemon() {
    try {
      const onlyNames = []
      const results = await Promise.allSettled(lots0fFetchCalls)
      console.log("\nPromise.all()is done & resolve\n")
      results.forEach((pokemon) => onlyNames.push(pokemon.status === 'fulfilled' ? pokemon.value.data.name : { [pokemon.reason.code]: "ERROR]: One of the promises has been rejected" }))

      console.log(onlyNames)
    } catch (error) {
      console.error(`\n[ERROR]: ${TEXT.BOLD}${TEXT.RED}One of the promises has been rejected ! ${TEXT.CLOSURE}`, error.message)

    }
  }

  await getLots0fPokemon()

  await nextPage_AsyncPatternsPromiseRace()
}
