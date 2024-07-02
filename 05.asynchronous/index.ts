import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('05.asynchronous/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.callbacks"
import "./02.callbacks_hell"
// import "./03.promises"
// import "./04.then_catch"
// import "./05.promise_chaining"
// import "./06.error_handling"
// import "./08.more-on-async_await"
// import "./09.error_handling_async"
// import "./10.async-patterns_parallel"
// import "./11.async-patterns_sequential"
// import "./12.async-patterns_Promise.all"
// import "./13.async-patterns_Promise.allSettled"
// import "./14.async-patterns_Promise.race"