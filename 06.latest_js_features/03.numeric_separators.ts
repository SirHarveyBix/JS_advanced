import { logger } from "."

logger(__filename, `   Numeric Separators`)

console.log(`Numeric separators enhance readability by allowing underscores (_) to be inserted between digits in numeric literals.`)

console.log("1_000_987_000 ➜", 1_000_987_000)