
import request from "supertest"; // used for testing Http response
import app from '../app.js'

describe("HNG12 Public API", () => {
  it("should return the required JSON response", async () => {
    const res = await request(app).get("/"); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("current_datetime");
    expect(res.body).toHaveProperty("github_url");

    // Validate email format
    expect(res.body.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    // Validate datetime format (ISO 8601)
    expect(new Date(res.body.current_datetime).toISOString()).toBe(res.body.current_datetime);

    // Validate GitHub URL format
    expect(res.body.github_url).toMatch(/^https:\/\/github\.com\/.+\/.+$/);
  });

  it("should handle invalid routes with 404", async () => {
    const res = await request(app).get("/invalid-route");
    expect(res.statusCode).toBe(404);
  });
});
    