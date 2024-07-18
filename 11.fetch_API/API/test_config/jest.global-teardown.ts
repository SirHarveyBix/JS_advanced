import { db } from "../db"
import { stopPostgresContainer } from "./postgres.container"

module.exports = async () => {
  await db.end()
  await stopPostgresContainer()
  console.log("[globalTeardown]: Test container stopped successfully.")
}
