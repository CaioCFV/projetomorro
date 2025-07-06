import { CursoRepository } from "../repositories/CursoRepository.js";

const cursoR = new CursoRepository();

export class CursoController {
  //select all

  async indexCurso(req, res) {
    const row = await cursoR.findAllCurso();
    res.json(row);
  }

  //select por id

  async showCurso(req, res) {
    const id = req.params.id;
    const row = await cursoR.findByIdCurso(id);
    res.json(row[0]);
  }

  //cadastrar

  async storeCurso(req, res) {
    const curso = req.body;
    const row = await cursoR.createCurso(curso);
    res.json(row);
  }

  //alterar dados

  async updateCurso(req, res) {
    const curso = req.body;
    const id = req.params.id;
    const row = await cursoR.updateCurso(curso, id);
    res.json(row);
  }

  //deletar dados

  async deleteCurso(req, res) {
    const id = req.params.id;
    const row = await cursoR.deleteCurso(id);
    res.json(row);
  }
}
