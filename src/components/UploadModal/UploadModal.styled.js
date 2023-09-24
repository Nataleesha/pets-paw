import { styled } from "styled-components";
import { tablet, desktop } from "src/constants/breakpoints";

export const Container = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  z-index: 3;
  opacity: 1;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  background-color: rgba(29, 29, 29, 0.6);

  @media screen and (min-width: ${tablet}) {
    height: calc(100vh - 40px);
    padding: 20px;
  }

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    justify-content: right;
  }
`;

export const InnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: var(--modal-bg);

  @media screen and (min-width: ${tablet}) {
    width: 728px;
    height: calc(100vh - 80px);
    min-height: 500px;
    border-radius: 20px;
    overflow: scroll;
  }

  @media screen and (min-width: ${desktop}) {
    position: absolute;
    top: 20px;
    left: 45%;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  margin: 0 0 20px 0;
  background-color: var(--lighter-background);
  color: var(--primary);
  transition: all 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    background-color: var(--primary-light);
  }

  &:active {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  color: var(--text-dark);

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
  }
`;

export const Notice = styled.p`
  margin-bottom: 20px;
  color: var(--text-light);
  text-align: center;
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
`;

export const Link = styled.a`
  color: var(--primary);
`;

export const Uploader = styled.div`
  height: 200px;
  margin-bottom: 20px;
  /* background-image: url("src/assets/images/blank.svg"); */
  background-color: var(--light-background);
  color: var(--lighter-background);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  border-radius: 20px;
  border: 2px dashed var(--primary);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &.error {
    background-color: var(--primary-light);
  }

  @media screen and (min-width: ${tablet}) {
    height: 300px;
    flex-direction: row;
    gap: 6px;
  }
`;

export const Bg = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Span = styled.span`
  color: var(--text-dark);
`;

export const ImagePlaceholder = styled.div`
  position: absolute;
  width: 295px;
  height: 150px;

  @media screen and (min-width: ${tablet}) {
    width: 630px;
    height: 270px;
  }
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: uppercase;
  background-color: var(--primary);
  color: var(--white);
  border: transparent;
  border-radius: 10px;

  &:hover {
    background-color: var(--primary-light);
    color: var(--primary);
  }

  @media screen and (min-width: ${tablet}) {
    width: 172px;
    text-align: center;
    margin: 0 auto 20px;
  }
`;

export const StatusMessage = styled.div`
  width: calc(100% - 40px);
  height: 60px;
  background-color: var(--lighter-background);
  justify-content: left;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  border-radius: 10px;
`;

export const StatusButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: default;
`;
