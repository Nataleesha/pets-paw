import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "src/index.css";

export const Container = styled.div`
  padding: 20px;
  background-color: var(--white);
  border-radius: 20px;
  min-height: 450px;
`;

export const BreadcrumbsContainer = styled.div`
  display: flex;
  gap: 10px;
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
`;

export const SwiperItem = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;

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
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Temper = styled.div`
  margin-bottom: 10px;
`;

export const Params = styled.div``;

export const Bold = styled.p`
  color: var(--text-dark);
  font-weight: 500;
`;

export const DescrHolder = styled.div`
  margin-bottom: 10px;
`;
