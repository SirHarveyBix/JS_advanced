import { logger } from './index';
import { TEXT } from '../utils/colors';

logger(__filename, '   The bind() method');

console.log("   .bind() is permanent it generate a new function.\n")

const guillaume = {
  name: "Guillaume",
  city: "Nantes",
  greet: function (greeting: string, punctuation: string) {
    console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is${TEXT.CLOSURE}`, this);
    return `${this?.name} says ${greeting}${punctuation}`;
  },
  sing: function () {
    console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is${TEXT.CLOSURE}`, this);
    return `${this?.name} Sing `;
  }
}

const marion = {
  name: "Marion",
  city: "Plévenon"
}

const marionSaysHi = guillaume.greet.call(marion, 'hi', '!!!')
console.log(" [call]: 'guillaume.greet.call(marion, 'hi')' =>", marionSaysHi)
console.log(" [call]: Became an expression\n")

const marionSaysYoBruh = guillaume.greet.apply(marion, ['Yo Bruh', '!! as []'])
console.log(' [apply]: needs an array to work on function parameter:');
console.log(" [apply]: 'guillaume.greet.apply(marion, ['hi'])' =>", marionSaysYoBruh)
console.log(" [apply]: Became an expression\n")


const marionSaysYo = guillaume.greet.bind(marion, 'Yo Bruh', "!! 'its is bound'")
console.log(" [bind]: 'guillaume.greet.bind(marion, 'Yo Bruh', '!! its is bound')' =>", marionSaysYo())
console.log(" [bind]: Became a new function\n")

const sing = guillaume.sing
sing()
console.log("Here : 'sing()', will never refers to the initial 'guillaume' object context, you must bind it!")

const singBound = guillaume.sing.bind(guillaume)
singBound()
console.log("Here : 'singBound()', will always refers to the initial 'guillaume' object context, because it is bound !\n [bind] : 'const singBound = guillaume.sing.bind(guillaume)'")
