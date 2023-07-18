import React, { useRef } from 'react';

function DrawRectangle() {
  const canvasRef = useRef(null);
  let xValue = 0;
  let yValue = 0;

  const handleXInputChange = (event) => {
    xValue = event.target.value;
  };

  const handleYInputChange = (event) => {
    yValue = event.target.value;
  };

  const drawRectangle = (context, x, y) => {
    context.fillStyle = 'red';
    context.fillRect(100, 50, x, y);
  };

  const handleDraw = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawRectangle(context, xValue, yValue);
  };

  return (
    <div>
      <label htmlFor="x-input">X:</label>
      <input id="x-input" type="number" onChange={handleXInputChange} />

      <label htmlFor="y-input">Y:</label>
      <input id="y-input" type="number" onChange={handleYInputChange} />

      <button onClick={handleDraw}>Draw Rectangle</button>
      <button onClick={() => window.location.reload()}>Redraw</button>
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}

export default DrawRectangle;

