import { PostgreSqlContainer, StartedPostgreSqlContainer } from "@testcontainers/postgresql"
import { Client } from 'pg'
import fs from 'fs'

let container: StartedPostgreSqlContainer | null = null
let postgresClient: Client | null = null

export const startTestContainer = async (): Promise<void> => {

  try {
    container = await new PostgreSqlContainer().start()

    const sqlSchema = fs.readFileSync('./11.fetch_API/API/jobly-schema.sql', 'utf8')
    const sqlSeed = fs.readFileSync('./11.fetch_API/API/jobly-seed.sql', 'utf8')

    process.env.DATABASE_URL = container?.getConnectionUri()

    postgresClient = new Client({ connectionString: process.env.DATABASE_URL })

    await postgresClient.connect()
    await postgresClient.query(sqlSchema)
    await postgresClient.query(sqlSeed)

    console.log("postgres client & container has been initialized ")
  } catch (error) {
    console.error("Error starting test container:", error.message)
    throw error
  }
}

export const stopPostgresContainer = async (): Promise<void> => {
  try {
    if (postgresClient) {
      await postgresClient.end()
    }
    if (container) {
      await container.stop()
    }
  } catch (error) {
    console.error("Error stopping test container:", error.message)
    throw error
  }
}
