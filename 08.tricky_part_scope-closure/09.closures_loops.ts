import { logger } from '.';
import { TEXT } from '../utils/colors';

logger(__filename, `   Closures: Loops`);

for (var i = 1; i < 6; i++) {
  setTimeout(() => {
    console.log(`${TEXT.ITALIC}i${TEXT.CLOSURE} ➜`, i)

  }, 500 * i)
}

setTimeout(() => { // ignore this
  console.log(`\n➜ ${TEXT.ITALIC}i${TEXT.CLOSURE} stays 6, because of ${TEXT.PURPLE}var${TEXT.CLOSURE}`)
  console.log(`  because the global variable (${TEXT.PURPLE}var${TEXT.CLOSURE}) ${TEXT.ITALIC}i${TEXT.CLOSURE}, loose the value of ${TEXT.ITALIC}i${TEXT.CLOSURE},\n  we muse make a new scope. (or use ${TEXT.PURPLE}let${TEXT.CLOSURE})`)
  console.log(`\nusing ${TEXT.YELLOW}IIFE${TEXT.CLOSURE}\n`)

  for (var i = 1; i < 6; i++) {

    ((x) => {
      setTimeout(() => {
        console.log(`  ${TEXT.ITALIC}x${TEXT.CLOSURE} ➜`, x)

      }, 500 * x)
    })(i)
  }

  setTimeout(() => {// ignore this
    console.log(`\nor simply use ${TEXT.PURPLE}let${TEXT.CLOSURE}\n`)

    for (let i = 1; i < 6; i++) {
      setTimeout(() => {
        console.log(`    ${TEXT.ITALIC}i${TEXT.CLOSURE} ➜`, i)

      }, 500 * i)
    }
  }, 3000) // ignore this
}, 3000) // ignore this
