import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('10.functional_programming/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.intro"
import "./02.first-class-function"
import "./03.pure-functions"
import "./04.return-functions"
import "./05.immutability"
import "./06.recursion"
import "./07.partial-app_bind"
import "./08.partial_function"
import "./09.composition"
import "./10.simple_compose"
