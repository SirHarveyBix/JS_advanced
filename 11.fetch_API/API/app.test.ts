
import request from "supertest";

import { app } from "./app";
import { startTestContainer, stopPostgresContainer } from "./test_config/postgres.container";
import { db } from "./db";

beforeAll(async () => await startTestContainer())
afterAll(async function () {
  db.end();
  await stopPostgresContainer()
});

test("not found for site 404", async function () {
  const resp = await request(app).get("/no-such-path");
  expect(resp.statusCode).toEqual(404);
});

test("not found for site 404 (test stack print)", async function () {
  const resp = await request(app).get("/no-such-path");
  expect(resp.statusCode).toEqual(404);
});

