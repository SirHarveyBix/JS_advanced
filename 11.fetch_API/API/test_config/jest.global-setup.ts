import { startTestContainer } from './postgres.container'

module.exports = async () => {
  await startTestContainer()
  console.log("[globalSetup]: Test container started successfully.")
}