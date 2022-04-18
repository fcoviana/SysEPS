const connection = require("../database/connection");

class ProductsController {
  async index(req, res) {
    const products = await connection("products").select("*");
    return res.json(products);
  }

  async store(req, res) {
    const { name, description, price, company_id } = req.body;
    await connection("products").insert({
      name,
      description,
      price,
      company_id,
    });
    return res.json({ name, description, price, company_id });
  }

  async update(req, res) {
    const { name, description, price, company_id } = req.body;
    const { id } = req.params;
    await connection("products")
      .update({ name, description, price, company_id })
      .where({ id });
    return res.json({ name, description, price });
  }

  async delete(req, res) {
    const { id } = req.params;
    await connection("products")
      .where({ id })
      .select("products.company_id")
      .first();
    await connection("products").where({ id }).delete();
    return res.json({ success: "Produto deletado!" });
  }
}

module.exports = new ProductsController();
