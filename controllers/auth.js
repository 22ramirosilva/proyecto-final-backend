const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middlewares/validate-jwt");
const { Pool } = require("pg");
// const { body, validationResult } = require("express-validator");

const pool = new Pool({
  user: "postgres",
  database: "pokemones",
  password: "47853751",
});

// const { validationResult } = require("express-validator");

// const usuarios = [
//   {
//     name: "Ramiro",
//     mail: "ramiro@hotmail.com",
//     password: "$2b$10$0wyZA3wQWkypYNuIaYc.YeUgqvamJmoxzdsBXZjiDqLIi2ki18YeC",
//   },
// ];

exports.postUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  if (req.body.password !== req.body.passwordConfirmation) {
    res.statusCode = 400;
    return res.json("las contraseñas no coinciden");
  }

  const { name, mail } = req.body;
  pool.query(
    "INSERT INTO usuarios ( name, email, password ) values ($1, $2, $3)",
    [name, mail, password]
  );

  res.json({ success: true });
};

exports.postLogin = async (req, res) => {
  const { rows } = await pool.query(
    "SELECT name, email, password FROM public.usuarios where email = $1",
    [req.body.mail]
  );

  if (!rows[0]) {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }
  const validPassword = await bcrypt.compare(
    req.body.password,
    rows[0].password
  );
  if (!validPassword) {
    return res.status(400).json({ error: "Contraseña no valida" });
  }

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  const token = jwt.sign(
    {
      name: rows[0].name,
      id: rows[0].id,
    },
    TOKEN_SECRET
  );

  res.json({ error: null, data: "Login exitoso", token });
};
