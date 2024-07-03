import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('07.tricky_part/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.float_imprecisions"
import "./02.bigint"
import "./03.isNaN"
import "./04.post_pre-increment"
import "./05.semicolon_insertion"
import "./06.generator_functions"
import "./07.when_use_generator"
import "./08.Array.from"
