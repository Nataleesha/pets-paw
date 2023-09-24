import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const Select = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 8px 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: var(--lighter-background);
  color: var(--text-light);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: var(--switch);
  }

  @media screen and (min-width: ${tablet}) {
    width: 290px;
  }
`;

export const FilterContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10px;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;

  @media screen and (min-width: ${tablet}) {
    justify-content: right;

    & select {
      width: 130px;
    }
  }
`;

export const AbcSort = styled.button`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 9px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: var(--lighter-background);
  color: var(--text-light);

  svg {
    pointer-events: none;
  }

  &:hover {
    color: var(--primary);
    border-color: var(--switch);
  }

  &.active {
    color: var(--primary);
  }
`;

export const GridContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    margin-top: 10px;
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

  &:hover div {
    transition: 0.5s ease;
    opacity: 1;
  }

  @media screen and (min-width: ${tablet}) {
    padding: 0;

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
  background-color: var(--background-light-dark);
  color: var(--primary);
  border-radius: 10px;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 0;
`;
