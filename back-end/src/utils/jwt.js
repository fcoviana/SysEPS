const jwt = require("jsonwebtoken");
require("dotenv-safe").config();

module.exports = function verifyJWT(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token fornecido." });
  }

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "Falha ao autenticar o token." });
    }
    next();
  });
};
