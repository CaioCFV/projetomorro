const Student = require("../models/Student");

module.exports = {
  async store(req, res) {
    try {
      const { name, cpf, phone, celphone, cep, renda_familiar } = req.body;

      const student = Student.build({
        name,
        cpf,
        phone,
        celphone,
        cep,
        renda_familiar,
      });

      await student.save();
      return res.send({ ...student });
    } catch (e) {
      return res.status(500).send(e);
    }
  },

  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.send(students);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
};
