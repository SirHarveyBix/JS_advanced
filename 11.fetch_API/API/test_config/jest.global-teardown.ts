import { stopPostgresContainer } from "./postgres.container"

export const globalTeardown = async () => {

  await stopPostgresContainer()
  console.log("[globalTeardown]: Test container stop successfully.")
}

export default globalTeardown