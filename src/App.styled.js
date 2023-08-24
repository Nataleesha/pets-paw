import { styled } from "styled-components";
import { mobile, tablet, desktop } from "./constants/breakpoints";

export const Container = styled.div`
  width: calc(${mobile} - 40px);
  min-height: calc(100vh - 40px);
  margin: 0 auto;
  padding: 20px;
  position: relative;
  background-color: var(--background-color);

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
