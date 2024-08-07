import { TEXT } from "../utils/colors"

export const logger = (filename: string, string: string) => {
  return console.log(`\n ${TEXT.BOLD}${TEXT.PURPLE}➜ ${filename.split('12.web-storage_APIs/')[1]}${TEXT.CLOSURE}\n${TEXT.GREEN}${string}${TEXT.CLOSURE}\n`)
}

import "./01.local-storage"
import "./02.darkmode_toggle"
import "./03.storage_event"
import "./04.sessionStorage"
import "./05.IndexedDB"
