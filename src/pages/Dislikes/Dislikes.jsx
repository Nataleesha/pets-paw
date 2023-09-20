import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import ImageModal from "src/components/ImageModal/ImageModal";

import { getGridGroups } from "src/utils/gridDivision";

import { CardContainer } from "src/components/CardContainer.styled";
import { GridContainer, Group, ImageContainer, Image } from "./Dislikes.styled";

const Dislikes = ({ voteHistory }) => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [image, setImage] = useState(null);
  const [dislikes, setDislikes] = useState(null);

  useEffect(() => {
    setDislikes(
      voteHistory.filter((vote) => vote.action === "added to Dislikes")
    );
  }, [voteHistory]);

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
        <title>Dislikes</title>
      </Helmet>
      <div>
        <Menu />
        <CardContainer>
          <Breadcrumbs text="Dislikes" />
          <GridContainer>
            {!dislikes ? (
              <NoItemFound />
            ) : (
              getGridGroups(dislikes).map((group) => {
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
      </div>
    </>
  );
};

export default Dislikes;

Dislikes.propTypes = {
  voteHistory: PropTypes.array.isRequired,
};
