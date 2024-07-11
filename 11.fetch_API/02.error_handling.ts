
import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"


const URL = `${POKEMON_BASE_URL}/blah`
export const errorHandling = () => {

  logger(__filename, "   Error Handling with fetch")


  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! status : ${response.status}`)
      }

      return response.json()
    })
    .then(({ results }) => results)
    .catch((error) => {
      console.error("SOMETHING WENT WRONG WITH THE FETCH CALL !")
      console.error(error.message)
      console.log()
    })
}
