import { logger } from "."

logger(__filename, "   [BONUS]: Exercise: BankAccount")

class BankAccount {
  public balance: number
  public accountHolder: string
  public AccountNumber: string

  constructor(accountHolder: string, AccountNumber: string, balance: number = 0) {
    this.AccountNumber = AccountNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount
      console.log(" -> New amount is : €", this.balance)
      return
    }
    console.error(`You d'like to deposit €${amount}, Did you meant withdraw ?`)
  }

  withdraw(amount: number) {
    if (amount < 0) {
      this.balance -= amount
      console.log(" -> New amount is : €", this.balance)
      return
    }
    if (amount > this.balance) {
      console.log("You can't withdraw that much")
      return
    }
    console.error(`You d'like to withdraw € ${amount}, Did you meant deposit ?`)
  }
}

const myBank = new BankAccount("Kevin", "1708988", 85000)

myBank.accountHolder
myBank.deposit(800)
myBank.withdraw(-250)

myBank.withdraw(800)
