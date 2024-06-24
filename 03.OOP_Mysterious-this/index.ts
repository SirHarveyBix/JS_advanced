import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('03.OOP_Mysterious-this/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.intro"
import "./02.Mystery-of-this"
import "./03.global-objects_and-this"
import "./04.left-dot-rule"
import "./05.this-and-classes"
import "./06.call()"
import "./07.apply()"
import "./08.bind()"
