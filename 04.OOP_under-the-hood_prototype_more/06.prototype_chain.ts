import { logger } from '.'

logger(__filename, `   Prototypes Chain`)

const grandParent = {
  sing() {
    return '🎶🎵🎤🎧'
  }
}

const parent = {
  color: 'PURPLE',
  greet() {
    return 'Hello There !'
  },
  __proto__: grandParent
}

const son = {
  age: 2,
  __proto__: parent
}


console.log("This way, with'__proto__', i am supposed to access sing() from child this way: son.sing()")
console.log("but i might need to open this file as .js on a browser") 