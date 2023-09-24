import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 0;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: right;

  & ul {
    justify-content: left;
  }

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 74px;
`;

export const MenuContainer = styled.div`
  width: 518px;
  padding-left: 100px;
  position: fixed;
  top: 20px;
  right: 55%;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: inline-block;

  @media screen and (max-width: 1439px) {
    padding: 0;
    flex-direction: column;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    width: 768px;
    padding: 0;
  }
`;

export const Header = styled.h1`
  color: var(--text-dark);
  font-size: 44px;
  font-weight: 500;
  line-height: 58px;
  margin-bottom: 70px;
`;

export const SubHeader = styled.h3`
  color: var(--text-dark);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
