import Navigation from "src/components/Navigation/Navigation";

import logo from "src/assets/images/logo.png";

import { Logo, Header, Greeting, SubHeader } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <Logo src={logo} alt="pets paw logo" />
      <Header>Hi! 👋</Header>
      <Greeting>Welcome to MacPaw Bootcamp 2023</Greeting>
      <SubHeader>Lets start using The Cat API</SubHeader>
      <Navigation />
    </div>
  );
};

export default Home;
