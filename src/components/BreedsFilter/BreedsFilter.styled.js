import { styled } from "styled-components";

export const Select = styled.select`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: var(--background-color);
  color: var(--text-light);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-light);
  }
`;

export const SortContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const AbcSort = styled.button`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 9px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: var(--background-color);
  color: var(--text-light);

  &:hover {
    color: var(--primary);
    border-color: var(--primary-light);
  }
`;

export const Grid = styled.div`
  /* gap: 20px;
  columns: 3; */
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
