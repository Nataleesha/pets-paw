import { styled } from "styled-components";
import { tablet, desktop } from "src/constants/breakpoints";

export const Container = styled.div`
  @media screen and (min-width: ${tablet}) {
    padding-left: 147px;

    & ul {
      justify-content: left;
    }
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const Hero = styled.div`
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: block;
    /* background: url("src/assets/hero.png") #fbe0dc 50% / cover no-repeat; */
    height: 900px;
    width: 775px;
    position: absolute;
    top: -20px;
    right: -20px;
    background: 700px 700px;

    &::before {
      content: "";
      position: absolute;
      height: 90%;
      width: 90%;
      top: 20px;
      right: 20px;
      z-index: -1;
      background-color: #fbe0dc;
      border-radius: 20px;
    }
  }
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
