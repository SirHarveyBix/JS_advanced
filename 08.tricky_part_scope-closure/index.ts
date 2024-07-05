import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('08.tricky_part_scope-closure/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.recap_var-scope"
import "./02.scope_chain"
import "./03.hoisting"
import "./04.IIFEs"
import "./05.closures_basics"
import "./06.closures_another-one"
import "./07.closures_factory"
import "./08.closures_event-listeners.ts"