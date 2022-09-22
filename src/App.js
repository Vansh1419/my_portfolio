import "./App.css";
import "./color.theme.css";
import Sidetext from "./components/sideText/sidetext.component";
import Skills from "./components/skills/skills.component";
import Works from "./components/works/work.component";
import React from "react";
import Button from "./components/button/button.component";
import { useRef, useState, useEffect } from "react";

import Intro from "./introduction/introduction.component";
function App() {
  const [tagInfo, setTagInfo] = useState("");
  const intersectionObservorHandler = (e) => {
    setTagInfo(e);
  };
  return (
    <div className="App">
      <Sidetext props={tagInfo} />
      <Intro handler={intersectionObservorHandler} />
      <Skills handler={intersectionObservorHandler} />
      <Works handler={intersectionObservorHandler} />
    </div>
  );
}
export default App;
