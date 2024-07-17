import { startTestContainer } from './postgres.container'

const globalSetup = async () => {

  await startTestContainer()
  console.log("[globalSetup]: Test container started successfully.")

}

export default globalSetup