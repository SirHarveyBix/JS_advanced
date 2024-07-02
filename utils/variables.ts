import { TEXT } from "./colors"

export const gistURLjson = "https://gist.githubusercontent.com/SirHarveyBix/8180f279b48a13fdf26d4ae757087617/raw/f30323e7a76b11e97936cbaff47b1029384006d1/test.json"
export const POKEMON_BASE_URL = "https://pokeapi.co/api/v2/pokemon"

// Function that generates a random user
export function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max: number) => Math.floor(Math.random() * max)

  // Possible user data
  const firstNames = ["John", "Raj", "Dave", "Sarah", "Rosa", "Esteban"]
  const lastNames = ["Hamilton", "Norris", "Bottas", "Tsunoda", "Sainz"]
  const emails = ["example.com", null, "sample.com", undefined, "demo.com"]
  const includeAddress = [true, false] // Array to determine if address should be included

  const includeMethod = [true, false] // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)]
  const lastName = lastNames[getRandomNumber(lastNames.length)]
  const emailDomain = emails[getRandomNumber(emails.length)]
  const age = getRandomNumber(100)
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)]
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)]

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user: any = {
    email:
      emailDomain
        ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
        : undefined,
    age: age, // age will always exist, just for the sake of structure
  }
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName
    }
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: "1234 Elm St",
      city: "Anytown",
      state: "CA",
      country: "USA",
      postalCode: "12345",
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345 // longitude is available
      }
    }
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = () => {
      console.log(`\n${TEXT.GREEN}HELLO THERE! I AM A USER!!!${TEXT.CLOSURE}\n`)
    }
  }

  return user
}