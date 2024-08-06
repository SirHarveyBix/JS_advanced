import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('13.browser_API/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.geolocation_API"
import "./02.getUserMedia_API"
import "./03.intersectionObservers"
import "./04.lazy_intersectionObservers"
