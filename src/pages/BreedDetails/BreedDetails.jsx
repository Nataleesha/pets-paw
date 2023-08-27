import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "swiper/modules";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import Loader from "src/components/Loader/Loader";
import { getData } from "src/utils/api";

import {
  Container,
  BreadcrumbsContainer,
  BreedId,
  SwiperContainer,
  SwiperItem,
  Image,
  Description,
  Title,
  Subtitle,
  InfoHolder,
  Temper,
  Params,
  Bold,
  DescrHolder,
} from "./BreedDetails.styled";

const BreedDetails = () => {
  const { breedId } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getBreedInfo = async () => {
      const res = await getData(`images/search?limit=5&breed_ids=${breedId}`);
      setInfo(res.data);
    };

    getBreedInfo();
  }, [breedId]);

  return (
    <>
      <Menu />
      <Container>
        <BreadcrumbsContainer>
          <Breadcrumbs text="Breeds" />
          <BreedId>{breedId}</BreedId>
        </BreadcrumbsContainer>
        {!info.length ? (
          <Loader />
        ) : (
          <>
            <div
              style={{
                position: "relative",
                marginTop: "10px",
                marginBottom: "50px",
              }}
            >
              <SwiperContainer
                className="swiper"
                pagination={{
                  el: ".swiper-custom-pagination",
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {!info.length ? (
                  <Loader />
                ) : (
                  info.map((obj) => {
                    return (
                      <SwiperItem className="swiper-slide" key={obj.id}>
                        <Image
                          src={obj.url}
                          alt={obj.breeds[0].name}
                          width="100%"
                          height="170px"
                        />
                      </SwiperItem>
                    );
                  })
                )}
              </SwiperContainer>
              <div className="swiper-custom-pagination" />
            </div>
            <Description>
              <Title>{info[0].breeds[0].name}</Title>
              <Subtitle>{info[0].breeds[0]["alt_names"]}</Subtitle>
              <InfoHolder>
                <Temper>
                  <Bold>Temperament: </Bold>
                  <p>{info[0].breeds[0].temperament}</p>
                </Temper>
                <Params>
                  <DescrHolder>
                    <Bold>Origin: </Bold>
                    <p>{info[0].breeds[0].origin}</p>
                  </DescrHolder>
                  <DescrHolder>
                    <Bold>Weight: </Bold>
                    <p>{info[0].breeds[0].weight.metric} kgs</p>
                  </DescrHolder>
                  <DescrHolder>
                    <Bold>Life span: </Bold>
                    <p>{info[0].breeds[0]["life_span"]} years</p>
                  </DescrHolder>
                </Params>
              </InfoHolder>
            </Description>
          </>
        )}
      </Container>
    </>
  );
};

export default BreedDetails;
