const connection = require("../database/connection");

class CompanyController {
  async index(req, res) {
    const companys = await connection("companys").select("*");
    return res.json(companys);
  }

  async store(req, res) {
    const { name, email, password } = req.body;
    await connection("companys").insert({
      name,
      email,
      password,
    });
    return res.json({ name, email, password });
  }

  async update(req, res) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    await connection("companys")
      .update({ name, email, password })
      .where({ id });
    return res.json({ name, email, password });
  }

  async delete(req, res) {
    const { id } = req.params;
    await connection("companys").where({ id }).delete();
    return res.json({ success: "Empresa deleta!" });
  }
}

module.exports = new CompanyController();
