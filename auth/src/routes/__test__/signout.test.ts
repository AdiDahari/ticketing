import request from "supertest";
import { app } from "../../app";

it("removes the sessions cookie after signing out", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();

  const logoutResponse = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);

  expect(logoutResponse.get("Set-Cookie")[0]).toEqual(
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
