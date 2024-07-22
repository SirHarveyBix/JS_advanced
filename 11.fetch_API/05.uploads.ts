
import { logger } from "."
import { TEXT } from "../utils/colors"

export const upload = async () => {
  logger(__filename, "   Uploading Files With Fetch")

  console.log("You'll need to drop HTML fil in your browser\n")

  console.log("Do not forget to execute in your terminal : ")
  console.log(`  ➜ ${TEXT.YELLOW}docker compose up${TEXT.CLOSURE}`)
  console.log("      ensure it is installed")
  console.log(`  ➜ ${TEXT.YELLOW}yarn start:API${TEXT.CLOSURE}`)
}
