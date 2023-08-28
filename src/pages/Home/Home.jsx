import { Link } from "react-router-dom";
import Navigation from "src/components/Navigation/Navigation";

import logo from "src/assets/images/logo.png";
import hero from "src/assets/images/hero.png";

import {
  Container,
  Content,
  Hero,
  Logo,
  Header,
  Greeting,
  SubHeader,
} from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src={logo} alt="pets paw logo" />
        </Link>
        <Header>Hi! 👋</Header>
        <Greeting>Welcome to MacPaw Bootcamp 2023</Greeting>
        <SubHeader>Lets start using The Cat API</SubHeader>
        <Navigation />
      </Content>
      <Hero>
        <img src={hero} alt="hero" />
      </Hero>
    </Container>
  );
};

export default Home;
