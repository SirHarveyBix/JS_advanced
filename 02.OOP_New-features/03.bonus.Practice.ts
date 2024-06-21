import { logger } from "."

logger(__filename, "   [BONUS]: Exercise: User")

class User {
  private firstName: string
  private lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }


  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(newName: string) {
    const [first, last] = newName.split(" ")
    this.firstName = first
    this.lastName = last
  }
}

const teddy = new User("Ted", "Lasso")
console.log(teddy, "\n")

teddy.fullName = "Anthony"
console.log(teddy, "\n")

teddy.fullName = "Antoine DeNeuve"
console.log(teddy, "\n")
