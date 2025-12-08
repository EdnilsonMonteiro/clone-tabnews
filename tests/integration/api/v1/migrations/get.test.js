import database from "infra/database.js";

const LOCALHOST_PORT = process.env.LOCALHOST_PORT;

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("GET to /api/v1/migrations should retorn 200", async () => {
  const response = await fetch(
    `http://localhost:${LOCALHOST_PORT}/api/v1/migrations`,
  );
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
