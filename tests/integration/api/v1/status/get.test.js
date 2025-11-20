test("GET to /api/v1/status should retorn 200", async () => {
  const response = await fetch("http://localhost:3001/api/v1/status");
  expect(response.status).toBe(200);
});
