import { Link } from "react-router-dom";
import Logo from "src/components/Logo/Logo";
import Navigation from "src/components/Navigation/Navigation";
import ThemeSwitcher from "src/components/ThemeSwitcher/ThemeSwitcher";
import { Helmet } from "react-helmet-async";

import hero from "src/assets/images/hero.png";

import {
  Container,
  Navbar,
  Content,
  Hero,
  Header,
  SubHeader,
} from "./Home.styled";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Content>
          <Navbar>
            <Link to="/" style={{ marginBottom: "80px" }}>
              <Logo />
            </Link>
            <ThemeSwitcher />
          </Navbar>
          <Header>Hi! 👋</Header>
          <SubHeader>Lets start using The Cat API</SubHeader>
          <Navigation />
        </Content>
        <Hero>
          <img src={hero} alt="hero" />
        </Hero>
      </Container>
    </>
  );
};

export default Home;
