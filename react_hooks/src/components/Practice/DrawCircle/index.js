import React, { useRef } from 'react';

function DrawCircle() {
  const canvasRef = useRef(null);
  let radiusValue = 0;

  const handleRadiusInputChange = (event) => {
    radiusValue = event.target.value;
  };

  const drawCircle = (context, x, y, radius) => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.stroke();
  };

  const handleDraw = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    drawCircle(context, x, y, radiusValue);
  };

  return (
    <div>
      <label htmlFor="radius-input">Radius:</label>
      <input id="radius-input" type="number" onChange={handleRadiusInputChange} />

      <button onClick={handleDraw}>Draw Circle</button>

      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}

export default DrawCircle;