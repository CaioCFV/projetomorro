import { consulta } from "../database/conexao.js";

export class CursoRepository {
  //CRUD

  //revisado e funcionando
  createCurso(curso) {
    const sql = "INSERT INTO curso SET ?;";
    return consulta(sql, curso, "Erro no cadastro das informações");
  }

  //revisado e funcionando
  findAllCurso() {
    const sql = "SELECT * FROM curso;";
    return consulta(sql, "Não foi possível localizar as informações");
  }

  //revisado e funcionando
  findByIdCurso(id) {
    const sql = "SELECT * FROM curso WHERE idcurso=?;";
    return consulta(sql, id, "Não foi possível localizar o id selecionado");
  }

  //revisado e funcionando
  updateCurso(curso, id) {
    const sql = "UPDATE curso SET ? WHERE idcurso=?;";
    return consulta(sql, [curso, id], "Erro na atualização dos dados");
  }

  //revisado e funcionando
  deleteCurso(id) {
    const sql = "DELETE from curso WHERE idcurso=?;";
    return consulta(
      sql,
      id,
      "Não foi possível deletar as informações selecionadas"
    );
  }
}
