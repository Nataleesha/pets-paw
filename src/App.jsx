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

import { Container } from "./App.styled";

const App = () => {
  const [userID, setUserID] = useState("");
  const [voteHistory, setVoteHistory] = useState([]);

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
  }, []);

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
            <Route path="breeds" element={<Breeds />} />
            <Route path="breeds/:breedId" element={<BreedDetails />} />
            <Route path="gallery" element={<Gallery userID={userID} />} />
            <Route path="likes" element={<Likes />} />
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
