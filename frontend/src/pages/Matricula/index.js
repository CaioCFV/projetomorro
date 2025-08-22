import { useEffect, useState } from "react";
import { CardCurso } from "../../components/Card";
import { Heading1 } from "../../components/Typograph";
import { ServiceCurso, ServiceMatricula } from "../../service/api";
import { List, Paragraph, Title, Form } from "./style";
import Modal from "../../components/Modal";
import { Button } from "../../components/Button";

const formToJson = function (form) {
  return Object.assign(
    ...Array.from(new FormData(form).entries(), ([x, y]) => ({
      [x]: y,
    }))
  );
};

export default function Matricula() {
  const service = new ServiceCurso();
  const registrationService = new ServiceMatricula();
  const [courses, setCourses] = useState([]);
  const [courseIntention, setCourseIntencion] = useState({});
  const [visible, setVisible] = useState(false);
  const [studentsNotRegistred, setStudents] = useState([]);

  const getCourses = async () => {
    const r = await service.get();
    setCourses(r);
  };

  const selectCourse = (id) => {
    const selected = courses.find((item) => item.id == id);
    showRegistrations(selected);
    setCourseIntencion(selected);
    setVisible(true);
  };

  const showRegistrations = async (selected) => {
    setStudents([]);
    const r = await registrationService.studentsNotRegistred(selected.id);
    setStudents(r);
  };

  const initRegistration = async (e) => {
    e.preventDefault();
    const data = formToJson(e.target);
    const students = Object.keys(data);
    const r = await registrationService.registerStudents(
      courseIntention.id,
      students
    );
    setStudents([]);
    setVisible(false);
    alert("Alunos matriculados com sucesso");
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Heading1>Matriculas e cursos</Heading1>

      <List style={{ color: "#fff" }}>
        {courses.map((item) => {
          return (
            <li key={item.name}>
              <CardCurso data={item} setCourseId={selectCourse} />
            </li>
          );
        })}
      </List>

      <Modal isActive={visible} handleModal={setVisible}>
        <Title>{courseIntention.name}</Title>
        <Paragraph>
          {courseIntention.description}
          <br />
          <br />
          Professor: {courseIntention.teacher}
          <br />
          De: {courseIntention.init_hour}h até {courseIntention.end_hour}h
          <br />
          Total de horas: {courseIntention.total_hours}h
        </Paragraph>
        <Title>Selecionar alunos:</Title>
        <Form onSubmit={initRegistration}>
          {studentsNotRegistred.map((item) => (
            <label>
              <input type="checkbox" name={item.id} />
              {item.name}
            </label>
          ))}
          <br />
          <Button>Salvar</Button>
        </Form>
      </Modal>
    </>
  );
}
