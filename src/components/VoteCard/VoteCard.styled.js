import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const Container = styled.div`
  margin-bottom: 45px;
`;

export const ImageCard = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  min-height: 160px;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 20px;
  width: 100%;
  height: auto;
`;

export const ButtonList = styled.ul`
  position: absolute;
  transform: translateY(-50%);
  left: 55px;
  display: flex;
  border: 5px solid var(--white);
  border-radius: 20px;
  background-color: var(--white);

  @media screen and (min-width: ${tablet}) {
    left: 230px;
  }
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

  @media screen and (min-width: ${tablet}) {
    height: 76px;
    width: 76px;

    & svg {
      width: 30px;
      height: 30px;
    }
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

  @media screen and (min-width: ${tablet}) {
    height: 76px;
    width: 82px;

    & svg {
      width: 30px;
      height: 30px;
    }
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

  @media screen and (min-width: ${tablet}) {
    height: 76px;
    width: 76px;

    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;
