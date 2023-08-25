import { styled } from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  height: calc(100vh - 40px);
  z-index: 3;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  text-align: right;
  background-color: var(--background-color);
`;

export const ButtonClose = styled.button`
  border: none;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  margin: 0 0 20px 0;
  background-color: var(--white);
  color: var(--primary);

  &:hover {
    background-color: var(--primary-light);
  }

  &:active {
    background-color: var(--primary);
    color: var(--white);
  }
`;
