import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('01.OOP/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./02.classes"
import "./01.pojo"
import "./03.constructor"
import "./04.bonus.BankAccount"
import "./05.inheritance"
import "./06.super"
import "./07.static_properties"
import "./08.static_methods"
import "./09.static_methods.use_case"
