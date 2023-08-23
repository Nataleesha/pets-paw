import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  margin-bottom: 80px;
`;

export const Header = styled.h1`
  color: var(--text-dark);
  font-size: 44px;
  font-weight: 500;
  line-height: 58px;
  margin-bottom: 10px;
`;

export const Greeting = styled.p`
  font-size: 20px;
  margin-bottom: 60px;
`;

export const SubHeader = styled.h3`
  color: #1d1d1d;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

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
