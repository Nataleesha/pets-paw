import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const MenuButton = styled.button`
  width: 60px;
  height: 60px;
  border: transparent;
  border-radius: 20px;
  background-color: var(--white);
  color: var(--primary);

  &:hover {
    transition: 0.2s all;
    background-color: var(--primary-light);
  }

  &:active {
    transition: 0.2s all;
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const ActionList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ActionLink = styled(Link)`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: var(--white);
  color: var(--primary);
  transition: 0.2s all;

  &:hover {
    transition: 0.2s all;
    background-color: var(--primary-light);
  }

  &:active {
    transition: 0.2s all;
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const Form = styled.form`
  margin-bottom: 10px;
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 311px;
  height: 56px;
  border-radius: 20px;
  border: 2px solid transparent;
  color: var(--text-light);
  font-size: 20px;
  line-height: 30px;
  padding: 0 0 0 20px;
  outline: none;

  &:hover {
    border-color: var(--primary-light);
  }

  &:focus {
    border-color: var(--primary);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  width: 40px;
  height: 40px;
  border: transparent;
  border-radius: 10px;
  background-color: var(--primary-light);
  color: var(--primary);
`;
