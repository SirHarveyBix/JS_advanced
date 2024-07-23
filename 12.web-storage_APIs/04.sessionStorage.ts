
import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   SessionStorage Basics")

console.log(" [SessionStorage]: to explore a lil' bit, you must drop 04.SessionStorage/index.html file on your browser\n")

console.log("As you may Guess, Sessions storage works only during a session; until the browser / Tab is Open")
console.log(`\nwork like ${TEXT.PURPLE}LocalStorage${TEXT.CLOSURE} :`)
console.log(`Key - value pair with ${TEXT.GREEN}.setItem${TEXT.CLOSURE}(), key with ${TEXT.GREEN}.getItem${TEXT.CLOSURE}()`)
