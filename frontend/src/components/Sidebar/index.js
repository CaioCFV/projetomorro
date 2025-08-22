import { Block, Container, Image, MenuBlock, Menu, UserInfo } from "./style";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

export const Sidebar = function () {
  const name = JSON.parse(
    window.localStorage.getItem("Authorization")
  ).nickname;
  const email = JSON.parse(window.localStorage.getItem("Authorization")).email;
  const firstLetter = name.charAt(0);

  const logout = () => {
    window.localStorage.setItem("Authorization", "");
    window.location.href = "/login";
  };
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
      <UserInfo>
        <i>{firstLetter}</i>
        <div>
          <p>{name}</p>
          <small>{email}</small>
          <button onClick={logout}>Sair</button>
        </div>
      </UserInfo>
    </Container>
  );
};
