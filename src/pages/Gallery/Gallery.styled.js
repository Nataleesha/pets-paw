import { styled } from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: var(--white);
  min-height: 450px;
`;

export const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const GalleryFilters = styled.div`
  background-color: var(--background-color);
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
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
`;

export const RefreshContainer = styled.div``;

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
`;

export const GalleryGrid = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  transition: 0.5s ease;
  border-radius: 20px;
  margin-bottom: 10px;

  &:hover div {
    transition: 0.5s ease;
    opacity: 1;
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
