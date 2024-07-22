import { db } from "./db"
import { startTestContainer, stopPostgresContainer } from "./test_config/postgres.container"

describe("config can come from env", function () {
  beforeAll(async () => {
    await startTestContainer()
  })

  afterAll(async () => {
    await stopPostgresContainer()
  })

  test('TestContainers is initialized', async () => {
    try {
      const result = await db.query("SELECT * FROM companies WHERE name = $1;", ['Hall-Davis'])

      expect(result.rows[0].num_employees).toBe(749)
    } catch (error) {
      console.log(error)
    }
  })
})

