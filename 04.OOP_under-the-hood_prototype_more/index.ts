import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('04.OOP_under-the-hood_prototype_more/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.intro"
import "./02.new"
import "./03.prototype_1"
import "./04.prototype_2"
import "./05.prototype_3"
import "./06.prototype_chain"
import "./07.classes_inheritance_prototype"
import "./08.__proto__vs_prototype"
import "./09.useful_prototypes_methods"
