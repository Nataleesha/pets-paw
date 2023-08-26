import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 3;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  background-color: var(--background-color);
`;

export const InnerContainer = styled.div`
  width: 335px;
  height: calc(100% - 40px);
  padding: 20px;
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
