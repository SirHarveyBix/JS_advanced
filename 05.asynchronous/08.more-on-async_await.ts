import axios from "axios"
import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { nextPage_ErrorHandlingAsync } from "./09.error_handling_async"


export const nextPage_MoreAsyncAwait = async () => {
  logger(__filename, `   More on Async / Await Basics`)

  async function getFourPokemon() {
    const { data: bulbasaur } = await axios.get(`${POKEMON_BASE_URL}/1`)
    const { data: ivysaur } = await axios.get(`${POKEMON_BASE_URL}/2`)
    const { data: venusaur } = await axios.get(`${POKEMON_BASE_URL}/3`)
    const { data: charmander } = await axios.get(`${POKEMON_BASE_URL}/4`)

    console.log("Hello " + bulbasaur.name)
    console.log("Hello " + ivysaur.name)
    console.log("Hello " + venusaur.name)
    console.log("Hello " + charmander.name)
  }

  await getFourPokemon()

  console.log(`\n➜ Think of ${TEXT.BOLD}${TEXT.GREEN}await${TEXT.CLOSURE} as a pause button\n`)
  nextPage_ErrorHandlingAsync()
}