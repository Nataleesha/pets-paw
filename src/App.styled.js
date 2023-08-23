import { styled } from "styled-components";
import { mobile, tablet, desktop } from "./components/constants/breakpoints";

export const Container = styled.div`
  width: calc(${mobile} - 40px);
  min-height: calc(100vh - 20px);
  margin: 0 auto;
  padding: 20px 20px 0 20px;

  background-color: var(--background-color);

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
