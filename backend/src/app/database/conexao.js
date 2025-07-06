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

// await client.query(`CREATE TABLE IF NOT EXISTS aluno (
//   idaluno SERIAL PRIMARY KEY,
//   cpf VARCHAR(45) NOT NULL UNIQUE,
//   nome_completo VARCHAR(60) NOT NULL,
//   tel_fixo VARCHAR(45),
//   celular VARCHAR(45),
//   cep VARCHAR(45) NOT NULL,
//   alunocol VARCHAR(45),
//   logradouro VARCHAR(100),
//   numero_casa VARCHAR(6),
//   bairro VARCHAR(45),
//   cidade VARCHAR(45),
//   estado VARCHAR(45),
//   renda_familiar FLOAT,
//   foto BYTEA
// );
// `);

console.log("Banco de dados criado com sucesso!");

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
    client.query(sql, valores, (erro, resultado) => {
      if (erro) return resolve({ error: mensagemReject });

      //parse dos resultados
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

export default client;
