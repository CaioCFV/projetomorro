import { Block, Container, Image, MenuBlock, Menu } from "./style";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

export const Sidebar = function () {
  return (
    <Container>
      <Block>
        <Image src={Logo} />
      </Block>
      <MenuBlock>
        <Menu>
          <li>
            <Link to={"/"}>
              <HomeRoundedIcon />
              Home
            </Link>
          </li>
          <li>
            <Link to={"/alunos"}>
              <PeopleRoundedIcon />
              Alunos
            </Link>
          </li>
          <li>
            <Link to={"/cursos"}>
              <AnalyticsRoundedIcon />
              Cursos
            </Link>
          </li>
          <li>
            <Link to={"/matricula"}>
              <AssignmentRoundedIcon />
              Matricula
            </Link>
          </li>
        </Menu>
      </MenuBlock>
    </Container>
  );
};
