import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"


export const nextPage_PromiseChaining = () => {
  logger(__filename, `   Promise Chaining to Flatten code`)

  const url = `${POKEMON_BASE_URL}/1`
  fetch(url)
    .then(function (response) {
      console.log(response.body)
    })
    .catch(function (error) {
      console.error(error)
    })
}