import { BadRequestError, NotFoundError } from "../expressError"
import { Company } from "./company"
import { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll, testJobIds } from "./_testCommon"
import { db } from "../db"

beforeAll(commonBeforeAll)
beforeEach(commonBeforeEach)
afterEach(commonAfterEach)
afterAll(commonAfterAll)

/************************************** create */

describe("create", function () {
  const newCompany = {
    handle: "new",
    name: "New",
    description: "New Description",
    numEmployees: 1,
    logoUrl: "http://new.img",
  }

  test("works", async function () {
    let company = await Company.create(newCompany)
    expect(company).toEqual(newCompany)

    const result = await db.query(
      `SELECT handle, name, description, num_employees, logo_url
           FROM companies
           WHERE handle = 'new'`)
    expect(result.rows).toEqual([
      {
        handle: "new",
        name: "New",
        description: "New Description",
        num_employees: 1,
        logo_url: "http://new.img",
      },
    ])
  })

  test("bad request with dupe", async function () {
    try {
      await Company.create(newCompany)
      await Company.create(newCompany)
      throw new Error("fail test, you shouldn't get here")
    } catch (err) {
      expect(err instanceof BadRequestError).toBeTruthy()
    }
  })
})

/************************************** _filterWhereBuilder */

describe("_filterWhereBuilder", function () {
  test("works with no filter criteria", function () {
    const criteria = {
      minEmployees: null,
      maxEmployees: null,
      nameLike: null
    }

    expect(Company._filterWhereBuilder(criteria)).toEqual({
      where: "",
      values: [],
    })
  })

  test("works with min and not max", function () {
    const criteria = {
      minEmployees: 10,
      maxEmployees: null,
      nameLike: null
    }

    expect(Company._filterWhereBuilder(criteria)).toEqual({
      where: "WHERE num_employees >= $1",
      values: [10],
    })
  })

  test("works with max and not min", function () {
    const criteria = {
      minEmployees: 10,
      maxEmployees: 10,
      nameLike: null
    }

    expect(Company._filterWhereBuilder(criteria)).toEqual({
      where: "WHERE num_employees <= $1",
      values: [10],
    })
  })

  test("works when all criteria options supplied", function () {
    const criteria = {
      minEmployees: 1,
      maxEmployees: 10,
      nameLike: "Apple",
    }

    expect(Company._filterWhereBuilder(criteria)).toEqual({
      where:
        "WHERE num_employees >= $1 AND num_employees <= $2 AND name ILIKE $3",
      values: [1, 10, "%Apple%"],
    })
  })
})

/************************************** findAll */

// NOTE: Some of the find all tests are already handled now that we're testing
// the filter criteria at a lower level with _filterWhereBuilder.
//
// We've decided these tests are still useful and all should continue to pass.

describe("findAll", function () {
  test("works: all", async function () {
    let companies = await Company.findAll()
    expect(companies).toEqual([
      {
        handle: "c1",
        name: "C1",
        description: "Desc1",
        numEmployees: 1,
        logoUrl: "http://c1.img",
      },
      {
        handle: "c2",
        name: "C2",
        description: "Desc2",
        numEmployees: 2,
        logoUrl: "http://c2.img",
      },
      {
        handle: "c3",
        name: "C3",
        description: "Desc3",
        numEmployees: 3,
        logoUrl: "http://c3.img",
      },
    ])
  })

  test("works: by min employees", async function () {
    let companies = await Company.findAll({ minEmployees: 2 })
    expect(companies).toEqual([
      {
        handle: "c2",
        name: "C2",
        description: "Desc2",
        numEmployees: 2,
        logoUrl: "http://c2.img",
      },
      {
        handle: "c3",
        name: "C3",
        description: "Desc3",
        numEmployees: 3,
        logoUrl: "http://c3.img",
      },
    ])
  })

  test("works: by max employees", async function () {
    let companies = await Company.findAll({ maxEmployees: 2 })
    expect(companies).toEqual([
      {
        handle: "c1",
        name: "C1",
        description: "Desc1",
        numEmployees: 1,
        logoUrl: "http://c1.img",
      },
      {
        handle: "c2",
        name: "C2",
        description: "Desc2",
        numEmployees: 2,
        logoUrl: "http://c2.img",
      },
    ])
  })

  test("works: by min-max employees", async function () {
    let companies = await Company.findAll(
      { minEmployees: 1, maxEmployees: 1 })
    expect(companies).toEqual([
      {
        handle: "c1",
        name: "C1",
        description: "Desc1",
        numEmployees: 1,
        logoUrl: "http://c1.img",
      },
    ])
  })

  test("works: by name", async function () {
    let companies = await Company.findAll({ nameLike: "1" })
    expect(companies).toEqual([
      {
        handle: "c1",
        name: "C1",
        description: "Desc1",
        numEmployees: 1,
        logoUrl: "http://c1.img",
      },
    ])
  })

  test("works: empty list on nothing found", async function () {
    let companies = await Company.findAll({ nameLike: "nope" })
    expect(companies).toEqual([])
  })

  test("bad request if invalid min > max", async function () {
    try {
      await Company.findAll({ minEmployees: 10, maxEmployees: 1 })
      throw new Error("fail test, you shouldn't get here")
    } catch (err) {
      expect(err instanceof BadRequestError).toBeTruthy()
    }
  })
})

/************************************** get */

describe("get", function () {
  test("works", async function () {
    let company = await Company.get("c1")
    expect(company).toEqual({
      handle: "c1",
      name: "C1",
      description: "Desc1",
      numEmployees: 1,
      logoUrl: "http://c1.img",
      jobs: [
        { id: testJobIds[0], title: "Job1", salary: 100, equity: "0.1" },
        { id: testJobIds[1], title: "Job2", salary: 200, equity: "0.2" },
        { id: testJobIds[2], title: "Job3", salary: 300, equity: "0" },
        { id: testJobIds[3], title: "Job4", salary: null, equity: null },
      ],
    })
  })

  test("not found if no such company", async function () {
    try {
      await Company.get("nope")
      throw new Error("fail test, you shouldn't get here")
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy()
    }
  })
})

/************************************** update */

describe("update", function () {
  const updateData = {
    name: "New",
    description: "New Description",
    numEmployees: 10,
    logoUrl: "http://new.img",
  }

  test("works", async function () {
    let company = await Company.update("c1", updateData)
    expect(company).toEqual({
      handle: "c1",
      ...updateData,
    })

    const result = await db.query(
      `SELECT handle, name, description, num_employees, logo_url
           FROM companies
           WHERE handle = 'c1'`)
    expect(result.rows).toEqual([{
      handle: "c1",
      name: "New",
      description: "New Description",
      num_employees: 10,
      logo_url: "http://new.img",
    }])
  })

  test("works: null fields", async function () {
    const updateDataSetNulls = {
      name: "New",
      description: "New Description",
      numEmployees: null,
      logoUrl: null,
    }

    let company = await Company.update("c1", updateDataSetNulls)
    expect(company).toEqual({
      handle: "c1",
      ...updateDataSetNulls,
    })

    const result = await db.query(
      `SELECT handle, name, description, num_employees, logo_url
           FROM companies
           WHERE handle = 'c1'`)
    expect(result.rows).toEqual([{
      handle: "c1",
      name: "New",
      description: "New Description",
      num_employees: null,
      logo_url: null,
    }])
  })

  test("not found if no such company", async function () {
    try {
      await Company.update("nope", updateData)
      throw new Error("fail test, you shouldn't get here")
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy()
    }
  })

  test("bad request with no data", async function () {
    try {
      await Company.update("c1", {})
      throw new Error("fail test, you shouldn't get here")
    } catch (err) {
      expect(err instanceof BadRequestError).toBeTruthy()
    }
  })
})

/************************************** remove */

describe("remove", function () {
  test("works", async function () {
    await Company.remove("c1")

    const response = await db.query(
      "SELECT handle FROM companies WHERE handle='c1'")
    expect(response.rows.length).toEqual(0)
  })

  test("not found if no such company", async function () {
    try {
      await Company.remove("nope")
      throw new Error("fail test, you shouldn't get here")
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy()
    }
  })
})
