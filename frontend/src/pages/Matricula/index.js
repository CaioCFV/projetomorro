import { CardCurso } from "../../components/Card";
import { Heading1 } from "../../components/Typograph";
import { List } from "./style";
export default function Matricula() {
  return (
    <>
      <Heading1>Matricular aluno</Heading1>
      <List style={{ color: "#fff" }}>
        <li>
          <CardCurso />
        </li>
        <li>
          <CardCurso />
        </li>
        <li>
          <CardCurso />
        </li>
        <li>
          <CardCurso />
        </li>
        <li>
          <CardCurso />
        </li>
      </List>
    </>
  );
}
