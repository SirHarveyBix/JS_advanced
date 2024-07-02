import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import axios from "axios"
import { nextPage_AsyncPatternsPromiseAllSettled } from "./13.async-patterns_Promise.allSettled"

export const nextPage_AsyncPatternsPromiseAll = async () => {
  logger(__filename, `   Async Patterns: Promise.all()`)

  console.log(`${TEXT.BOLD}${TEXT.RED}Many Calls, in Sequences${TEXT.CLOSURE}`)

  console.log(` • ${TEXT.ITALIC}Promise.all${TEXT.CLOSURE} accepts an array of promises and returns a ${TEXT.ITALIC}new${TEXT.CLOSURE} promise`)
  console.log(` • New promise will resolve when every promise in array resolves,\n   and will be rejected if any promise in array is rejected`)

  const lots0fFetchCalls = [
    axios.get(`${POKEMON_BASE_URL}/1`),
    axios.get(`${POKEMON_BASE_URL}/2`),
    axios.get(`${POKEMON_BASE_URL}/3`),
    axios.get(`${POKEMON_BASE_URL}/4`),
    axios.get(`${POKEMON_BASE_URL}/5`),
    axios.get(`${POKEMON_BASE_URL}/6`),
    // axios.get(`${POKEMON_BASE_URL}/0`),
  ]

  Promise.all(lots0fFetchCalls)
    .then((response) => {
      const onlyNames = []
      console.log("\nPromise.all()is done & resolve\n")
      response.forEach((pokemon) => onlyNames.push(pokemon.data.name))

      console.log(onlyNames)
    })
    .catch((error) => {
      console.error(`\n[ERROR]: ${TEXT.BOLD}${TEXT.RED}One of the promises has been rejected ! ${TEXT.CLOSURE}`, error.message)
    })

  async function getLots0fPokemon() {
    try {
      const onlyNames = []
      const results = await Promise.all(lots0fFetchCalls)
      console.log("\nPromise.all()is done & resolve\n")
      results.forEach((pokemon) => onlyNames.push(pokemon.data.name))

      console.log(onlyNames)
    } catch (error) {
      console.error(`\n[ERROR]: ${TEXT.BOLD}${TEXT.RED}One of the promises has been rejected ! ${TEXT.CLOSURE}`, error.message)

    }
  }

  await getLots0fPokemon()

  await nextPage_AsyncPatternsPromiseAllSettled()
}
