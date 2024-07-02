import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import axios from "axios"
import { nextPage_AsyncPatternsSequential } from "./11.async-patterns_sequential"


export const nextPage_AsyncPatternsParallel = async () => {
  logger(__filename, `   Async Patterns: Parallel Async Operations`)

  console.log(`${TEXT.BOLD}${TEXT.RED}Comparing${TEXT.CLOSURE} ${TEXT.ITALIC}.then${TEXT.BOLD}${TEXT.RED}/${TEXT.CLOSURE}${TEXT.ITALIC}.catch${TEXT.CLOSURE} ${TEXT.BOLD}${TEXT.RED}and${TEXT.CLOSURE} ${TEXT.ITALIC}async${TEXT.CLOSURE}${TEXT.BOLD}${TEXT.RED}/${TEXT.CLOSURE}${TEXT.ITALIC}await${TEXT.CLOSURE}\n`)

  console.log(` • Under the hood, they do the same thing `)
  console.log(` • ${TEXT.ITALIC}async / await${TEXT.CLOSURE} are the modern improvement`)
  console.log("   ➜ Code can be written more naturally")
  console.log(" • There are a few cases where it's easy to deal with promises directly\n")

  console.log("these 3 calls are not chained, ")


  async function waitingRequests() {
    let results = []
    axios.get(`${POKEMON_BASE_URL}/1`).then(({ data }) => {
      results.push(data.name)
      console.log("[NOT AWAITED] : REQUEST 1 : FINISHED")
    })

    axios.get(`${POKEMON_BASE_URL}/2`).then(({ data }) => {
      console.log("[NOT AWAITED] : REQUEST 2 : FINISHED")
      results.push(data.name)
    })

    axios.get(`${POKEMON_BASE_URL}/3`).then(({ data }) => {
      console.log("[NOT AWAITED] : REQUEST 3 : FINISHED")
      results.push(data.name)
    })
    console.log("\n[NOT AWAITED] : WAITING FOR THE REQUEST TO COMPLETE !\n")
  }

  await waitingRequests()

  const results = []
  async function getPokemon(num: number) {
    const response = await axios.get(`${POKEMON_BASE_URL}/${num}`)
    results.push(response)
    console.log(`REQUEST ${num} FINISHED!\n`)
  }

  await Promise.all([
    getPokemon(1),
    getPokemon(2),
    getPokemon(3)
  ])


  await nextPage_AsyncPatternsSequential()
}