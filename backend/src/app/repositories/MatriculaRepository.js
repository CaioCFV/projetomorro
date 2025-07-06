import { consulta } from "../database/conexao.js";

export class MatriculaRepository {
  createMatricula(matricula) {
    const sql = "INSERT INTO matricula SET ?;"; // revisar necessidade deste método
    return consulta(sql, matricula, "Erro no cadastro das informações");
  }

  findAllMatricula() {
    const sql = "SELECT * FROM matricula;";
    return consulta(sql, "", "Não foi possível localizar as informações");
  }

  findByIdMatricula(id) {
    const sql = "SELECT * FROM matricula WHERE idmatricula=?;"; //revisar query
    return consulta(sql, id, "Não foi possível localizar o id selecionado");
  }

  updateMatricula(matricula, id) {
    const sql = "UPDATE matricula SET ? WHERE idmatricula=?;"; //revisar query
    return consulta(sql, [matricula, id], "Erro na atualização dos dados");
  }

  deleteMatricula(id) {
    const sql = "DELETE from matricula WHERE idmatricula=?;"; //revisar query
    return consulta(
      sql,
      id,
      "Não foi possível deletar as informações selecionadas"
    );
  }
}
