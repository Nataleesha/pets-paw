import { styled } from "styled-components";

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
`;

export const ContainerGraph = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
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
