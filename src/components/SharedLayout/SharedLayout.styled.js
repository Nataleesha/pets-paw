import { styled } from "styled-components";

export const Container = styled.div`
  width: 1400px;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: right;

  & ul {
    justify-content: left;
  }
`;

export const MenuContainer = styled.div`
  width: 518px;
  padding-left: 100px;
  position: fixed;
  top: 20px;
  left: 20px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  width: 768px;
  padding: 20px;
  display: inline-block;
`;

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
