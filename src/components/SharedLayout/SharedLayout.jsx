import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import Logo from "src/components/Logo/Logo";
import Navigation from "src/components/Navigation/Navigation";
import Loader from "src/components/Loader/Loader";
import ThemeSwitcher from "src/components/ThemeSwitcher/ThemeSwitcher";

import {
  Container,
  Navbar,
  Header,
  SubHeader,
  ContentContainer,
  MenuContainer,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <MenuContainer>
        <Navbar>
          <Link to="/" style={{ marginBottom: "80px" }}>
            <Logo />
          </Link>
          <ThemeSwitcher />
        </Navbar>
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
