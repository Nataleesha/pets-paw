import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  margin-bottom: 20px;
`;

export const NavItemLink = styled(Link)`
  display: block;
  text-align: center;
  background-color: var(--white);
  color: var(--primary);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  padding: 10px 0;
  border-radius: 10px;
  transition: 0.2s all;

  &:hover {
    transition: 0.2s all;
    background-color: var(--primary-light);
  }

  &:active {
    transition: 0.2s all;
    background-color: var(--primary);
    color: var(--white);
  }
`;
