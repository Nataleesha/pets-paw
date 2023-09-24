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
  justify-content: center;
  align-items: center;
  background-color: var(--modal-bg);
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;
