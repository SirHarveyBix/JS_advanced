/** Express app for jobly. */

import express from "express"
import cors from "cors"
import path from "path"

import { NotFoundError } from "./expressError"

import { companiesRoutes } from "./routes/companies"
import { jobsRoutes } from "./routes/jobs"

import morgan from "morgan"

export const app = express()

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.use("/companies", companiesRoutes)
app.use("/jobs", jobsRoutes)

app.get("/showmeheaders", function (req, res) {
  res.json({
    msg: "Here are the headers we got on the backend",
    headers: req.headers,
  })
})

app.get("/secret", function (req, res) {
  const token = req.headers.authorization
  if (!token) {
    res.json({ message: "YOU NEED TO SEND A TOKEN IN YOUR HEADERS!!!!" })
  }
  res.json({ message: "If I see mayonaise on my plate I will vomit" })
})
/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError()
})

/** Generic error handler anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack)
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})
