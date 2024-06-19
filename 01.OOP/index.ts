export const logger = (filename: string, string: string) => {
  return console.log(`\n \x1b[1m\x1b[34m➜ ${filename.split('01.OOP/')[1]}\x1b[0m\n\x1b[32m${string}\x1b[0m\n`)
}

import "./02.classes"
import "./01.pojo"
import "./03.constructor"
import "./04.bonus.BankAccount"
import "./05.inheritance"
import "./06.super"