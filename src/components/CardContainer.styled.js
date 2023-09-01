import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const CardContainer = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: var(--white);
  min-height: calc(100vh - 220px);

  @media screen and (min-width: ${tablet}) {
    min-height: calc(100vh - 150px);
  }
`;
