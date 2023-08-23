import { useState, useEffect } from "react";

import Menu from "src/components/Menu/Menu";
import VoteCard from "src/components/VoteCard/VoteCard";

import { getData } from "src/utils/fetchData";

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
      <div>
        <VoteCard image={image} />
      </div>
    </>
  );
};

export default Voting;
