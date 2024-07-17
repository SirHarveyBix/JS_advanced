
/** Routes for companies. */

import jsonschema from "jsonschema"
import { Router } from "express"

import { BadRequestError } from "../expressError"
import { Company } from "../models/company"

import companyNewSchema from "../schemas/companyNew.json"
import companyUpdateSchema from "../schemas/companyUpdate.json"
import companySearchSchema from "../schemas/companySearch.json"
import { db } from "../db"
import multer from "multer"
import path from "path"

export const companiesRoutes = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) // name the file as the current timestamp plus its original extension
  },
})

const upload = multer({ storage: storage })

/** POST / { company } =>  { company }
 *
 * company should be { handle, name, description, numEmployees, logoUrl }
 *
 * Returns { handle, name, description, numEmployees, logoUrl }
 *
 */
companiesRoutes.post("/",
  async function (req, res, next) {
    const validator = jsonschema.validate(req.body, companyNewSchema, {
      required: true,
    })
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack)
      throw new BadRequestError(...errs)
    }

    const company = await Company.create(req.body)
    return res.status(201).json({ company })
  })

/** POST /uploadLogo
 *
 */
companiesRoutes.post("/:handle/upload-logo",
  upload.single("logo"),
  async function (req, res) {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded." })
    }

    const filePath = req.file.path
    // Save this filePath to your database in the logo_url column
    await db.query(
      `UPDATE companies
                  SET logo_url = $1
                  WHERE handle= $2`,
      [filePath, req.params.handle]
    )
    res.json({ message: "File uploaded successfully!", filePath: filePath })
  }
)

/** GET /  =>
 *   { companies: [ { handle, name, description, numEmployees, logoUrl }, ...] }
 *
 * Can filter on provided search filters:
 * - minEmployees
 * - maxEmployees
 * - nameLike (will find case-insensitive, partial matches)
 *
 */

companiesRoutes.get("/", async function (req, res, next) {
  const query: any = req.query

  // arrive as strings from querystring, but we want as ints
  if (query.minEmployees != null) query.minEmployees = +query.minEmployees
  if (query.maxEmployees != null) query.maxEmployees = +query.maxEmployees

  const validator = jsonschema.validate(query, companySearchSchema, {
    required: true,
  })
  if (!validator.valid) {
    const errs = validator.errors.map((e) => e.stack)
    throw new BadRequestError(...errs)
  }

  const companies = await Company.findAll(query)
  return res.json({ companies })
})

/** GET /[handle]  =>  { company }
 *
 *  Company is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 */

companiesRoutes.get("/:handle", async function (req, res, next) {
  const company = await Company.get(req.params.handle)
  return res.json({ company })
})

/** PATCH /[handle] { fld1, fld2, ... } => { company }
 *
 * Patches company data.
 *
 * fields can be: { name, description, numEmployees, logo_url }
 *
 * Returns { handle, name, description, numEmployees, logo_url }
 *
 */

companiesRoutes.patch("/:handle", async function (req, res, next) {
  const validator = jsonschema.validate(req.body, companyUpdateSchema, {
    required: true,
  })
  if (!validator.valid) {
    const errs = validator.errors.map((e) => e.stack)
    throw new BadRequestError(...errs)
  }

  const company = await Company.update(req.params.handle, req.body)
  return res.json({ company })
})

/** DELETE /[handle]  =>  { deleted: handle }
 *
 */

companiesRoutes.delete("/:handle", async function (req, res, next) {
  await Company.remove(req.params.handle)
  return res.json({ deleted: req.params.handle })
})