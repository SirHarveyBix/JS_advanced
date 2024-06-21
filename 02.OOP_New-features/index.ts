import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('02.OOP_New-features/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.getters"
import "./02.setters"
import "./03.bonus.Practice"
import "./04.class_fields-public_fields"
import "./05.class_fields-private_fields"
import "./06.private_method"
import "./07.static-initialization-blocks"