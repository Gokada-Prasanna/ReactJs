// import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [one, setone] = useState(0);
  const [two, settwo] = useState(0);
  const [three, setthree] = useState(0);
  const [left, setleft] = useState("");
  const [right, setright] = useState("");
  const [bottom, setbottom] = useState("");
  const [triangle, settriangle] = useState(false);
  const handleonechange = (e) => {
    setone(e.target.value);
  };
  const handletwochange = (e) => {
    settwo(e.target.value);
  };
  const handlethreechange = (e) => {
    setthree(e.target.value);
  };
  const handleclick = () => {
    settriangle(true);
    console.log(left, right, bottom, triangle);
  };
  return (
    <div className="App">
      <input placeholder="one" onChange={handleonechange} />
      <br></br> <input placeholder="two" onChange={handletwochange} />
      <br></br>
      <input placeholder="three" onChange={handlethreechange} />
      <br></br> <button onClick={handleclick}>generate triangle</button>
      {triangle && (
        <div
          style={{
            height: 0,
            width: 0,
            margin: "2rem",
            borderLeft: one + "px solid transparent",
            borderRight: two + "px solid transparent",
            borderBottom: three + "px solid green"
          }}
        ></div>
      )}
    </div>
  );
}