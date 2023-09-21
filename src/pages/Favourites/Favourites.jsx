import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import ImageModal from "src/components/ImageModal/ImageModal";
import Pagination from "src/components/Pagination/Pagination";
import Loader from "src/components/Loader/Loader";

import { getGridGroups } from "src/utils/gridDivision";

import { CardContainer } from "src/components/CardContainer.styled";
import {
  FilterContainer,
  Select,
  GridContainer,
  Group,
  ImageContainer,
  Image,
} from "./Favourites.styled";

const Favourites = ({ userID, voteHistory, setVoteHistory }) => {
  const [favourites, setFavourites] = useState([]);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [imageModal, setImageModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limitPerPage, setLimitPerPage] = useState(5);
  const [noMoreResults, setNoMoreResults] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getFavourites = async () => {
      const res = await getData(
        `favourites?limit=${limitPerPage}&page=${page}&sub_id=${userID}&order=DESC`
      );
      setFavourites(res.data);
      setLoading(false);

      if (res.data.length < limitPerPage) {
        setNoMoreResults(true);
      }
    };

    getFavourites();
  }, [limitPerPage, page, userID]);

  if (openImageModal) {
    document.body.classList.add("no-overflow");
  } else {
    document.body.classList.remove("no-overflow");
  }

  const openModal = (e) => {
    setOpenImageModal(true);
    setImageModal(e.target.src);
  };

  const closeModal = () => {
    setOpenImageModal(false);
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePrevPage = () => {
    setPage((page) => page - 1);
    setNoMoreResults(false);
  };

  const handleLimitSelect = (e) => {
    setLimitPerPage(e.target.value);
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Favourites</title>
      </Helmet>
      <div>
        <Menu />
        <CardContainer>
          <FilterContainer>
            <Breadcrumbs text="Favourites" />
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
            {loading && <Loader />}
            {!loading && !favourites.length && <NoItemFound />}
            {!loading &&
              favourites.length &&
              getGridGroups(favourites).map((group) => {
                return (
                  <Group key={nanoid()}>
                    {group.map((image) => {
                      return (
                        <ImageContainer key={image.id} onClick={openModal}>
                          <Image src={image.image.url} alt="cat" />
                        </ImageContainer>
                      );
                    })}
                  </Group>
                );
              })}
          </GridContainer>
          <Pagination
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            page={page}
            noMoreResults={noMoreResults}
          />
        </CardContainer>
        {openImageModal ? (
          <ImageModal closeModal={closeModal} image={imageModal} />
        ) : null}
      </div>
    </>
  );
};

export default Favourites;

Favourites.propTypes = {
  userID: PropTypes.string.isRequired,
  voteHistory: PropTypes.array.isRequired,
  setVoteHistory: PropTypes.func.isRequired,
};
