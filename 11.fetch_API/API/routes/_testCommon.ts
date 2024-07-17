
import { db } from "../db"
import { Company } from "../models/company"
import { Job } from "../models/job"
import { getClient, startTestContainer, stopPostgresContainer } from "../test_config/postgres.container"

export const testJobIds = []

export async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await startTestContainer()
  const dbClient = getClient()

  await dbClient.query("DELETE FROM companies")

  await Company.create(
    {
      handle: "c1",
      name: "C1",
      numEmployees: 1,
      description: "Desc1",
      logoUrl: "http://c1.img",
    })
  await Company.create(
    {
      handle: "c2",
      name: "C2",
      numEmployees: 2,
      description: "Desc2",
      logoUrl: "http://c2.img",
    })
  await Company.create(
    {
      handle: "c3",
      name: "C3",
      numEmployees: 3,
      description: "Desc3",
      logoUrl: "http://c3.img",
    })

  testJobIds[0] = (await Job.create(
    { title: "J1", salary: 1, equity: "0.1", companyHandle: "c1" })).id
  testJobIds[1] = (await Job.create(
    { title: "J2", salary: 2, equity: "0.2", companyHandle: "c1" })).id
  testJobIds[2] = (await Job.create(
    { title: "J3", salary: 3, /* equity null */ companyHandle: "c1" })).id
}

export async function commonBeforeEach() {


  try {
    const dbClient = getClient()

    await dbClient.query("BEGIN")
  } catch (error) {
    console.error("Error beginning transaction:", error)
    throw error
  }
}

export async function commonAfterEach() {

  try {
    const dbClient = getClient()


    await dbClient.query("ROLLBACK")
  } catch (error) {
    console.error("Error rolling back transaction:", error)
    throw error
  }
}

export async function commonAfterAll() {

  try {
    const dbClient = getClient()

    await dbClient.end()
    await stopPostgresContainer()
  } catch (error) {
    console.error("Error stopping PostgreSQL client and container:", error)
    throw error
  }
}