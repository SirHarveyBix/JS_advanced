// import bcrypt from "bcrypt"

import { db } from "../db"
import { BCRYPT_WORK_FACTOR } from "../config"
import { getClient, startTestContainer, stopPostgresContainer } from "../test_config/postgres.container"

export const testJobIds = []

export async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await startTestContainer()
  const dbClient = getClient()
  await dbClient.query("DELETE FROM companies")

  await dbClient.query(`
      INSERT INTO companies(handle, name, num_employees, description, logo_url)
      VALUES ('c1', 'C1', 1, 'Desc1', 'http://c1.img'),
             ('c2', 'C2', 2, 'Desc2', 'http://c2.img'),
             ('c3', 'C3', 3, 'Desc3', 'http://c3.img')`)

  const resultsJobs = await dbClient.query(`
    INSERT INTO jobs (title, salary, equity, company_handle)
    VALUES ('Job1', 100, '0.1', 'c1'),
           ('Job2', 200, '0.2', 'c1'),
           ('Job3', 300, '0', 'c1'),
           ('Job4', NULL, NULL, 'c1')
    RETURNING id`)
  testJobIds.splice(0, 0, ...resultsJobs.rows.map(result => result.id))
}

export async function commonBeforeEach() {
  const dbClient = getClient()
  await dbClient.query("BEGIN")
}

export async function commonAfterEach() {
  const dbClient = getClient()
  await dbClient.query("ROLLBACK")
}

export async function commonAfterAll() {
  const dbClient = getClient()
  await stopPostgresContainer()
  await dbClient.end()
}


