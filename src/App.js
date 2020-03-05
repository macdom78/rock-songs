import React from "react";
import { Router } from "@reach/router";

import SongsList from "./containers/SongsList";
import SongDetails from "./containers/SongDetails";
import ErrorPage from "./containers/ErrorPage";

const App = () => {
  return (
    <Router>
      <SongsList path="/" />
      <SongDetails path="/song/:trackId" />
      <ErrorPage path="/error" />
    </Router>
  );
};

export default App;
