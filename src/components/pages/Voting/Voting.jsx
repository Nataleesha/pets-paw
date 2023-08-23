import { useState, useEffect } from "react";

import Menu from "src/components/Menu/Menu";
import VoteCard from "src/components/VoteCard/VoteCard";
import VoteHistory from "src/components/VoteHistory/VoteHistory";

import { getData } from "src/utils/fetchData";

import { Container } from "./Voting.styled";

const Voting = () => {
  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchImageToVote = async () => {
      const res = await getData("images/search");
      setImage(res.data[0]);
      console.log(res.data[0]);
    };

    fetchImageToVote();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <VoteCard image={image} />
        <VoteHistory />
      </Container>
    </>
  );
};

export default Voting;
