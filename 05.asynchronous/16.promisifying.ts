import { error } from "console"
import { logger } from "."
import { TEXT } from "../utils/colors"
import fs from "fs"

export const nextPage_Promisifying = async () => {
  logger(__filename, `   Promisifying Node's fs.readFile()`)

  function asyncReadFile(haiku: string) {

    return new Promise((resolve, rejects) => {
      fs.readFile(`05.asynchronous/16.dependencies/${haiku}.txt`, "utf8", (error, data) => {
        if (error) {
          rejects(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  // asyncReadFile("haiku1")
  //   .then((response) => {
  //     console.log("Haiku 1 :", response)
  //     return asyncReadFile("haiku2")
  //   })
  //   .then((response) => {
  //     console.log("Haiku 2 :", response)
  //     return asyncReadFile("haiku3")
  //   })
  //   .then((response) => console.log("Haiku 2 :", response))
  //   .catch((error) => console.error(error))

  const getHaikus = async () => {
    try {
      const haiku1 = await asyncReadFile("haiku1")
      console.log("Haiku 1 :", haiku1)

      const haiku2 = await asyncReadFile("haiku2")
      console.log("Haiku 2 :", haiku2)

      const haiku3 = await asyncReadFile("haiku3")
      console.log("Haiku 3 :", haiku3)
    } catch (error) {
      console.error(error)
    }
  }

  await getHaikus()
} 