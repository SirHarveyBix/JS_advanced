
import { logger } from "."
import { TEXT } from "../utils/colors"
export const headers = async () => {

  logger(__filename, "   Sending Request Headers With Fetch")

  async function showMeHeaders() {


    const headers = new Headers({ 'content-type': "application/json" })

    try {
      const response = await fetch(
        "http://localhost:3001/showmeheaders",
        { headers }
      )

      const data = await response.json()
      console.log("DATA", data)
    } catch (error) {
      console.log(`➜ ${TEXT.BOLD}${TEXT.RED}${error.message}${TEXT.CLOSURE}`)
      console.error("   ➜ That probably mean you did not launch the API\n")
      console.log("executes in your terminal : ")
      console.log(`  ➜ ${TEXT.YELLOW}docker compose up${TEXT.CLOSURE}`)
      console.log("      ensure it is installed")
      console.log(`  ➜ ${TEXT.YELLOW}yarn start:API${TEXT.CLOSURE}`)
    }
  }

  showMeHeaders()
}
