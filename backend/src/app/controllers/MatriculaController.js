import { MatriculaRepository } from "../repositories/MatriculaRepository.js";

const matriculaRepository = new MatriculaRepository();

export class MatriculaController {
  async indexMatricula({ res }) {
    const matriculas = await matriculaRepository.findAllMatricula();
    console.log(matriculas);
    return res.json(matriculas);
  }

  async showMatricula(req, res) {
    const { id } = req.params;
    const matricula = await matriculaRepository.findByIdMatricula(id);

    if (!matricula) {
      return res.status(404).json({ error: "Matricula not found" });
    }

    return res.json(matricula);
  }

  async storeMatricula(req, res) {
    const matricula = await matriculaRepository.createMatricula(req.body);
    return res.json(matricula);
  }

  async updateMatricula(req, res) {
    const { id } = req.params;
    const matricula = await matriculaRepository.findByIdMatricula(id);

    if (!matricula) {
      return res.status(404).json({ error: "Matricula not found" });
    }

    await matricula.update(req.body);
    return res.json(matricula);
  }

  async deleteMatricula(req, res) {
    const { id } = req.params;
    const matricula = await matriculaRepository.findByIdMatricula(id);

    if (!matricula) {
      return res.status(404).json({ error: "Matricula not found" });
    }

    await matricula.destroy();
    return res.status(204).send();
  }
}
