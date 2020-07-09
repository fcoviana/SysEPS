import connection from "../database/connection";
import jwt from "jsonwebtoken";
require("dotenv-safe").config();

module.exports = {

  async login(req, res) {
    const { email, password } = req.body;

    const company = await connection("companys")
      .where("email", email)
      .select("*")
      .first();

    if (req.body.email === company.email && req.body.password === company.password) {

      const id = company.id;
      var token = jwt.sign({ id }, process.env.SECRET, {
        //expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token, company: company });
    }

    res.status(500).json({ message: 'Login inválido!' });

  },

  async logout(req, res) {
    res.json({ auth: false, token: null });
  },

};
