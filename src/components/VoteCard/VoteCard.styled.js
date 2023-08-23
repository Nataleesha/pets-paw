import { styled } from "styled-components";

export const Container = styled.div``;

export const ImageCard = styled.div`
  position: relative;
`;

export const Image = styled.img`
  object-fit: fill;
  border-radius: 20px;
`;

export const ButtonList = styled.ul`
  position: absolute;
  bottom: -34px;
  left: 55px;
  display: flex;
  border: 5px solid var(--white);
  border-radius: 20px;
  background-color: var(--white);
`;

export const ButtonListItem = styled.li``;

export const ButtonLike = styled.button`
  height: 56px;
  width: 56px;
  border: transparent;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: var(--green);
  color: var(--white);

  &:hover {
    background-color: var(--green-light);
    color: var(--green);
  }
`;

export const ButtonFav = styled.button`
  height: 56px;
  width: 62px;
  border: transparent;
  border-left: 4px solid var(--white);
  border-right: 4px solid var(--white);
  background-color: var(--primary);
  color: var(--white);

  &:hover {
    background-color: var(--primary-light);
    color: var(--primary);
  }
`;

export const ButtonDislike = styled.button`
  height: 56px;
  width: 56px;
  border: transparent;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: var(--orange);
  color: var(--white);

  &:hover {
    background-color: var(--orange-light);
    color: var(--orange);
  }
`;
