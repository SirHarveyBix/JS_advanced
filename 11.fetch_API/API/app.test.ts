
import request from "supertest";

import { app } from "./app";
import { getClient, startTestContainer, stopPostgresContainer } from "./test_config/postgres.container";

beforeAll(async () => await startTestContainer())
afterAll(async function () {
  const dbClient = getClient()
  dbClient.end();
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

