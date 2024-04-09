import { useRef, useEffect } from "react";

import "./SnakeGame.css";

export default function SnakeGame() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Function to fix DPI
    function fixDPI() {
      // Get the device pixel ratio
      let dpi = window.devicePixelRatio;
      // Get the CSS height of the canvas
      let styleHeight = +getComputedStyle(canvas)
        .getPropertyValue("height")
        .slice(0, -2);
      // Get the CSS width of the canvas
      let styleWidth = +getComputedStyle(canvas)
        .getPropertyValue("width")
        .slice(0, -2);

      // Scale the canvas based on DPI
      canvas.setAttribute("height", styleHeight * dpi);
      canvas.setAttribute("width", styleWidth * dpi);
    }

    // Call fixDPI to adjust the canvas size initially
    fixDPI();

    // // Draw a square at the starting point
    context.fillStyle = "green"; // Set the fill color
    context.fillRect(0, 0, 50, 50); // (x, y, width, height) of the square

    // Initial square position
    let squareX = 0;
    let squareY = 0;

    // Function to update the game state
    const update = () => {
      // Update the square position (for simplicity, moving to the right)
      squareX += 0.5;

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the square at the updated position
      context.fillStyle = "green";
      context.fillRect(squareX, squareY, 50, 50);

      // Request the next animation frame
      requestAnimationFrame(update);
    };

    // Call fixDPI to adjust the canvas size initially
    fixDPI();

    // Start the game loop
    update();
  }, []);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} className="game-canvas" />
    </div>
  );
}
