import axios from "axios"
import { logger } from "."
import { TEXT } from "../utils/colors"
import { gistURLjson } from "../utils/variables"

logger(__filename, `   Callback Hell & The Pyramid of Doom !`)

async function anyResponse() {

  const response = await axios.get(gistURLjson)
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

  console.log(response.data)
}

anyResponse()

console.log("here is what we call a 'Callback hell'")