import { Client } from "pg"

if (process.env.NODE_ENV !== 'test') {
  process.env.DATABASE_URL = 'postgresql://postgres:postgres@localhost:5433/jobly'
}

const db = new Client({
  connectionString: process.env.DATABASE_URL,
})

async function connectDb() {
  // Jest replaces console.* with custom methods get the real ones for this
  const { log, error } = require("console")
  try {
    await db.connect()

    log(`Connected to ${process.env.DATABASE_URL}`)
  } catch (err) {

    error(`Couldn't connect to ${process.env.DATABASE_URL}`, err.message)
    throw err
  }
}

connectDb()

export { db }