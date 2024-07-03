import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('06.latest_js_features/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.optional-chaining"
import "./02.nullish"
import "./03.numeric_separators"
import "./04.Array.prototype.at"
import "./05.replaceAll"
import "./06.logical_assignment"
import "./07.Promise.any"
