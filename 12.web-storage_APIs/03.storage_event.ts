
import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Syncing Tabs with the Storage Event")

console.log(" [LocalStorage]: to explore a lil' bit, you must drop 02.darkmode_toggle/index.html file on your browser\n")

console.log(`we can 'observe' Storage Events with: \n  ${TEXT.GREEN}addEventListener${TEXT.CLOSURE}(${TEXT.YELLOW}'storage'${TEXT.CLOSURE}, ${TEXT.PURPLE}(${TEXT.BLUE}${TEXT.ITALIC}event${TEXT.CLOSURE}${TEXT.PURPLE}) => {
    if (${TEXT.BLUE}${TEXT.ITALIC}event${TEXT.CLOSURE}.${TEXT.PURPLE}key${TEXT.PURPLE} === ${TEXT.YELLOW}'theme'${TEXT.PURPLE}) {
      ${TEXT.GREEN}applyLocalStorageTheme() ${TEXT.PURPLE}
    }
  }${TEXT.CLOSURE})`)

