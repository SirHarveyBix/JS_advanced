import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('04.OOP_under-the-hood_prototype_more/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.intro"
