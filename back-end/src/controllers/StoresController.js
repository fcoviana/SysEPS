const connection = require("../database/connection");

class StoresController {
  async index(req, res) {
    const stores = await connection("stores")
      .join("companys", "companys.id", "=", "stores.company_id")
      .select([
        "stores.id",
        "stores.name",
        "stores.description",
        "companys.name as company",
      ]);
    return res.json(stores);
  }

  async getById(req, res) {
    const { id } = req.params;
    const store = await connection("stores").select("*").where({ id });
    return res.json(store);
  }

  async store(req, res) {
    const { name, description, company_id } = req.body;
    await connection("stores").insert({
      name,
      description,
      company_id,
    });
    return res.json({ name, description, company_id });
  }

  async update(req, res) {
    const { name, description, company_id } = req.body;
    const { id } = req.params;
    await connection("stores").update({ name, description }).where({ id });
    return res.json({ name, description, company_id });
  }

  async delete(req, res) {
    const { id } = req.params;
    await connection("stores").where({ id }).delete();
    return res.json({ success: "Loja deleta!" });
  }
}

module.exports = new StoresController();
