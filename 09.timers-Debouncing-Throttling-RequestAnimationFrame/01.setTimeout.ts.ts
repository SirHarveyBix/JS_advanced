import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   setTimeout`)

console.log('[setTimeout]: I had to create a js to play with "document"')

let delay = 1000;

const myTimeout = setTimeout(function () {
  console.log('Times up!');
}, delay);

const anyLog = () => console.log("you'll never see it on your terminal")

const timeoutToClear = setTimeout(anyLog, delay + delay)

clearTimeout(timeoutToClear)

console.log(`\n${TEXT.YELLOW}Uses cases, shown on .js${TEXT.CLOSURE}\n`);
