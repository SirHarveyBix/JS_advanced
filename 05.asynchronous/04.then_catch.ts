import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { nextPage_PromiseChaining } from "./05.promise_chaining"


export const nextPage_Then_Catch = async () => {
  logger(__filename, `   Using .then() ${TEXT.BOLD}and${TEXT.CLOSURE} ${TEXT.GREEN}.catch()`)

  console.log(`• Promises provide a ${TEXT.ITALIC}.then${TEXT.CLOSURE} and a ${TEXT.ITALIC}.catch${TEXT.CLOSURE}, which both accept callbacks`)
  console.log(`• [${TEXT.ITALIC}.then${TEXT.CLOSURE}] will run if the promise is resolved,\n          and has access to the promise's resolved value.\n`)
  console.log(`• [${TEXT.ITALIC}.catch${TEXT.CLOSURE}] will run if the promise is rejected,\n           and typically has access to some reason behind the rejection.\n`)

  const url = `${POKEMON_BASE_URL}/1`

  const getPokemon = async () => fetch(url)
    .then(function (response) {
      console.log(response.body)
    })
    .catch(function (error) {
      console.error(error)
    })

  await getPokemon()

  nextPage_PromiseChaining()
}