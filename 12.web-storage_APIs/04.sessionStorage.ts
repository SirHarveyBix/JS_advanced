
import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   SessionStorage Basics")

console.log("As you may Guess, Sessions storage works only during a session; might be until user is disconnected")
console.log(`\nwork like ${TEXT.PURPLE}LocalStorage${TEXT.CLOSURE} :`)
console.log(`Key - value pair with ${TEXT.GREEN}.setItem${TEXT.CLOSURE}(), key with ${TEXT.GREEN}.getItem${TEXT.CLOSURE}()`)
