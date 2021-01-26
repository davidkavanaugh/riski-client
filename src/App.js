import React from "react";
import { Router } from "@reach/router";
import New from "./New";
import Search from "./Search";
import Settings from "./Settings";
const App = () => {
  return (
    <>
      <Router>
        <New path="/new" />
        <Search path="/search" />
        <Settings path="/settings" />
      </Router>
    </>
  );
};

export default App;
