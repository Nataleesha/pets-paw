import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import ImageModal from "src/components/ImageModal/ImageModal";

import { getGridGroups } from "src/utils/gridDivision";

import { CardContainer } from "src/components/CardContainer.styled";
import { GridContainer, Group, ImageContainer, Image } from "./Likes.styled";

const Likes = ({ voteHistory }) => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [image, setImage] = useState(null);

  const likes = voteHistory.filter((vote) => vote.action === "added to Likes");

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
        <title>Likes</title>
      </Helmet>
      <Menu />
      <CardContainer>
        <Breadcrumbs text="Likes" />
        <GridContainer>
          {!voteHistory.length ? (
            <NoItemFound />
          ) : (
            getGridGroups(likes).map((group) => {
              return (
                <Group key={nanoid()}>
                  {group.map((image) => {
                    return (
                      <ImageContainer key={image.id} onClick={openModal}>
                        <Image src={image.url} alt="cat" />
                      </ImageContainer>
                    );
                  })}
                </Group>
              );
            })
          )}
        </GridContainer>
      </CardContainer>
      {openImageModal ? (
        <ImageModal closeModal={closeModal} image={image} />
      ) : null}
    </>
  );
};

export default Likes;

Likes.propTypes = {
  voteHistory: PropTypes.array.isRequired,
};
