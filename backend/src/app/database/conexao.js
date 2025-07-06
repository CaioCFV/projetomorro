import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "projmorro",
});

conexao.connect();

export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return resolve({ error: mensagemReject });

      //parse dos resultados
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

export default conexao;
