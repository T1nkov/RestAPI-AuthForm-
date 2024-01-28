const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: "5432",
  password: "2092013",
  user: "postgres",
  database: "AuthForm",
});

module.exports = pool;
