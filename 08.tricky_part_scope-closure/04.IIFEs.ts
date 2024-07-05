import { logger } from "."
import { TEXT } from "../utils/colors";

logger(__filename, `   Immediately Invoked Function Expression`);

(function () {
  var secret = 10
  console.log('Hello from an IIFE !')
  console.log("secret is ➜", secret)
})()

console.log(`\nIt prevent variable to get out the scope of IIFE, here, ${TEXT.PURPLE}var${TEXT.CLOSURE} secret ${TEXT.PURPLE}=${TEXT.CLOSURE} ${TEXT.DARK_BLUE}10${TEXT.CLOSURE};`)

console.log("outside of IIFE, secret, is not accessible, even from the Global Scope!\n")