import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import ImageModal from "src/components/ImageModal/ImageModal";
import Pagination from "src/components/Pagination/Pagination";

import { getGridGroups } from "src/utils/gridDivision";

import { CardContainer } from "src/components/CardContainer.styled";
import {
  FilterContainer,
  Select,
  GridContainer,
  Group,
  ImageContainer,
  Image,
} from "./Dislikes.styled";

const Dislikes = ({ voteHistory }) => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [image, setImage] = useState(null);
  const [dislikes, setDislikes] = useState([]);
  const [page, setPage] = useState(0);
  const [limitPerPage, setLimitPerPage] = useState(5);
  const [noMoreResults, setNoMoreResults] = useState(false);

  useEffect(() => {
    setDislikes(
      voteHistory.filter((vote) => vote.action === "added to Dislikes")
    );
  }, [voteHistory]);

  useEffect(() => {
    if (dislikes.length <= limitPerPage * (page + 1)) {
      setNoMoreResults(true);
    } else {
      setNoMoreResults(false);
    }
  }, [dislikes, limitPerPage, page]);

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

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePrevPage = () => {
    setPage((page) => page - 1);
  };

  const handleLimitSelect = (e) => {
    setLimitPerPage(e.target.value);
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Dislikes</title>
      </Helmet>
      <div>
        <Menu />
        <CardContainer>
          <FilterContainer>
            <Breadcrumbs text="Dislikes" />
            <Select
              name="limit"
              value={limitPerPage}
              onChange={handleLimitSelect}
            >
              <option value="5">Limit: 5</option>
              <option value="10">Limit: 10</option>
              <option value="15">Limit: 15</option>
              <option value="20">Limit: 20</option>
            </Select>
          </FilterContainer>
          <GridContainer>
            {!dislikes.length ? (
              <NoItemFound />
            ) : (
              getGridGroups(
                dislikes.slice(limitPerPage * page, limitPerPage * (page + 1))
              ).map((group) => {
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
          <Pagination
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            page={page}
            noMoreResults={noMoreResults}
          />
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
