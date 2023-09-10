import { Link } from "react-router-dom";
import Navigation from "src/components/Navigation/Navigation";
import { Helmet } from "react-helmet-async";

import logo from "src/assets/images/logo.png";
import hero from "src/assets/images/hero.png";

import {
  Container,
  Content,
  Hero,
  Logo,
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
          <Link to="/">
            <Logo src={logo} alt="pets paw logo" />
          </Link>
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
