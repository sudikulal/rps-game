import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Matchmaking from "./components/MatchMaking.jsx";
import Private from "./components/Private.jsx";
import PlayWithComputer from "./components/PlayWithComputer.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matchmaking" element={<Matchmaking />} />
          <Route path="/private" element={<Private />} />
          <Route path="/cpu" element={<PlayWithComputer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
