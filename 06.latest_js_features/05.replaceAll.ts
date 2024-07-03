import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   String.replaceAll()`)

const string = "I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play. What a great cat. cat. cat.\n"
console.log(string)

console.log(`${TEXT.BOLD}${TEXT.GREEN}string.replaceAll('cat', 'dog')${TEXT.CLOSURE} ➜\n`, string.replaceAll('cat', 'dog'))