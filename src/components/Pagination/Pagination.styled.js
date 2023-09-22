import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 122px;
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: var(--primary-light);
  color: var(--primary);
  border-radius: 10px;
  border-color: transparent;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: var(--white);
    background-color: var(--primary);
  }

  &[disabled] {
    background-color: var(--background-color);
    color: var(--text-light);
    cursor: default;
  }
`;
