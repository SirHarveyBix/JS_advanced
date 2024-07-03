import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, `   Generators and yield`)

console.log(`JavaScript can have ${TEXT.ITALIC}generator functions${TEXT.CLOSURE} - functions that return a ${TEXT.ITALIC}Generator${TEXT.CLOSURE} that can be lazily looped over:`)
console.log(`\nfunction* evens(n) {\n  while (true){\n    yield n;\n    n += 2;\n  }\n}`)
console.log(`\n${TEXT.ITALIC}// make a 'Generator'\n// will return even numbers 2+${TEXT.CLOSURE}\nlet allEvens = evens(2);\n\n${TEXT.ITALIC}// lazily get the first 10 even numbers${TEXT.CLOSURE}\nfor (let i=0; i < 10; i++) {\n  console.log(allEvens.next().value);\n}\n`)

function* evens(n: number) {
  while (true) {
    yield n
    n += 2
  }
}

// make a 'Generator'
// will return even numbers 2+
let allEvens = evens(2);

// lazily get the first 10 even numbers
for (let i = 0; i < 10; i++) {
  console.log(allEvens.next().value)
}

console.log(`\nit just need to add ${TEXT.RED}${TEXT.BOLD}*${TEXT.CLOSURE}, and instead of a return use ${TEXT.GREEN}${TEXT.BOLD}yield${TEXT.CLOSURE}`)
console.log(`and then since it is 'paused', you can call it whenever you want, using ${TEXT.GREEN}${TEXT.BOLD}yield${TEXT.CLOSURE}`)
console.log("'allEvens.next()' ➜", allEvens.next())