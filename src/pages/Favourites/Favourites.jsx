import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { getData } from "src/utils/api";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import NoItemFound from "src/components/NoItemFound/NoItemFound";
import ImageModal from "src/components/ImageModal/ImageModal";

import { getGridGroups } from "src/utils/gridDivision";

import { CardContainer } from "src/components/CardContainer.styled";
import {
  GridContainer,
  Group,
  ImageContainer,
  Image,
} from "./Favourites.styled";

const Favourites = ({ userID, voteHistory, setVoteHistory }) => {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    const getFavourites = async () => {
      const res = await getData(
        `favourites?limit=20&sub_id=${userID}&order=DESC`
      );
      setFavourites(res.data);
    };

    getFavourites();
  }, [userID]);

  console.log(favourites);

  return (
    <>
      <Helmet>
        <title>Favourites</title>
      </Helmet>
      <div>
        <Menu />
        <CardContainer>
          <Breadcrumbs text="Favourites" />
          <GridContainer>
            {!favourites ? (
              <NoItemFound />
            ) : (
              getGridGroups(favourites).map((group) => {
                return (
                  <Group key={nanoid()}>
                    {group.map((image) => {
                      return (
                        <ImageContainer key={image.id}>
                          <Image src={image.image.url} alt="cat" />
                        </ImageContainer>
                      );
                    })}
                  </Group>
                );
              })
            )}
          </GridContainer>
        </CardContainer>
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
