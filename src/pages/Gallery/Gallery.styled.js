import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const Container = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: var(--white);
  min-height: 450px;
`;

export const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

export const ButtonUpload = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 12px 0;
  margin: 0 0 10px 0;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  background-color: var(--primary-light);
  color: var(--primary);

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;

  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }

  @media screen and (min-width: ${tablet}) {
    width: 143px;
  }
`;

export const GalleryFilters = styled.div`
  background-color: var(--background-color);
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 20px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SelectContainer = styled.div``;

export const InputLabel = styled.label`
  display: block;
  font-size: 10px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
  margin-left: 5px;
`;

export const InputSelect = styled.select`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-light);
  }

  @media screen and (min-width: ${tablet}) {
    width: 333px;
  }
`;

export const RefreshContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 20px;

    & select {
      width: 274px;
    }

    & button {
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
  }
`;

export const RefreshButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: var(--white);
  color: var(--primary);
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: var(--primary-light);
  }

  &:active {
    background-color: var(--primary);
    color: var(--white);
  }

  @media screen and (min-width: ${tablet}) {
    width: 40px;
  }
`;

export const GalleryGrid = styled.div`
  @media screen and (min-width: ${tablet}) {
    margin-top: 20px;
  }
`;

export const Group = styled.div`
  @media screen and (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, auto));
    grid-gap: 20px;
    grid-template-areas:
      "left-top center-top center-right"
      "left-top center-middle center-middle"
      "left-bottom center-middle center-middle";

    margin-bottom: 20px;

    &:nth-child(even) {
      grid-template-areas:
        "center-right center-top left-top  "
        "center-middle center-middle left-top"
        "center-middle center-middle left-bottom";
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: 0.5s ease;
  border-radius: 20px;
  margin-bottom: 10px;

  &:hover div {
    transition: 0.5s ease;
    opacity: 1;
  }

  @media screen and (min-width: ${tablet}) {
    padding: 0;
    margin: 0;

    &:nth-child(1) {
      grid-area: left-top;
      /* width: 230px; */
      height: 310px;
    }
    &:nth-child(2) {
      grid-area: center-top;
      /* width: 230px; */
      height: 150px;
    }
    &:nth-child(3) {
      grid-area: center-right;
      /* width: 230px; */
      height: 150px;
    }
    &:nth-child(4) {
      grid-area: center-middle;
      /* width: 480px; */
      height: 310px;
    }
    &:nth-child(5) {
      grid-area: left-bottom;
      /* width: 230px; */
      height: 150px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Image = styled.img`
  border-radius: 20px;
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
  align-items: center;
  padding: 10px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  background-color: var(--overlay-hover);
`;

export const FavButton = styled.button`
  background-color: var(--white);
  color: var(--primary);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
