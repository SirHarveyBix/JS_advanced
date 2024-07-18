// import bcrypt from "bcrypt"
import { BCRYPT_WORK_FACTOR } from "../config"
import { db } from "../db"
import { startTestContainer, stopPostgresContainer } from "../test_config/postgres.container"

export const testJobIds = []

export async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await startTestContainer()
  await db.query("DELETE FROM companies")

  await db.query(`
      INSERT INTO companies(handle, name, num_employees, description, logo_url)
      VALUES ('c1', 'C1', 1, 'Desc1', 'http://c1.img'),
             ('c2', 'C2', 2, 'Desc2', 'http://c2.img'),
             ('c3', 'C3', 3, 'Desc3', 'http://c3.img')`)

  const resultsJobs = await db.query(`
    INSERT INTO jobs (title, salary, equity, company_handle)
    VALUES ('Job1', 100, '0.1', 'c1'),
           ('Job2', 200, '0.2', 'c1'),
           ('Job3', 300, '0', 'c1'),
           ('Job4', NULL, NULL, 'c1')
    RETURNING id`)
  testJobIds.splice(0, 0, ...resultsJobs.rows.map(result => result.id))
}

export async function commonBeforeEach() {
  await db.query("BEGIN")
}

export async function commonAfterEach() {
  await db.query("ROLLBACK")
}

export async function commonAfterAll() {
  await stopPostgresContainer()
  await db.end()
}


