import React, { useState, useEffect } from "react";

const FVTest = () => {
  const [currentPoint, setCurrentPoint] = useState(null); // Stores the current random point
  const [isVisible, setIsVisible] = useState(false); // Tracks if the point is visible
  const [score, setScore] = useState(0); // Stores the score

  const generateRandomPoint = () => {
    const x = Math.floor(Math.random() * 360); // Generate x-coordinate
    const y = Math.floor(Math.random() * 360); // Generate y-coordinate
    return { x, y };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = generateRandomPoint();
      setCurrentPoint(newPoint);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 1000); // Point disappears after 1 second
    }, 3000); // New point every 3 seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);

  const handleClick = (e) => {
    if (!isVisible || !currentPoint) return; // Ignore clicks if no visible point

    const container = e.target.getBoundingClientRect(); // Get the container's bounds
    const clickX = e.clientX - container.left; // Calculate x relative to the container
    const clickY = e.clientY - container.top; // Calculate y relative to the container

    // Check if the click is within the point's boundaries
    if (
      clickX >= currentPoint.x - 10 &&
      clickX <= currentPoint.x + 10 &&
      clickY >= currentPoint.y - 10 &&
      clickY <= currentPoint.y + 10
    ) {
      setScore((prev) => prev + 1); // Increment the score
      setIsVisible(false); // Hide the point after a successful click
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Field of Vision Test
      </h2>
      <p className="text-lg mb-4 text-gray-700">
        Click on the red dots as they appear!
      </p>
      <div
        className="relative w-96 h-96 bg-gray-300 border-4 border-gray-500 rounded-lg"
        onClick={handleClick}
      >
        {isVisible && currentPoint && (
          <div
            style={{
              position: "absolute",
              top: `${currentPoint.y}px`,
              left: `${currentPoint.x}px`,
              width: "20px",
              height: "20px",
              backgroundColor: "red",
              borderRadius: "50%",
              transition: "all 0.2s ease",
            }}
          />
        )}
      </div>
      <p className="mt-4 text-xl">Score: {score}</p>
    </div>
  );
};

export default FVTest;
