import request from "supertest";
import { app } from "../../app";

it("falis for unrecognized email", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      passsword: "password",
    })
    .expect(400);
});

it("fails to sign in with an incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "incorrect",
    })
    .expect(400);
});

it("responds with a cookie for correct credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
