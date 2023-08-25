import { useState, useEffect } from "react";

import Menu from "src/components/Menu/Menu";
import { getData } from "src/utils/api";

import { Container } from "./Likes.styled";

const Likes = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("historyVote"));
    setLikes(storageItem);
    console.log(storageItem);
  }, []);

  return (
    <>
      <Menu />
      <Container></Container>
    </>
  );
};

export default Likes;
