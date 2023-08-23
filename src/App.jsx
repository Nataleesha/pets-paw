import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Home from "./components/pages/Home/Home";
import Voting from "./components/pages/Voting/Voting";

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
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default App;
