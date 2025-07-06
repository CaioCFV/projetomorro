import { consulta } from "../database/conexao.js";

class AlunoRepository {
  //CRUD

  //revisado e funcionando
  create(aluno) {
    const sql = "INSERT INTO aluno SET ?;";
    return consulta(sql, aluno, "Erro no cadastro das informações");
  }

  //revisado e funcionando
  findAll() {
    const sql = "SELECT * FROM aluno;";
    return consulta(sql, "Não foi possível localizar as informações");
  }

  //revisado e funcionando
  findById(id) {
    const sql = "SELECT * FROM aluno WHERE idaluno=?;";
    return consulta(sql, id, "Não foi possível localizar o id selecionado");
  }

  //revisado e funcionando
  update(aluno, id) {
    const sql = "UPDATE aluno SET ? WHERE idaluno=?;";
    return consulta(sql, [aluno, id], "Erro na atualização dos dados");
  }

  //revisar
  delete(id) {
    const sql = "DELETE from aluno WHERE idaluno=?;";
    return consulta(
      sql,
      id,
      "Não foi possível deletar as informações selecionadas"
    );
  }
}

export default new AlunoRepository();
