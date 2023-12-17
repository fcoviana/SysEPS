module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "postgres",
      database: "syseps_db",
      charset: "utf8",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
};
