export const logger = (filename: string, string: string) => {
  return console.log(`\n \x1b[1m\x1b[34m➜ ${filename.split('02.OOP_New-features/')[1]}\x1b[0m\n\x1b[32m${string}\x1b[0m\n`)
}

import "./01.getters"