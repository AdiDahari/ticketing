import express from "express";

const router = express.Router();

router.get("/api/users/signin", (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("Hi There!");
});

export { router as signinRouter };
