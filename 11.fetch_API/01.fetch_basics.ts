
import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { errorHandling } from "./02.error_handling"

logger(__filename, "   The Basics of Fetch")

console.log(`A modern way to make network requests, replacing the older ${TEXT.ITALIC}XMLHttpRequest${TEXT.CLOSURE}.`)

async function getPokemon() {
  const response = await fetch(POKEMON_BASE_URL)
  const { results } = await response.json()

  console.log(results)
}

getPokemon()
  .finally(() => errorHandling())