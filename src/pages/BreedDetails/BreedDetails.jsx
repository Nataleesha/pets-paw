import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Helmet } from "react-helmet-async";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import Loader from "src/components/Loader/Loader";
import ImageModal from "src/components/ImageModal/ImageModal";
import { getData } from "src/utils/api";

import { CardContainer } from "src/components/CardContainer.styled";
import {
  BreadcrumbsContainer,
  BreedId,
  ImagesHolder,
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
  const [openImageModal, setOpenImageModal] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getBreedInfo = async () => {
      const res = await getData(`images/search?limit=5&breed_ids=${breedId}`);
      setInfo(res.data);
    };

    getBreedInfo();
  }, [breedId]);

  if (openImageModal) {
    document.body.classList.add("no-overflow");
  } else {
    document.body.classList.remove("no-overflow");
  }

  const openModal = (e) => {
    setOpenImageModal(true);
    setImage(e.target.src);
  };

  const closeModal = () => {
    setOpenImageModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Menu />
      <CardContainer>
        <BreadcrumbsContainer>
          <Breadcrumbs text="Breeds" />
          <BreedId>{breedId}</BreedId>
        </BreadcrumbsContainer>
        {!info.length ? (
          <Loader />
        ) : (
          <>
            <ImagesHolder
              style={{
                position: "relative",
                marginTop: "10px",
                marginBottom: "50px",
              }}
            >
              <SwiperContainer
                className="swiper"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  el: ".swiper-custom-pagination",
                  clickable: true,
                }}
                keyboard
                modules={[Navigation, Pagination, Keyboard]}
              >
                {!info.length ? (
                  <Loader />
                ) : (
                  info.map((obj) => {
                    return (
                      <SwiperItem
                        className="swiper-slide"
                        key={obj.id}
                        onClick={openModal}
                      >
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
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </SwiperContainer>
              <div className="swiper-custom-pagination" />
            </ImagesHolder>
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
      </CardContainer>
      {openImageModal ? (
        <ImageModal closeModal={closeModal} image={image} />
      ) : null}
    </>
  );
};

export default BreedDetails;
