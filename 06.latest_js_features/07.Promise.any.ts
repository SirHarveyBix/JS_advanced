import axios from "axios"
import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"

logger(__filename, `   Promise.any()`)

console.log(`${TEXT.ITALIC}Promise.any${TEXT.CLOSURE} takes an iterable of Promise objects and returns a promise that is\nfulfilled by the first given promise to be fulfilled,\nor rejected if all of the given promises are rejected.\n`)

const lotOfRequest = [
  axios.get(`${POKEMON_BASE_URL}/1`),
  axios.get(`${POKEMON_BASE_URL}/0`),
  axios.get(`${POKEMON_BASE_URL}/3`),
  axios.get(`${POKEMON_BASE_URL}/0`),
  axios.get(`${POKEMON_BASE_URL}/5`),
  axios.get(`${POKEMON_BASE_URL}/0`)
]

Promise.any(lotOfRequest)
  .then((firstToFInish) => {
    console.log("IF one of the request do not fail, i get a results !")
    console.log("FIRST RESOLVED VALUE : ", firstToFInish.data.id, firstToFInish.data.name)
  })
  .catch((error) =>
    console.error(`${TEXT.RED}Promise.any ➜ [ERROR]: it means ALL promises were rejected${TEXT.CLOSURE}`, error)
  )

Promise.race(lotOfRequest)
  .then((firstToFInish) => {
    console.log("IF one of the request do not fail, i get a results !")
    console.log("FIRST RESOLVED VALUE : ", firstToFInish.data.id, firstToFInish.data.name)
  })
  .catch((error) =>
    console.error(`${TEXT.RED}Promise.race ➜ [ERROR]: it means ONE of the promises has been rejected${TEXT.CLOSURE}`, error.message)
  )
