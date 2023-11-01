import { Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import { nanoid } from "nanoid";
import { HelmetProvider } from "react-helmet-async";

const SharedLayout = lazy(() =>
  import("/src/components/SharedLayout/SharedLayout.jsx")
);
const Home = lazy(() => import("/src/pages/Home/Home.jsx"));
const Voting = lazy(() => import("/src/pages/Voting/Voting.jsx"));
const Breeds = lazy(() => import("/src/pages/Breeds/Breeds.jsx"));
const BreedDetails = lazy(() =>
  import("/src/pages/BreedDetails/BreedDetails.jsx")
);
const Gallery = lazy(() => import("/src/pages/Gallery/Gallery.jsx"));
const Likes = lazy(() => import("/src/pages/Likes/Likes.jsx"));
const Dislikes = lazy(() => import("/src/pages/Dislikes/Dislikes.jsx"));
const Favourites = lazy(() => import("/src/pages/Favourites/Favourites.jsx"));
const SearchByName = lazy(() =>
  import("/src/pages/SearchByName/SearchByName.jsx")
);
const Loader = lazy(() => import("/src/components/Loader/Loader.jsx"));

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
            <Route
              path="dislikes"
              element={<Dislikes voteHistory={voteHistory} />}
            />
            <Route
              path="favourites"
              element={!userID ? <Loader /> : <Favourites userID={userID} />}
            />
            <Route path="search" element={<SearchByName />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Container>
    </HelmetProvider>
  );
};

export default App;
