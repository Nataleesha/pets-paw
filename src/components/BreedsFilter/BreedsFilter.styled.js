import { styled } from "styled-components";
import { Link } from "react-router-dom";

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

export const ImageContainer = styled.div``;

export const ImageLink = styled(Link)``;

export const Image = styled.img`
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const ImageOverlay = styled.div``;

export const TextOverlay = styled.div``;
