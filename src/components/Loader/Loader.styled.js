import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    height: 300px;
  }
`;
