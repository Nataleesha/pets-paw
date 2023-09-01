import { styled } from "styled-components";
import { tablet } from "src/constants/breakpoints";

export const NameResults = styled.p`
  margin-bottom: 10px;
`;

export const Name = styled.span`
  color: var(---text-dark);
  font-weight: 500;
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
  background-color: var(--white);
  color: var(--primary);
  border-radius: 10px;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 0;
`;
