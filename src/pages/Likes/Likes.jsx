import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Menu from "src/components/Menu/Menu";
import { getData } from "src/utils/api";

import { Container } from "./Likes.styled";

const Likes = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("historyVote"));
    setLikes(storageItem);
  }, []);

  return (
    <>
      <Helmet>
        <title>Likes</title>
      </Helmet>
      <Menu />
      <Container>
        <p>Likes</p>
      </Container>
    </>
  );
};

export default Likes;
