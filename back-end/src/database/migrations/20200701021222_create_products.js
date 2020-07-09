exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.decimal("price").notNullable();

    table.integer("company_id").notNullable();
    table.foreign("company_id").references("id")
    .inTable("companys")
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
    knex.schema.dropTable("products")
};
