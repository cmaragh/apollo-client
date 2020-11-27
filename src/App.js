import React from "react";
import "./styles.css";

import NavbarSmall from "./Components/NavbarSmall";
import MainContainer from "./Components/MainContainer";
import UrlContainer from "./Components/UrlContainer";

export default function App() {
  return (
    <div className="App">
      <NavbarSmall />
      <MainContainer />
      <UrlContainer />
    </div>
  );
}
