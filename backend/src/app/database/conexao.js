import { Pool } from "pg";
import { Client } from "pg";

const client = new Client({
  user: "projetomorrodb_user",
  host: "dpg-d1ktrjer433s73d1kbng-a",
  database: "projetomorrodb_k5tq",
  password: "8viR842rQeqmTx8hc5YFBTQsIFOrAkbg",
  port: 5432,
});

await client.connect();
console.log(client, "deixa eu ver");
await client.query(`CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  ativo BOOLEAN,
  criado_em TIMESTAMP DEFAULT NOW()
);
`);
// console.log("Banco de dados criado com sucesso!");

const pool = new Pool({
  user: "projetomorrodb_user",
  host: "dpg-d1ktrjer433s73d1kbng-a",
  database: "projetomorrodb_k5tq",
  password: "8viR842rQeqmTx8hc5YFBTQsIFOrAkbg",
  port: 5432,
});

// const conexao = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "1234",
//   database: "projmorro",
// });

// conexao.connect();
export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve) => {
    pool.query(sql, valores, (erro, resultado) => {
      if (erro) return resolve({ error: mensagemReject });

      //parse dos resultados
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

export default pool;
