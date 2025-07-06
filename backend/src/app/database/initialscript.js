import { Client } from "pg";

const client = new Client({
  user: "projetomorrodb_user",
  host: "dpg-d1ktrjer433s73d1kbng-a",
  database: "projetomorrodb_k5tq",
  password: "8viR842rQeqmTx8hc5YFBTQsIFOrAkbg",
  port: 5432,
});

await client.connect();
await client.query(`
    CREATE TABLE IF NOT EXISTS aluno (
        idaluno SERIAL PRIMARY KEY,
        cpf VARCHAR(45) NOT NULL UNIQUE,
        nome_completo VARCHAR(60) NOT NULL,
        tel_fixo VARCHAR(45),
        celular VARCHAR(45),
        cep VARCHAR(45) NOT NULL,
        alunocol VARCHAR(45),
        logradouro VARCHAR(100),
        numero_casa VARCHAR(6),
        bairro VARCHAR(45),
        cidade VARCHAR(45),
        estado VARCHAR(45),
        renda_familiar FLOAT,
        foto BYTEA
    );
`);
