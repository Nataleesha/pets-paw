import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Home from "./components/pages/Home/Home";
import Voting from "./components/pages/Voting/Voting";
import Breeds from "./components/pages/Breeds/Breeds";
import BreedDetails from "./components/pages/BreedDetails/BreedDetails";
import Gallery from "./components/pages/Gallery/Gallery";
import Likes from "./components/pages/Likes/Likes";
import Dislikes from "./components/pages/Dislikes/Dislikes";
import Favourites from "./components/pages/Favourites/Favourites";
import SearchByName from "./components/pages/SearchByName/SearchByName";

import { Container } from "./App.styled";

const App = () => {
  const [userID, setUserID] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      localStorage.setItem("user_id", JSON.stringify(nanoid()));
    } else {
      const userId = localStorage.getItem("user_id");
      setUserID(JSON.parse(userId));
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="voting" element={<Voting userID={userID} />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="breeds/:breedId" element={<BreedDetails />} />
        <Route path="gallery" element={<Gallery userID={userID} />} />
        <Route path="likes" element={<Likes />} />
        <Route path="dislikes" element={<Dislikes />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="search-by-name" element={<SearchByName />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default App;
