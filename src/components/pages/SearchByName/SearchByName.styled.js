import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 20px;
  padding: 20px;
  min-height: 450px;
`;

export const NameResults = styled.p`
  margin-bottom: 10px;
`;

export const Name = styled.span`
  color: var(---text-dark);
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: 0.5s ease;

  &:hover div {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
  border-radius: 20px;
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
`;

export const ImageOverlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  background-color: var(--overlay-hover);
`;

export const TextOverlay = styled.p`
  width: 100%;
  background-color: var(--white);
  color: var(--primary);
  border-radius: 10px;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 0;
`;
