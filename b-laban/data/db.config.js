import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "B_Laban",
  password: "B-Laban25713",
  port: 7000,
});

db.connect();

export default db;
