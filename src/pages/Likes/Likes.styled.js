import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const FilterContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
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

  @media screen and (min-width: ${tablet}) {
    width: 200px;
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
  /* transition: 0.5s ease;

  &:hover div {
    transition: 0.5s ease;
    opacity: 1;
  } */

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
`;
