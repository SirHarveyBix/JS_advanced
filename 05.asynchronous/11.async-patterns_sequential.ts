import { logger } from "."
import { POKEMON_BASE_URL } from "../utils/variables"
import axios from "axios"
import { nextPage_AsyncPatternsPromiseAll } from "./12.async-patterns_Promise.all"

export const nextPage_AsyncPatternsSequential = async () => {
  logger(__filename, `   Async Patterns: Sequential Async Operations`)

  async function waitingRequests() {
    let results = []
    axios.get(`${POKEMON_BASE_URL}/1`)
      .then(({ data }) => {
        results.push(data.name)
        console.log("[NOT AWAITED] : REQUEST 1 : FINISHED")
        return axios.get(`${POKEMON_BASE_URL}/2`)
      })
      .then(({ data }) => {
        console.log("[NOT AWAITED] : REQUEST 2 : FINISHED")
        results.push(data.name)
        return axios.get(`${POKEMON_BASE_URL}/3`)
      })
      .then(({ data }) => {
        console.log("[NOT AWAITED] : REQUEST 3 : FINISHED")
        results.push(data.name)
      })
    console.log("\n[NOT AWAITED] : WAITING FOR THE REQUEST TO COMPLETE !\n")
  }

  console.log()

  async function get3Pokemon() {
    const { data: response1 } = await axios.get(`${POKEMON_BASE_URL}/1`)
    console.log("[AWAITED] : REQUEST 1 : FINISHED")
    const { data: response2 } = await axios.get(`${POKEMON_BASE_URL}/2`)
    console.log("[AWAITED] : REQUEST 2 : FINISHED")
    const { data: response3 } = await axios.get(`${POKEMON_BASE_URL}/3`)
    console.log("[AWAITED] : REQUEST 3 : FINISHED")

    const results = [response1, response2, response3]
  }

  waitingRequests()
    .then(async () => await get3Pokemon())
    .finally(async () => await nextPage_AsyncPatternsPromiseAll())
}