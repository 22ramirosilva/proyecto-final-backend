const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { postUsuario, postLogin } = require("../controllers/auth");
const { body } = require("express-validator");

router.post(
  "/register",
  body("mail").isEmail(),
  body("password").isLength({ min: 5 }),
  body("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),

  postUsuario
);

router.post("/login", body("mail").trim(), postLogin);

module.exports = router;
