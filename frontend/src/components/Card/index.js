import { Card, Title, Description } from "./style";
import { Button } from "../Button";

export const CardCurso = function ({ data, setCourseId }) {
  return (
    <Card>
      <Title>{data.name}</Title>
      <Description>
        {data.description}
        <br />
        <br />
        <strong>Professor:</strong> {data.teacher}
        <br />
        <strong>Carga horária:</strong> {data.total_hours} horas
      </Description>
      <Button onClick={() => setCourseId(data.id)}>Matricular aluno</Button>
    </Card>
  );
};
