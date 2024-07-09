import { logger } from "."
import { TEXT } from "../utils/colors"


setTimeout(() => {
  logger(__filename, `   Debouncing `)


  console.log("[Debouncing] : see js / html files\n")

  console.log(`our code works with setTimeout because ${TEXT.GREEN}.addEventListener${TEXT.CLOSURE} (re)call the function every time it receive an event\n`)

}, 4002)