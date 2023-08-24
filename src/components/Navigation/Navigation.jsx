import { Nav, NavItem, NavItemLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavItemLink to="/voting">Voting</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/breeds">Breeds</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="gallery">Gallery</NavItemLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
