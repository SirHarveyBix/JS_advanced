import { PostgreSqlContainer, StartedPostgreSqlContainer } from "@testcontainers/postgresql"
import { Client } from 'pg'
import fs from 'fs'

let container: StartedPostgreSqlContainer | null = null
let postgresClient: Client | null = null

export const startTestContainer = async (): Promise<void> => {

  try {
    container = await new PostgreSqlContainer().start()
    process.env.DATABASE_URL = container.getConnectionUri()

    postgresClient = new Client({ connectionString: process.env.DATABASE_URL })
    await postgresClient.connect()

    const sqlSchema = fs.readFileSync('./11.fetch_API/API/jobly-schema.sql', 'utf8')
    const sqlSeed = fs.readFileSync('./11.fetch_API/API/jobly-seed.sql', 'utf8')

    await postgresClient.query(sqlSchema)
    await postgresClient.query(sqlSeed)

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

export const getClient = (): Client => {
  if (!postgresClient) {
    throw new Error("Postgres client is not initialized")
  }
  return postgresClient
}

export const getTestContainerUri = (): string => {
  try {

    return container.getConnectionUri()
  } catch (error) {
    if (!container) {
      throw new Error("PostgreSqlContainer is down")
    }

  }
}