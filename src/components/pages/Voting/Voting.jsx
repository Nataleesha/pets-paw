import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Menu from "src/components/Menu/Menu";
import VoteCard from "src/components/VoteCard/VoteCard";
import VoteHistory from "src/components/VoteHistory/VoteHistory";

import { getData, voteOnImage, favoriteDelete } from "src/utils/api";
import { getCurrentTime } from "src/utils/currentTime";

import { Container } from "./Voting.styled";

const Voting = ({ userID }) => {
  const [image, setImage] = useState({});
  const [voteHistory, setVoteHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchImageToVote();

    if (!localStorage.getItem("historyVote")) {
      localStorage.setItem("historyVote", "[]");
    } else {
      const savedVoteHistory = localStorage.getItem("historyVote");
      setVoteHistory(JSON.parse(savedVoteHistory));
    }

    const getAllFavorites = async () => {
      const res = await getData(`favourites?sub_id=${userID}&order=DESC`);
      setFavorites(res.data);
    };

    getAllFavorites();
  }, [userID]);

  const fetchImageToVote = async () => {
    const res = await getData("images/search");
    setImage(res.data[0]);
  };

  const vote = async (value) => {
    const body = {
      image_id: image.id,
      sub_id: userID,
      value,
    };

    const voteResult = await voteOnImage("votes", body);

    const newVote = {
      id: voteResult.data.image_id,
      action:
        voteResult.data.value === 1 ? "added to Likes" : "added to Dislikes",
      time: getCurrentTime(),
      url: image.url,
    };

    setVoteHistory((voteHistory) => [newVote, ...voteHistory]);

    const storageItem = JSON.parse(localStorage.getItem("historyVote"));
    storageItem.push(newVote);
    localStorage.setItem("historyVote", JSON.stringify(storageItem));

    setImage({});

    fetchImageToVote();
  };

  const setFavorite = async (image) => {
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
  };

  const removeFavorite = async () => {
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
  };

  return (
    <>
      <Menu />
      <Container>
        <VoteCard
          image={image}
          vote={vote}
          favorites={favorites}
          setFavorite={setFavorite}
          removeFav={removeFavorite}
        />
        <VoteHistory history={voteHistory} />
      </Container>
    </>
  );
};

export default Voting;

Voting.propTypes = {
  userID: PropTypes.string.isRequired,
};
