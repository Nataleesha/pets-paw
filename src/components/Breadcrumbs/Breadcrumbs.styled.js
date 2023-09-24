import { styled } from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  justify-content: left;
  margin-bottom: 10px;
`;

export const BackLink = styled.button`
  width: 40px;
  height: 40px;
  border: transparent;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--switch);
  color: var(--primary);
  margin-right: 10px;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const Title = styled.button`
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 2px;
  border: transparent;
  border-radius: 10px;
  background-color: var(--primary);
  padding: 5px 30px;
  cursor: default;
`;
