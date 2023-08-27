import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  background-color: var(--background-color);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  gap: 10px;

  & svg {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  & p {
    margin-right: 60px;
  }

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TimeButton = styled.button`
  border: transparent;
  border-radius: 5px;
  cursor: default;
  background-color: var(--white);
  color: var(--text-dark);
  width: 60px;
  height: 30px;
`;
