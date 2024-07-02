import axios from "axios"
import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { nextPage_MoreAsyncAwait } from "./08.more-on-async_await"


export const nextPage_AsyncAwait = async () => {
  logger(__filename, `   Async / Await Basics`)

  console.log(`${TEXT.ITALIC}${TEXT.BOLD}async${TEXT.CLOSURE}`)
  console.log(`  • You can declare any function in JavaScript as ${TEXT.ITALIC}async${TEXT.CLOSURE}`)
  console.log(`  • ${TEXT.ITALIC}async${TEXT.CLOSURE} functions ${TEXT.ITALIC}always${TEXT.CLOSURE} return promises!`)
  console.log(`  • In ${TEXT.ITALIC}async${TEXT.CLOSURE} function, you write code that looks synchronous`)
  console.log("    ➜ But it doesn't block JavaScript\n")

  console.log(`${TEXT.ITALIC}${TEXT.BOLD}await${TEXT.CLOSURE}`)

  console.log(`  • Inside an ${TEXT.ITALIC}async${TEXT.CLOSURE} function, we can use ${TEXT.ITALIC}await${TEXT.CLOSURE}`)
  console.log(`  • ${TEXT.ITALIC}await${TEXT.CLOSURE} pauses execution`)
  console.log(`  • Can ${TEXT.ITALIC}await${TEXT.CLOSURE} any promise (eg. other ${TEXT.ITALIC}async${TEXT.CLOSURE} functions!)`)
  console.log(`  • ${TEXT.ITALIC}await${TEXT.CLOSURE} waits for promise to resolve & evaluates to its resolved value`)
  console.log(`  • It then resumes execution`)
  console.log(`  • Think of the ${TEXT.ITALIC}await${TEXT.CLOSURE} keyword like a pause button\n`)

  async function getFirstPokemon() {
    const response = await axios.get(`${POKEMON_BASE_URL}/1`)
    console.log("Hello " + response.data.name)
  }

  await getFirstPokemon()

  nextPage_MoreAsyncAwait()
}