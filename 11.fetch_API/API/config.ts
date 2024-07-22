import 'dotenv/config'
import "colors"

export const SECRET_KEY = process.env.SECRET_KEY || "secret-dev"

export const PORT = +process.env.PORT || 3001

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
export const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12

if (process.env.NODE_ENV !== "test") {
  console.log(`
${"Jobly Config:".green}
${"NODE_ENV:".yellow}           ${process.env.NODE_ENV}
${"SECRET_KEY:".yellow}         ${SECRET_KEY}
${"PORT:".yellow}               ${PORT}
${"BCRYPT_WORK_FACTOR:".yellow} ${BCRYPT_WORK_FACTOR}
${"Database:".yellow}           ${process.env.DATABASE_URL}
---`)
}
