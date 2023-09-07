import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Menu from "src/components/Menu/Menu";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import { getData } from "src/utils/api";

import { CardContainer } from "src/components/CardContainer.styled";

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
      <CardContainer>
        <Breadcrumbs text="Likes" />
        <p>Likes</p>
      </CardContainer>
    </>
  );
};

export default Likes;
