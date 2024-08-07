
import { logger } from "."
import { upload } from "./05.uploads"

export const postRequest = async () => {
  logger(__filename, "   POST Request With Fetch")


  async function postData() {
    const newCompany = {
      handle: "chickenco3",
      name: "Chickens and Company 3",
      description: "A lovely company run by chickens",
      numEmployees: 999,
      logoUrl: "http://www.google.com",
    }

    const response = await fetch("http://localhost:3001/companies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCompany),
    })

    const data = await response.json()
    console.log(data)
  }

  // postData()

  postData()

  async function getCompany() {
    const response = await fetch("http://localhost:3001/companies/chickenco3")
    const data = await response.json()
    console.log(data)
  }

  getCompany()
    .finally(() => upload())

}
