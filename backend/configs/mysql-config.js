import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "url_shortener",
  })
  .promise();

export default pool;
