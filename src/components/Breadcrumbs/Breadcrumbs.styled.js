import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: inline-flex;
  justify-content: left;
  margin-bottom: 10px;
`;

export const BackLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-light);
  color: var(--primary);
  margin-right: 10px;

  &:hover {
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
