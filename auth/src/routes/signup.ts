import express from "express";

const router = express.Router();

router.post("/api/users/signup", (req, res) => {
  const { email, password } = req.body;

  res.send(`Email: ${email}, Password: ${password}`);
});

export { router as signupRouter };
