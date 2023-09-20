import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { HelmetProvider } from "react-helmet-async";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import Voting from "./pages/Voting/Voting";
import Breeds from "./pages/Breeds/Breeds";
import BreedDetails from "./pages/BreedDetails/BreedDetails";
import Gallery from "./pages/Gallery/Gallery";
import Likes from "./pages/Likes/Likes";
import Dislikes from "./pages/Dislikes/Dislikes";
import Favourites from "./pages/Favourites/Favourites";
import SearchByName from "./pages/SearchByName/SearchByName";
import Loader from "./components/Loader/Loader";

import { getData } from "src/utils/api";

import { Container } from "./App.styled";

const App = () => {
  const [userID, setUserID] = useState("");
  const [voteHistory, setVoteHistory] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      localStorage.setItem("user_id", JSON.stringify(nanoid()));
    } else {
      const userId = localStorage.getItem("user_id");
      setUserID(JSON.parse(userId));
    }

    if (!localStorage.getItem("historyVote")) {
      localStorage.setItem("historyVote", "[]");
    } else {
      const savedVoteHistory = localStorage.getItem("historyVote");
      setVoteHistory(JSON.parse(savedVoteHistory));
    }

    getBreedsList();
  }, []);

  const getBreedsList = async () => {
    const res = await getData("breeds");

    const breedsInfo = res.data.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
      };
    });

    setBreeds(breedsInfo);
  };

  return (
    <HelmetProvider>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="voting"
              element={
                !userID ? (
                  <Loader />
                ) : (
                  <Voting
                    userID={userID}
                    voteHistory={voteHistory}
                    setVoteHistory={setVoteHistory}
                  />
                )
              }
            />
            <Route
              path="breeds"
              element={!breeds.length ? <Loader /> : <Breeds breeds={breeds} />}
            />
            <Route path="breeds/:breedId" element={<BreedDetails />} />
            <Route
              path="gallery"
              element={
                !userID || !breeds.length ? (
                  <Loader />
                ) : (
                  <Gallery
                    userID={userID}
                    breeds={breeds}
                    setVoteHistory={setVoteHistory}
                  />
                )
              }
            />
            <Route path="likes" element={<Likes voteHistory={voteHistory} />} />
            <Route path="dislikes" element={<Dislikes />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="search" element={<SearchByName />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </HelmetProvider>
  );
};

export default App;
