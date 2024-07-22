/** Routes for jobs. */

import jsonschema from "jsonschema"

import { Router } from "express"
import { BadRequestError } from "../expressError"
import { Job } from "../models/job"
import jobNewSchema from "../schemas/jobNew.json"
import jobUpdateSchema from "../schemas/jobUpdate.json"
import jobSearchSchema from "../schemas/jobSearch.json"

export const jobsRoutes = Router({ mergeParams: true })

/** POST / { job } => { job }
 *
 * job should be { title, salary, equity, companyHandle }
 *
 * Returns { id, title, salary, equity, companyHandle }
 *

 */

jobsRoutes.post("/", async function (req, res, next) {
  const validator = jsonschema.validate(req.body, jobNewSchema, {
    required: true,
  })
  if (!validator.valid) {
    const errs = validator.errors.map((e) => e.stack)
    throw new BadRequestError(...errs)
  }

  const job = await Job.create(req.body)
  return res.status(201).json({ job })
})

/** GET / =>
 *   { jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...] }
 *
 * Can provide search filter in query:
 * - minSalary
 * - hasEquity (true returns only jobs with equity > 0, other values ignored)
 * - title (will find case-insensitive, partial matches)

 * Authorization required: none
 */

jobsRoutes.get("/", async function (req, res, next) {
  const query: any = req.query
  // arrive as strings from querystring, but we want as int/bool
  if (query.minSalary != null) query.minSalary = +query.minSalary
  query.hasEquity = query.hasEquity === "true"

  const validator = jsonschema.validate(query, jobSearchSchema, { required: true })
  if (!validator.valid) {
    const errs = validator.errors.map((e) => e.stack)
    throw new BadRequestError(...errs)
  }

  const jobs = await Job.findAll(query)
  return res.json({ jobs })
})

/** GET /[jobId] => { job }
 *
 * Returns { id, title, salary, equity, company }
 *   where company is { handle, name, description, numEmployees, logoUrl }
 *
 * Authorization required: none
 */

jobsRoutes.get("/:id", async function (req, res, next) {
  const job = await Job.get(req.params.id)
  return res.json({ job })
})

/** PATCH /[jobId]  { fld1, fld2, ... } => { job }
 *
 * Data can include: { title, salary, equity }
 *
 * Returns { id, title, salary, equity, companyHandle }
 *
 * Authorization required: admin
 */

jobsRoutes.patch("/:id", async function (req, res, next) {
  const validator = jsonschema.validate(req.body, jobUpdateSchema, {
    required: true,
  })
  if (!validator.valid) {
    const errs = validator.errors.map((e) => e.stack)
    throw new BadRequestError(...errs)
  }

  const job = await Job.update(req.params.id, req.body)
  return res.json({ job })
})

/** DELETE /[handle]  =>  { deleted: id }
 *
 * Authorization required: admin
 */

jobsRoutes.delete("/:id", async function (req, res, next) {
  await Job.remove(req.params.id)
  return res.json({ deleted: +req.params.id })
})
