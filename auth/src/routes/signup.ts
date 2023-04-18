import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@adtixit/common";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email is not valid "),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be 4 to 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (await User.findOne({ email })) {
      throw new BadRequestError("Email is taken");
    }

    const user = User.build({ email, password });
    await user.save();

    // JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // Storing JWT Token on session
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
