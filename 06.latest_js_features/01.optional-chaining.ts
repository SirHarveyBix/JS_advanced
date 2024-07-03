import { logger } from "."
import { getUser } from "../utils/variables"

logger(__filename, `   ECMAScript Features and Proposals`)

console.log("Optional chaining allows reading the value of a property located deep within a chain of connected objects\nwithout having to check each reference in the chain.")
console.log("\nlike this : 'user?.address?.city'")
console.log("instead of: 'user && user.address && user.address.city'\n")

const user = getUser()
console.log(user)

// const firstName = user && user.name && user.name.first
const firstName = user?.name?.first

// const long = user && user.address && user.address.coordinates && user.address.coordinates.long
const long = user?.address?.coordinates?.long
console.log("First name: ", firstName)
console.log("Longitude: ", long)

user.greet?.()