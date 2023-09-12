import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { tablet, desktop } from "src/constants/breakpoints";
import "swiper/css";
import "swiper/css/pagination";
import "src/index.css";

export const BreadcrumbsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: ${tablet}) {
    justify-content: left;
  }
`;

export const BreedId = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 2px;
  cursor: default;

  @media screen and (min-width: ${tablet}) {
    width: 90px;
  }
`;

export const ImagesHolder = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 170px;
  border-radius: 20px;

  --swiper-theme-color: var(--primary);
  --swiper-pagination-background-color: var(--white);
  --swiper-pagination-bullet-inactive-color: var(--primary-light);
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-width: 10px;
  --swiper-pagination-bullet-height: 10px;
  --swiper-pagination-bullet-horizontal-gap: 3px;

  @media screen and (min-width: ${tablet}) {
    height: 390px;
  }
`;

export const SwiperItem = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;

// workaround for the bug
// https://github.com/nolimits4web/swiper/issues/4413
SwiperItem.displayName = "SwiperSlide";

export const Image = styled.img`
  border-radius: 20px;
  object-fit: cover;
`;

export const Description = styled.div`
  border: 2px solid var(--primary-light);
  border-radius: 20px;
  padding: 14px 20px;
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${desktop}) {
    padding-top: 30px;
  }
`;

export const Title = styled.h3`
  position: absolute;
  display: inline-block;
  color: var(--text-dark);
  font-size: 20px;
  font-weight: 500;
  top: -16px;
  right: 50%;
  transform: translateX(50%);
  background-color: var(--white);
  padding: 0 20px;
  white-space: nowrap;

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    top: -26px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 50px;
    justify-content: center;
  }
`;

export const Temper = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: ${tablet}) {
    width: 290px;
  }
`;

export const Params = styled.div`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    width: 290px;
  }
`;

export const Bold = styled.p`
  color: var(--text-dark);
  font-weight: 500;
`;

export const DescrHolder = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
