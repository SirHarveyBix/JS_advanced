import { logger } from "."
import { TEXT } from "../utils/colors"

logger(__filename, "   Writing a Partial Function")

function multiply(a: number, b: number) {
  return a * b
}


const double = multiply.bind(null, 2)

console.log(`     ${TEXT.BOLD}${TEXT.YELLOW}With Bind${TEXT.CLOSURE}`)
console.log(`${TEXT.DARK_BLUE}double${TEXT.CLOSURE}${TEXT.PURPLE} = ${TEXT.GREEN}multiply${TEXT.CLOSURE}.${TEXT.GREEN}bind${TEXT.CLOSURE}(${TEXT.DARK_BLUE}null${TEXT.CLOSURE}, ${TEXT.DARK_BLUE}2${TEXT.CLOSURE}) ➜ ${TEXT.GREEN}double${TEXT.CLOSURE}(${TEXT.DARK_BLUE}8${TEXT.CLOSURE}) ➜`, double(8))

function partial<T extends string[] | number[], U>(func: (...args: [...T, ...U[]]) => void, ...fixedArgs: T) {
  return function (...remainingArgs: U[]) {
    return func(...fixedArgs, ...remainingArgs)
  }
}

const doubleWithPartial = partial(multiply, 2)

console.log(`\n     ${TEXT.BOLD}${TEXT.YELLOW}Partial Function${TEXT.CLOSURE}`)
console.log(`${TEXT.GREEN}doubleWithPartial${TEXT.CLOSURE}${TEXT.PURPLE} = ${TEXT.GREEN}partial${TEXT.CLOSURE}(${TEXT.GREEN}multiply${TEXT.CLOSURE}, ${TEXT.DARK_BLUE}2${TEXT.CLOSURE}) ➜ ${TEXT.GREEN}doubleWithPartial${TEXT.CLOSURE}(${TEXT.DARK_BLUE}8${TEXT.CLOSURE}) ➜`, doubleWithPartial(8))

const triple = multiply.bind(null, 3)
const tripleWithPartial = partial(multiply, 3)

console.log(`\n\n     ${TEXT.BOLD}${TEXT.YELLOW}Another example, check out the code below${TEXT.CLOSURE}`)

function fetchData(url: string, apiKey: string, params: string[][]): string {
  const queryString = new URLSearchParams(params).toString()
  const fullUrl = `${url}?${queryString}`

  console.log(`\nSending request to ${fullUrl}`)
  console.log(`With API key of ${apiKey}`)
  return fullUrl
}

const myApiKey = "my-secret-api-key"
const myApiUrl = "https://api.mywebsite.com/data"

const googleApiKey = "google-secret-api-key"
const googleApiUrl = "https://api.google.com/data"

const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey)
const fetchGoogle = partial(fetchData, googleApiUrl, googleApiKey)

fetchMyAPI({ id: 1, sort: "desc" })

fetchGoogle({ search: "chicken" })