const Registration = require("../models/Registration");
const Student = require("../models/Student");
const Course = require("../models/Course");

module.exports = {
  async store(req, res) {
    try {
      const { id_student, id_course } = req.body;

      const student = await Student.findByPk(id_student);

      if (!student) {
        return res.status(400).send({ error: "Aluno não cadastrado" });
      }

      const course = await Course.findByPk(id_course);

      if (!course) {
        return res.status(400).send({ error: "Curso não cadastrado" });
      }

      const alreadyRegistrated = await Registration.findOne({
        where: {
          id_student: id_student,
          id_course: id_course,
        },
      });

      if (alreadyRegistrated) {
        return res
          .status(400)
          .send({ error: "Aluno já está matriculado nesse curso" });
      }

      console.log(course);
      const data = await course.addStudent(student);
      return res.send({ ...data });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },

  async index(req, res) {
    try {
      const registrations = await Registration.findAll();
      return res.send(registrations);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
};
