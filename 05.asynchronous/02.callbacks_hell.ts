import axios from "axios"
import { logger } from "."
import { gistURLjson } from "../utils/variables"
import { nextPage_Promise } from "./03.promises"

logger(__filename, `   Callback Hell & The Pyramid of Doom !`)

async function anyResponse() {

  const responses = await axios.get(gistURLjson)
    .then((response1) => axios.get(gistURLjson)
      .then((response2) => axios.get(gistURLjson)
        .then((response3) => axios.get(gistURLjson)
          .then((response4) => axios.get(gistURLjson)
            .then((response5) => axios.get(gistURLjson)
            )
          )
        )
      )
    )
  return await Promise.resolve(responses)
}

anyResponse()
  .then(allResponses => {
    console.log('All responses:', allResponses.data)
    console.log("here is what we call a 'Callback hell'")
  })
  .then(() =>
    nextPage_Promise()
  )