// import "./styles.css";
import React, { useState } from "react";
export default function DrawRhombus() {
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
      <br></br> <button onClick={handleclick}>generate hexagon</button>
      {triangle && (
        <>
        <div
          style={{
            height:0,
            width: "8rem",
            marginLeft: "10px",
            borderLeft: 2*one + "px solid transparent",
            borderRight: one*2 + "px solid transparent",
            borderBottom: one + "px solid green"
          }}
        ></div>
        <div
          style={{
            height:0,
            width: "8rem",
            marginLeft: "10px",
            borderLeft: one*2 + "px solid transparent",
            borderRight: one*2 + "px solid transparent",
            borderTop: one + "px solid green"
          }}
        ></div>
        </>
      )}
    </div>
  );
}