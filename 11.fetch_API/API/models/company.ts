import { db } from "../db"
import { BadRequestError, NotFoundError } from "../expressError"
import { sqlForPartialUpdate } from "../helpers/sql"

/** Related functions for companies. */

export class Company {
  /** Create a company (from data), update db, return new company data.
   *
   * data should be { handle, name, description, numEmployees, logoUrl }
   *
   * Returns { handle, name, description, numEmployees, logoUrl }
   *
   * Throws BadRequestError if company already in database.
   * */

  static async create({ handle, name, description, numEmployees, logoUrl }) {
    const duplicateCheck = await db.query(`
        SELECT handle
        FROM companies
        WHERE handle = $1`, [handle])

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${handle}`)

    const result = await db.query(`
                INSERT INTO companies (handle,
                                       name,
                                       description,
                                       num_employees,
                                       logo_url)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING
                    handle,
                    name,
                    description,
                    num_employees AS "numEmployees",
                    logo_url AS "logoUrl"`, [
      handle,
      name,
      description,
      numEmployees,
      logoUrl,
    ],
    )
    const company = result.rows[0]

    return company
  }

  /** Create WHERE clause for filters, to be used by functions that query
   * with filters.
   *
   * searchFilters (all optional):
   * - minEmployees
   * - maxEmployees
   * - nameLike (will find case-insensitive, partial matches)
   *
   * Returns {
   *  where: "WHERE num_employees >= $1 AND name ILIKE $2",
   *  values: [100, '%Apple%']
   * }
   */

  static _filterWhereBuilder({ minEmployees, maxEmployees, nameLike }) {
    let whereParts = []
    let values = []

    if (minEmployees !== undefined) {
      values.push(minEmployees)
      whereParts.push(`num_employees >= $${values.length}`)
    }

    if (maxEmployees !== undefined) {
      values.push(maxEmployees)
      whereParts.push(`num_employees <= $${values.length}`)
    }

    if (nameLike) {
      values.push(`%${nameLike}%`)
      whereParts.push(`name ILIKE $${values.length}`)
    }

    const where = (whereParts.length > 0) ?
      "WHERE " + whereParts.join(" AND ")
      : ""

    return { where, values }
  }

  /** Find all companies (optional filter on searchFilters).
   *
   * searchFilters (all optional):
   * - minEmployees
   * - maxEmployees
   * - nameLike (will find case-insensitive, partial matches)
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   * */

  static async findAll(searchFilters = {}) {
    const { minEmployees, maxEmployees, nameLike }: any = searchFilters

    if (Number(minEmployees) > Number(maxEmployees)) {
      throw new BadRequestError("Min employees cannot be greater than max")
    }

    const { where, values } = this._filterWhereBuilder({
      minEmployees, maxEmployees, nameLike,
    })

    const companiesRes = await db.query(`
        SELECT handle,
               name,
               description,
               num_employees AS "numEmployees",
               logo_url      AS "logoUrl"
        FROM companies ${where}
        ORDER BY name`, values)
    return companiesRes.rows
  }

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(`
        SELECT handle,
               name,
               description,
               num_employees AS "numEmployees",
               logo_url      AS "logoUrl"
        FROM companies
        WHERE handle = $1`, [handle])

    const company = companyRes.rows[0]

    if (!company) throw new NotFoundError(`No company: ${handle}`)

    const jobsRes = await db.query(`
        SELECT id, title, salary, equity
        FROM jobs
        WHERE company_handle = $1
        ORDER BY id`, [handle],
    )

    company.jobs = jobsRes.rows

    return company
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {
    const { setCols, values }: any = sqlForPartialUpdate(
      data,
      {
        numEmployees: "num_employees",
        logoUrl: "logo_url",
      })
    const handleVarIdx = "$" + (values.length + 1)

    const querySql = `
        UPDATE companies
        SET ${setCols}
        WHERE handle = ${handleVarIdx}
        RETURNING
            handle,
            name,
            description,
            num_employees AS "numEmployees",
            logo_url AS "logoUrl"`
    const result = await db.query(querySql, [...values, handle])
    const company = result.rows[0]

    if (!company) throw new NotFoundError(`No company: ${handle}`)

    return company
  }

  /** Delete given company from database returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(`
        DELETE
        FROM companies
        WHERE handle = $1
        RETURNING handle`, [handle])
    const company = result.rows[0]

    if (!company) throw new NotFoundError(`No company: ${handle}`)
  }
}

