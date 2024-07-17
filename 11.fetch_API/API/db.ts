/** Database setup for jobly. */

import { Client } from "pg"

export const db = new Client({
  connectionString: process.env.DATABASE_URL,
})

async function connectDb() {
  // Jest replaces console.* with custom methods get the real ones for this
  const { log, error } = require("console")
  try {
    await db.connect()
    log(`Connected to ${process.env.DATABASE_URL}`)
  } catch (err) /* istanbul ignore next (ignore for coverage) */ {
    error(`Couldn't connect to ${process.env.DATABASE_URL}`, err.message)
    // process.exit(1)
    throw error
  }
}
connectDb()
