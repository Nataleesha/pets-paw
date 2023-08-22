import logo from "src/assets/images/logo.png";

import {
  Logo,
  Header,
  Greeting,
  SubHeader,
  Nav,
  NavItem,
  NavItemLink,
} from "./Home.styled";

const Home = () => {
  return (
    <div>
      <Logo src={logo} alt="pets paw logo" />
      <Header>Hi! 👋</Header>
      <Greeting>Welcome to MacPaw Bootcamp 2023</Greeting>
      <SubHeader>Lets start using The Cat API</SubHeader>
      <Nav>
        <NavItem>
          <NavItemLink to="/voting">Voting</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="">Breeds</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="">Gallery</NavItemLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Home;
