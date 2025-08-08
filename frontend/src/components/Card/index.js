import { Card, Title, Description } from "./style";
import { Button } from "../Button";

export const CardCurso = function () {
  return (
    <Card>
      <Title>Curso de programação em C</Title>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptates inventore quas sunt incidunt reiciendis saepe. Reiciendis,
        veritatis voluptatum officia molestiae natus ipsa magni doloremque?
        Exercitationem adipisci minima in voluptatibus.{" "}
      </Description>
      <Button>Matricular aluno</Button>
    </Card>
  );
};
