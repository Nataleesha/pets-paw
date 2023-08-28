import Navigation from "src/components/Navigation/Navigation";

import logo from "src/assets/images/logo.png";

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
        <Logo src={logo} alt="pets paw logo" />
        <Header>Hi! 👋</Header>
        <Greeting>Welcome to MacPaw Bootcamp 2023</Greeting>
        <SubHeader>Lets start using The Cat API</SubHeader>
        <Navigation />
      </Content>
      <Hero>
        <img src="src/assets/hero.png" alt="hero" />
      </Hero>
    </Container>
  );
};

export default Home;
