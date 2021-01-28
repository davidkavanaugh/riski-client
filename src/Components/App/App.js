import React from "react";
import { Router } from "@reach/router";
import Survey from "../Survey/Survey";
import Search from "../Search/Search";
import Settings from "../Settings/Settings";
const App = () => {
  return (
    <>
      <Router>
        <Survey path="/new" default />
        <Search path="/search" />
        <Settings path="/settings" />
      </Router>
    </>
  );
};

export default App;
