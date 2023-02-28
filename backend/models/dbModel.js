const pg = require("pg");
require("dotenv").config();

const client = new pg.Client({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  connectionString: process.env.POSTGRES_CONNECTION,
  ssl: true,
});

client.connect();

module.exports = client;
