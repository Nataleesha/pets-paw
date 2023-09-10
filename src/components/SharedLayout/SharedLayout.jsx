import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import Navigation from "src/components/Navigation/Navigation";
import logo from "src/assets/images/logo.png";
import Loader from "src/components/Loader/Loader";

import {
  Container,
  Logo,
  Header,
  SubHeader,
  ContentContainer,
  MenuContainer,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <MenuContainer>
        <Link to="/">
          <Logo src={logo} alt="pets paw logo" />
        </Link>
        <Header>Hi! 👋</Header>
        <SubHeader>Lets start using The Cat API</SubHeader>
        <Navigation />
      </MenuContainer>
      <ContentContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContentContainer>
    </Container>
  );
};

export default SharedLayout;
