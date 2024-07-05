import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Recaping Var & Scope`)

console.log(`${TEXT.YELLOW}${TEXT.BOLD}Scope & closure${TEXT.CLOSURE}`)

console.log(`${TEXT.GREEN}var${TEXT.CLOSURE} sets any variables, on the 'Global' Scope, it means the 'widows'`)

if (true) {
  var color = "red"
}

console.log("\nvariable 'color', is on a if block, but we can access it ➜", color)

function blah() {
  var animal = 'Flamboyant Cuttlefish'
  console.log('\nbut not accessible outside if declare inside a function block')
}
blah()