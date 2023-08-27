import Navigation from "src/components/Navigation/Navigation";

import logo from "src/assets/images/logo.png";

import { Container, Logo, Header, Greeting, SubHeader } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Logo src={logo} alt="pets paw logo" />
      <Header>Hi! 👋</Header>
      <Greeting>Welcome to MacPaw Bootcamp 2023</Greeting>
      <SubHeader>Lets start using The Cat API</SubHeader>
      <Navigation />
    </Container>
  );
};

export default Home;
