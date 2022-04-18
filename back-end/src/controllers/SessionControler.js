const connection = require("../database/connection");
const jwt = require("jsonwebtoken");
require("dotenv-safe").config();

class SessionControler {
  async login(req, res) {
    const { email, password } = req.body;
    const company = await connection("companys")
      .where({ email })
      .select("*")
      .first();
    const isEqualEmail = req.body.email === company.email;
    const isEqualPassword = req.body.email === company.email;
    if (isEqualEmail && isEqualPassword) {
      const id = company.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300,
      });
      return res.json({ auth: true, token, company });
    }
    return res.status(500).json({ message: "Login inválido!" });
  }

  async logout(req, res) {
    return res.json({ auth: false, token: null });
  }
}

module.exports = new SessionControler();
