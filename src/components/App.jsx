import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("hello");
  function handelClick() {
    setHeading("Submitted");
  }
  const [background, setBackground] = useState({ backgroundColor: "white" });
  function handelMouseOver() {
    setBackground({ backgroundColor: "black" });
  }
  function handelMouseOut() {
    setBackground({ backgroundColor: "white" });
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handelClick}
        onMouseOver={handelMouseOver}
        onMouseOut={handelMouseOut}
        style={background}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
