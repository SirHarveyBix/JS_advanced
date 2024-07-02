import { logger } from "."
import { TEXT } from "../utils/colors"
import { POKEMON_BASE_URL } from "../utils/variables"
import { nextPage_Then_Catch } from "./04.then_catch"


export const nextPage_Promise = () => {
  logger(__filename, `   The Basics of Promises`)

  console.log(`Promises provide an alternate way to think about asynchronicity.\nA promise is ${TEXT.BOLD}one-time guarantee of future${TEXT.CLOSURE}\n`)

  console.log("• Promises in JavaScript are objects")
  console.log("• They are native to the language as of ES2015")
  console.log("• A promise can be in one of three states:")
  console.log(`   ➜ ${TEXT.ITALIC}Pending${TEXT.CLOSURE} - It doesn't yet have a value`)
  console.log(`   ➜ ${TEXT.ITALIC}Resolved${TEXT.CLOSURE} - It has successfully obtained a value`)
  console.log(`   ➜ ${TEXT.ITALIC}Rejected${TEXT.CLOSURE} - It failed to obtain a value for some reason`)
  console.log()

  const url = `${POKEMON_BASE_URL}/1`
  const response = fetch(url)

  console.log("fetch(url) =>", response)

  console.log("\n• The only way to access the resolved or rejected value is to chain a method on the end of the promise (or await it)")

  nextPage_Then_Catch()
}