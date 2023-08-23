import { useState, useEffect } from "react";

import Menu from "src/components/Menu/Menu";
import VoteCard from "src/components/VoteCard/VoteCard";
import VoteHistory from "src/components/VoteHistory/VoteHistory";

import { getData, voteOnImage } from "src/utils/api";

import { Container } from "./Voting.styled";

const Voting = () => {
  const [image, setImage] = useState({});
  const [voteHistory, setVoteHistory] = useState([]);

  useEffect(() => {
    const fetchImageToVote = async () => {
      const res = await getData("images/search");
      setImage(res.data[0]);
    };

    fetchImageToVote();

    if (!localStorage.getItem("historyVote")) {
      localStorage.setItem("historyVote", "[]");
    } else {
      const savedVoteHistory = localStorage.getItem("historyVote");
      setVoteHistory(JSON.parse(savedVoteHistory));
    }
  }, []);

  const vote = async (value) => {
    const body = {
      image_id: image.id,
      value,
    };

    const voteResult = await voteOnImage("votes", body);

    const newVote = {
      id: voteResult.data.image_id,
      action: voteResult.data.value,
      time: getCurrentTime(),
    };

    console.log(newVote);

    setVoteHistory((voteHistory) => [newVote, ...voteHistory]);

    const storageItem = JSON.parse(localStorage.getItem("historyVote"));
    storageItem.push(newVote);
    localStorage.setItem("historyVote", JSON.stringify(storageItem));
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <Menu />
      <Container>
        <VoteCard image={image} vote={vote} />
        <VoteHistory history={voteHistory} />
      </Container>
    </>
  );
};

export default Voting;
