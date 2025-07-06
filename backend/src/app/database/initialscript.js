import { Client } from "pg";

const client = new Client({
  user: "projetomorrodb_user",
  host: "dpg-d1ktrjer433s73d1kbng-a",
  database: "projetomorrodb_k5tq",
  password: "8viR842rQeqmTx8hc5YFBTQsIFOrAkbg",
  port: 5432,
});

await client.connect();
await client.query(`DROP TABLE usuarios;`);
