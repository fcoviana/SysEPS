import connection from "../database/connection";

module.exports = {

  async index(req, res) {
    const companys = await connection("companys").select("*");

    return res.json(companys);
  },

  async store(req, res) {

    const { name, email, password } = req.body;

    await connection("companys").insert({
      name,
      email,
      password
    });

    return res.json({ name, email, password });
  },

  async update(req, res) {

    const { name, email, password } = req.body;
    const { id } = req.params;
    
    await connection("companys")
      .where("id", id)
      .update({ name, email, password })
      .where({ id });

    return res.json({ name, email, password });
  },

  async delete(req, res) {
    const { id } = req.params;
    
    await connection("companys").where("id", id).delete();

    return res.json({ success: "Empresa deleta!" });
  },
};
