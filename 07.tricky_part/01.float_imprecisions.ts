import { logger } from "."
import { TEXT } from "../utils/colors"
import { getUser } from "../utils/variables"

logger(__filename, `   Floating point imprecision`)

console.log(`JavaScript represents numbers as ${TEXT.ITALIC}floating point${TEXT.CLOSURE}, like ${TEXT.GREEN}1.234${TEXT.CLOSURE}.\nSometimes, this leads to mildly imprecise results:\n `)

console.log("0.1 + 0.2 =", 0.1 + 0.2)