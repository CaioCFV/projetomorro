import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController.js";
import { CursoController } from "../controllers/CursoController.js";
import { MatriculaController } from "../controllers/MatriculaController.js";

const matricula = new MatriculaController();
const curso = new CursoController();
const aluno = new AlunoController();

const router = Router();

router.get("/alunos", aluno.index);
router.get("/cursos", curso.indexCurso);
router.get("/matriculas", matricula.indexMatricula);

//buscar por id
router.get("/alunos/:id", aluno.show);
router.get("/cursos/:id", curso.showCurso);
router.get("/matriculas/:id", matricula.showMatricula);

//cadastrar novo

router.post("/alunos", aluno.store);
router.post("/cursos", curso.storeCurso);
router.post("/matriculas", matricula.storeMatricula);

//alterar dados

router.put("/alunos/:id", aluno.update);
router.put("/cursos/:id", curso.updateCurso);
router.put("/matriculas/:id", matricula.updateMatricula);

//deletar dados
router.delete("/alunos/:id", aluno.delete);
router.delete("/cursos/:id", curso.deleteCurso);
router.delete("/matriculas/:id", matricula.deleteMatricula);

export default router;
