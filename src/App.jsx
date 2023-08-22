import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Voting from "./components/pages/Voting/Voting";

import { Container } from "./App.styled";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="voting" element={<Voting />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default App;
