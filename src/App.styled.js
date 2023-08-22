import { styled } from "styled-components";
import { mobile, tablet, desktop } from "./components/constants/breakpoints";

export const Container = styled.div`
  width: ${mobile};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  background-color: var(--background-color);

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
