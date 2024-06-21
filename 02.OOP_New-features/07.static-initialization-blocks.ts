
import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   ES2022 - Static Initialization Blocks:")

console.log("Static blocks are runs every time th class is loaded !\n")

class DatabaseConnection {
  static connection

  static {
    console.log(`${TEXT.BOLD}Class is Loaded!${TEXT.CLOSURE}`)
    console.log(`Here, ${TEXT.BOLD}'this'${TEXT.CLOSURE} refers to the class: `, this)

    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProdConnection()
    } else {
      this.connection = this.loadDevConnection()
    }
  }

  static loadProdConnection() { return "PROD LOADED" }
  static loadDevConnection() { return "DEV LOADED" }

  get connection(): string {
    console.log("\n   But, Remember, static fields ALWAYS refers to rhe class ")
    console.log("   'return this.connection', would start an infinity loop\n")
    return DatabaseConnection.connection
  }
}

console.log("static block are meant to execute code at the initialization of the class")
const DB = new DatabaseConnection()

console.log(DB.connection)

