const LOCALHOST_PORT = process.env.LOCALHOST_PORT;

test("GET to /api/v1/status should retorn 200", async () => {
  const response = await fetch(`http://localhost:${LOCALHOST_PORT}/api/v1/status`);
  expect(response.status).toBe(200);
});
