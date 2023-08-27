import {
  Nav,
  NavItem,
  NavItemLink,
  LinkText,
  Voting,
  Breeds,
  Gallery,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavItemLink to="/voting">
          <Voting></Voting>
          <LinkText>Voting</LinkText>
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/breeds">
          <Breeds></Breeds>
          <LinkText>Breeds</LinkText>
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/gallery">
          <Gallery></Gallery>
          <LinkText>Gallery</LinkText>
        </NavItemLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
