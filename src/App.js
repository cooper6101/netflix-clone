import React from "react";
import "./App.css";
import Rows from "./components/Rows";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
    </div>
  );
};

export default App;
