// import "./styles.css";
import React, { useState } from "react";
export default function DrawOctagon() {
  const [one, setone] = useState(0);  
  const [shape, setShape] = useState(false);

  const handleonechange = (e) => {
    setone(e.target.value);
  };

  const handleclick = () => {
    setShape(true);
  };

  const width = parseInt(one/8)

  return (
    <div className="App">
      <input placeholder="one" onChange={handleonechange} />
      <br></br> <button onClick={handleclick}>generate hexagon</button>
      {shape && (
        <>
        <div
          style={{
            height:0,
            width: `${width}rem`,
            marginLeft: "10px",
                borderLeft: one-parseInt(one/2) + "px solid transparent",
                borderRight: one-parseInt(one/2) + "px solid transparent",
            borderBottom: one + "px solid green"
          }}
        ></div>
        <div
          style={{
            height:0,
            width: `${width}rem`,
            marginLeft: "10px",
            
            borderTop: one + "px solid green"
          }}
        ></div> 
        <div style={{
            height:0,
            width:`${width}rem`,
            marginLeft:"10px",
            borderLeft: one-parseInt(one/2.8)+ "px solid transparent",
            borderRight:one-parseInt(one/2.8) +"px solid transparent",
            borderTop:one+"px solid green"
        }}></div>
        </>
      )}
    </div>
  );
}

