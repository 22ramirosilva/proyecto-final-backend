const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middlewares/validate-jwt");

const { validationResult } = require("express-validator");

const usuarios = [
  {
    name: "Ramiro",
    mail: "ramiro@hotmail.com",
    password: "$2b$10$0wyZA3wQWkypYNuIaYc.YeUgqvamJmoxzdsBXZjiDqLIi2ki18YeC",
  },
];

exports.postUsuario = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const passwordConfirmation = await bcrypt.hash(
    req.body.passwordConfirmation,
    salt
  );

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newUser = {
    name: req.body.name,
    mail: req.body.mail,
    password: password,
    passwordConfirmation: passwordConfirmation,
  };
  usuarios.push(newUser);

  res.json({ success: true, newUser, usuarios });
};

exports.getUsuarios = async (req, res) => {
  console.log(req.user);
  res.json({ error: null, usuarios });
};

exports.postLogin = async (req, res) => {
  const user = usuarios.find((u) => u.mail === req.body.mail);
  if (!user) {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Contraseña no valida" });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const token = jwt.sign(
    {
      name: user.name,
      id: user.id,
    },
    TOKEN_SECRET
  );

  res.json({ error: null, data: "Login exitoso", token });
};
