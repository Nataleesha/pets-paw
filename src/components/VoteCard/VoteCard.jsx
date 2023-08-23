import PropTypes from "prop-types";
import Loader from "src/components/Loader/Loader";

import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";

import {
  Container,
  ImageCard,
  Image,
  ButtonList,
  ButtonListItem,
  ButtonLike,
  ButtonFav,
  ButtonDislike,
} from "./VoteCard.styled";

const VoteCard = ({ image, vote, favorites, setFavorite, removeFav }) => {
  return (
    <Container>
      <Breadcrumbs text="Voting" />
      <ImageCard>
        {!image.url ? (
          <Loader />
        ) : (
          <Image
            src={image.url}
            alt="cat"
            loading="lazy"
            width="100%"
            height="auto"
          />
        )}
        <ButtonList>
          <ButtonListItem>
            <ButtonLike type="button" onClick={() => vote(1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
                  fill="currentColor"
                />
              </svg>
            </ButtonLike>
          </ButtonListItem>
          <ButtonListItem>
            {!favorites.some((favorite) => favorite.image_id === image.id) ? (
              <ButtonFav type="button" onClick={setFavorite}>
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
              </ButtonFav>
            ) : (
              <ButtonFav type="button" onClick={removeFav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z"
                    fill="white"
                  />
                </svg>
              </ButtonFav>
            )}
          </ButtonListItem>
          <ButtonListItem>
            <ButtonDislike type="button" onClick={() => vote(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_1_1561)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1561">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ButtonDislike>
          </ButtonListItem>
        </ButtonList>
      </ImageCard>
    </Container>
  );
};

export default VoteCard;

VoteCard.propTypes = {
  image: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
  removeFav: PropTypes.func.isRequired,
};
