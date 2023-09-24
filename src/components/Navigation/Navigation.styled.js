import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { tablet } from "src/constants/breakpoints";

import voteLogo from "src/assets/images/vote.png";
import petLogo from "src/assets/images/pet.png";
import searchLogo from "src/assets/images/search.png";

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    width: 138px;
  }
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  text-align: center;
  color: var(--primary);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  border-radius: 10px;
  transition: 0.2s all;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover p {
    transition: all 0.5s ease;
    background-color: var(--primary-light);
  }

  &:active p {
    background-color: var(--primary);
    color: var(--white);
  }

  &.active p {
    background-color: var(--primary);
    color: var(--white);
  }

  &.active div {
    border-color: var(--primary-light);
  }
`;

export const LinkText = styled.p`
  background-color: var(--light-background);
  padding: 10px 0;
  border-radius: 10px;
  color: inherit;
`;

export const Voting = styled.div`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: inline-block;
    width: 130px;
    height: 190px;
    border-radius: 20px;
    border: 4px solid rgba(255, 255, 255, 0.6);
    background: #b4b7ff;
    background-image: url(${voteLogo});
    background-repeat: no-repeat;
    background-position: top 33px left 15px;

    &:hover {
      transition: all 0.5s ease;
      border-color: var(--white);
    }

    &:active {
      border-color: var(--primary-light);
    }
  }
`;

export const Breeds = styled.div`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: inline-block;
    width: 130px;
    height: 190px;
    border-radius: 20px;
    border: 4px solid rgba(255, 255, 255, 0.6);
    background: #97eab9;
    background-image: url(${petLogo});
    background-repeat: no-repeat;
    background-position: top 13px left 9px;

    &:hover {
      transition: all 0.5s ease;
      border-color: var(--white);
    }

    &:active {
      border-color: var(--primary-light);
    }
  }
`;

export const Gallery = styled.div`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: inline-block;
    width: 130px;
    height: 190px;
    border-radius: 20px;
    border: 4px solid rgba(255, 255, 255, 0.6);
    background: #ffd280;
    background-image: url(${searchLogo});
    background-repeat: no-repeat;
    background-position: bottom 0 left 10px;

    &:hover {
      transition: all 0.5s ease;
      border-color: var(--white);
    }

    &:active {
      border-color: var(--primary-light);
    }
  }
`;
