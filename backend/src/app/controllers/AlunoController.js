import AlunoRepository from "../repositories/AlunoRepository.js";

export class AlunoController {
  //select all

  async index(req, res) {
    const row = await AlunoRepository.findAll();
    res.json(row);
  }

  //select por id

  async show(req, res) {
    const id = req.params.id;
    const row = await AlunoRepository.findById(id);
    res.json(row);
  }

  //cadastrar

  async store(req, res) {
    const aluno = req.body;
    const row = await AlunoRepository.create(aluno);
    res.json(row);
  }

  //alterar dados

  async update(req, res) {
    const aluno = req.body;
    const id = req.params.id;
    const row = await AlunoRepository.update(aluno, id);
    res.json(row);
  }

  //deletar dados

  async delete(req, res) {
    const id = req.params.id;
    const row = await AlunoRepository.delete(id);
    res.json(row);
  }
}
