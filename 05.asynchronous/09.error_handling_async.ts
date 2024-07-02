import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import axios from "axios"
import { nextPage_AsyncPatternsParallel } from "./10.async-patterns_parallel"


export const nextPage_ErrorHandlingAsync = async () => {
  logger(__filename, `   Error Handling with Try/Catch Blocks`)

  function tryError() {
    try {
      CSS.Hz(NaN)
    } catch (error) {
      console.error(`Here is the error ➜ ${TEXT.RED}${error}${TEXT.CLOSURE}`)
    }
  }
  tryError()

  async function rejectedPromise() {
    try {
      const response = await axios.get('http://nope.nope')
      console.log("supposed response:", response)
    } catch (error) {
      console.error(`\n[ERROR] ➜ ${TEXT.RED}${error.code}${TEXT.CLOSURE}`)
    }
    console.log("there's no 'response', instead you get an error!")
  }
  await rejectedPromise()

  async function getFirstPokemon() {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/1`)
      console.log("\nHello " + response.data.name)
    } catch (error) {
      console.error(error)
    }
    console.log("there's no error!")
  }
  await getFirstPokemon()

  await nextPage_AsyncPatternsParallel()
}