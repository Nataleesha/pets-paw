import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Helmet } from "react-helmet-async";

import { getData, voteOnImage, favoriteDelete } from "src/utils/api";
import { getCurrentTime } from "src/utils/currentTime";
import { addFavToLocalStorage } from "src/utils/storage";
import { getGridGroups } from "src/utils/gridDivision";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import Loader from "src/components/Loader/Loader";
import UploadModal from "src/components/UploadModal/UploadModal";
import Pagination from "src/components/Pagination/Pagination";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import ImageModal from "src/components/ImageModal/ImageModal";

import { CardContainer } from "src/components/CardContainer.styled";
import {
  BreadcrumbsContainer,
  ButtonUpload,
  GalleryFilters,
  SelectContainer,
  InputLabel,
  InputSelect,
  RefreshContainer,
  RefreshButton,
  GalleryGrid,
  Group,
  Image,
  ImageContainer,
  ImageOverlay,
  FavButton,
} from "./Gallery.styled";

const Gallery = ({ userID, breeds, setVoteHistory }) => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [order, setOrder] = useState("ASC");
  const [type, setType] = useState("jpg,png");
  const [breedSelected, setBreedSelected] = useState("");
  const [limitSelected, setLimitSelected] = useState(5);
  const [page, setPage] = useState(0);
  const [noMoreResults, setNoMoreResults] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [openImageModal, setOpenImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(`images/search`, {
        limit: 5,
        order: "ASC",
        mime_types: "jpg,png",
        has_breeds: 1,
      });
      setData(res.data);
    };

    const fetchFavs = async () => {
      const res = await getData(`favourites?sub_id=${userID}`);
      setFavorites(res.data);
    };

    fetchData();
    fetchFavs();
  }, [userID]);

  if (openModal) {
    document.body.classList.add("no-overflow");
  } else {
    document.body.classList.remove("no-overflow");
  }

  const toggleModal = () => {
    setOpenModal((openModal) => !openModal);
  };

  const addFavorite = async (image) => {
    const body = {
      image_id: image.id,
      sub_id: userID,
    };

    const favoriteResult = await voteOnImage("favourites", body);

    const newFav = {
      id: favoriteResult.data.id,
      image_id: image.id,
      sub_id: userID,
      url: image.url,
    };

    setFavorites([...favorites, newFav]);

    const newVote = {
      id: image.id,
      action: "added to Favourites",
      time: getCurrentTime(),
    };

    setVoteHistory((voteHistory) => [newVote, ...voteHistory]);

    addFavToLocalStorage(newVote);
  };

  const removeFavorite = async (image) => {
    const favToRemove = favorites.find((fav) => fav.image_id === image.id);

    await favoriteDelete(`favourites/${favToRemove.id}`);

    const filteredFavorites = favorites.filter(
      (fav) => fav.id !== favToRemove.id
    );

    setFavorites(filteredFavorites);

    const newVote = {
      id: image.id,
      action: "removed from Favourites",
      time: getCurrentTime(),
    };

    setVoteHistory((voteHistory) => [newVote, ...voteHistory]);

    addFavToLocalStorage(newVote);
  };

  const handleSelect = (e) => {
    switch (e.target.name) {
      case "order":
        setOrder(e.target.value);
        setPage(0);
        break;
      case "type":
        setType(e.target.value);
        setPage(0);
        break;
      case "breed":
        setBreedSelected(e.target.value);
        setPage(0);
        break;
      case "limit":
        setLimitSelected(e.target.value);
        setPage(0);
        break;
      default:
        console.log("error");
    }
  };

  const fetchRefresh = async () => {
    setData([]);
    setNoMoreResults(false);
    const res = await getData(
      `images/search?order=${order}&mime_types=${type}&breed_ids=${breedSelected}&limit=${limitSelected}&page=${page}`
    );
    if (res.data.length < parseInt(limitSelected)) {
      setNoMoreResults(true);
    }
    window.scrollBy({
      top: 0,
      behavior: "instant",
    });
    setData(res.data);
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
    fetchRefresh();
  };

  const handlePrevPage = () => {
    setPage((page) => page - 1);
    fetchRefresh();
  };

  const handleOpenImageModal = (url) => {
    setCurrentImage(url);
    setOpenImageModal(true);
  };

  const handleCloseImageModal = () => {
    setOpenImageModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <Menu />
      <CardContainer>
        <BreadcrumbsContainer>
          <Breadcrumbs text="Gallery" />
          <ButtonUpload type="button" onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
                fill="currentColor"
              />
            </svg>
            Upload
          </ButtonUpload>
        </BreadcrumbsContainer>
        <GalleryFilters>
          <SelectContainer>
            <InputLabel htmlFor="order">Order</InputLabel>
            <InputSelect id="order" name="order" onChange={handleSelect}>
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
              <option value="RANDOM">Random</option>
            </InputSelect>
            <InputLabel htmlFor="type">Type</InputLabel>
            <InputSelect
              id="type"
              name="type"
              defaultValue="jpg,png"
              onChange={handleSelect}
            >
              <option value="jpg,gif,png">All</option>
              <option value="jpg,png">Static</option>
              <option value="gif">Animated</option>
            </InputSelect>
          </SelectContainer>
          <SelectContainer>
            <InputLabel htmlFor="breed">Breed</InputLabel>
            <InputSelect id="breed" name="breed" onChange={handleSelect}>
              <option value="">All</option>
              {breeds &&
                breeds.map((breed) => {
                  return (
                    <option key={breed.id} value={breed.id}>
                      {breed.name}
                    </option>
                  );
                })}
            </InputSelect>
            <RefreshContainer>
              <div>
                <InputLabel htmlFor="limit">Limit</InputLabel>
                <InputSelect id="limit" name="limit" onChange={handleSelect}>
                  <option value="5">5 items per page</option>
                  <option value="10">10 items per page</option>
                  <option value="15">15 items per page</option>
                  <option value="20">20 items per page</option>
                </InputSelect>
              </div>
              <RefreshButton type="button" onClick={fetchRefresh}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.48189 2.49989L7.93396 0.953004L8.88633 0L12.0577 3.16928L8.88634 6.33873L7.93395 5.38576L9.47232 3.84832C5.51244 3.99813 2.3473 7.25498 2.3473 11.2478C2.3473 15.3361 5.66547 18.6527 9.75744 18.6527C13.8494 18.6527 17.1676 15.3361 17.1676 11.2478V10.5742H18.5149V11.2478C18.5149 16.081 14.5927 20 9.75744 20C4.92221 20 1 16.081 1 11.2478C1 6.50682 4.77407 2.64542 9.48189 2.49989Z"
                    fill="currentColor"
                  />
                </svg>
              </RefreshButton>
            </RefreshContainer>
          </SelectContainer>
        </GalleryFilters>

        <GalleryGrid>
          {!data.length && noMoreResults && (
            <NoItemFound style={{ marginBottom: "100px" }} />
          )}
          {!data.length && !noMoreResults && <Loader />}
          {getGridGroups(data).map((group) => {
            return (
              <Group key={nanoid()}>
                {group.map((item) => {
                  return (
                    <ImageContainer
                      key={item.id}
                      onClick={() => handleOpenImageModal(item.url)}
                    >
                      <Image src={item.url} alt="cat" />
                      <ImageOverlay>
                        {!favorites.some(
                          (favorite) => favorite.image_id === item.id
                        ) ? (
                          <FavButton
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              addFavorite(item);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.38071 2.33333C3.14541 2.33333 1.33333 4.14541 1.33333 6.38071C1.33333 7.45414 1.75975 8.48361 2.51878 9.24264L10 16.7239L17.4812 9.24264C18.2402 8.48361 18.6667 7.45414 18.6667 6.38071C18.6667 4.14541 16.8546 2.33333 14.6193 2.33333C13.5459 2.33333 12.5164 2.75975 11.7574 3.51878L10.4714 4.80474C10.2111 5.06509 9.78895 5.06509 9.5286 4.80474L8.24264 3.51878C7.48361 2.75975 6.45414 2.33333 5.38071 2.33333ZM0 6.38071C0 3.40903 2.40903 1 5.38071 1C6.80777 1 8.17637 1.5669 9.18545 2.57597L10 3.39052L10.8146 2.57597C11.8236 1.56689 13.1922 1 14.6193 1C17.591 1 20 3.40903 20 6.38071C20 7.80777 19.4331 9.17637 18.424 10.1854L10.4714 18.1381C10.2111 18.3984 9.78895 18.3984 9.5286 18.1381L1.57597 10.1854C0.566893 9.17637 0 7.80777 0 6.38071Z"
                                fill="currentColor"
                              />
                            </svg>
                          </FavButton>
                        ) : (
                          <FavButton
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFavorite(item);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M5.38071 1C2.40903 1 0 3.40903 0 6.38071C0 7.80777 0.566893 9.17637 1.57597 10.1854L9.5286 18.1381C9.78895 18.3984 10.2111 18.3984 10.4714 18.1381L18.424 10.1854C19.4331 9.17637 20 7.80777 20 6.38071C20 3.40903 17.591 1 14.6193 1C13.1922 1 11.8236 1.56689 10.8146 2.57597L10 3.39052L9.18545 2.57597C8.17637 1.5669 6.80777 1 5.38071 1Z"
                                fill="currentColor"
                              />
                            </svg>
                          </FavButton>
                        )}
                      </ImageOverlay>
                    </ImageContainer>
                  );
                })}
              </Group>
            );
          })}
        </GalleryGrid>
        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
          noMoreResults={noMoreResults}
        />
      </CardContainer>
      {openModal ? <UploadModal toggleModal={toggleModal} /> : null}
      {openImageModal ? (
        <ImageModal closeModal={handleCloseImageModal} image={currentImage} />
      ) : null}
    </>
  );
};

export default Gallery;

Gallery.propTypes = {
  userID: PropTypes.string.isRequired,
  breeds: PropTypes.array.isRequired,
  setVoteHistory: PropTypes.func.isRequired,
};
