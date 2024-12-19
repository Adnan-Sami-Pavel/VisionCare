import React, { useState } from "react";
import e_up from "../../assets/e-up.png"
import e_down from "../../assets/e-down.png"
import e_right from "../../assets/e-right.png"
import e_left from "../../assets/e-left.png"


const VATest = () => {
  const [distance, setDistance] = useState(""); // Distance from screen (in cm)
  const [step, setStep] = useState(1); // Step in the test flow
  const [currentLevel, setCurrentLevel] = useState(0); // Level progress
  const [score, setScore] = useState(0);
  const [selectedDirection, setSelectedDirection] = useState("");
  const [error, setError] = useState("");

  // Test levels with additional randomized images
  const levels = [
    {
      id: 1,
      size: "64px",
      options: [
        { direction: "up", image: e_up },
        { direction: "down", image: e_down },
        { direction: "left", image: e_left },
        { direction: "right", image: e_right },
      ],
    },
    {
      id: 2,
      size: "48px",
      options: [
        { direction: "up", image: e_up },
        { direction: "down", image: e_down },
        { direction: "left", image: e_left },
        { direction: "right", image: e_right },
      ],
    },
    {
      id: 3,
      size: "32px",
      options: [
        { direction: "up", image: e_up },
        { direction: "down", image: e_down },
        { direction: "left", image: e_left },
        { direction: "right", image: e_right },
      ],
    },
    {
      id: 4,
      size: "16px",
      options: [
        { direction: "up", image: e_up },
        { direction: "down", image: e_down },
        { direction: "left", image: e_left },
        { direction: "right", image: e_right },
      ],
    },
  ];

  const [currentOption, setCurrentOption] = useState(
    levels[0].options[Math.floor(Math.random() * levels[0].options.length)]
  );

  const handleStartTest = () => {
    if (!distance || isNaN(distance) || distance <= 0) {
      setError("Please enter a valid distance in cm.");
      return;
    }
    setError("");
    setStep(2);
    setCurrentLevel(0);
    setScore(0);
    setCurrentOption(
      levels[0].options[Math.floor(Math.random() * levels[0].options.length)]
    );
  };

  const handleNext = () => {
    if (selectedDirection === currentOption.direction) {
      setScore((prev) => prev + 1);
    }
    setSelectedDirection("");

    if (currentLevel + 1 < levels.length) {
      const nextLevel = currentLevel + 1;
      setCurrentLevel(nextLevel);
      setCurrentOption(
        levels[nextLevel].options[
          Math.floor(Math.random() * levels[nextLevel].options.length)
        ]
      );
    } else {
      setStep(3); // End test
    }
  };

  const restartTest = () => {
    setDistance("");
    setStep(1);
    setCurrentLevel(0);
    setScore(0);
    setSelectedDirection("");
  };

  return (
    <div className="test-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Enhanced E Chart Visual Acuity Test</h1>

      {step === 1 && (
        <div className="flex flex-col items-center">
          <label className="mb-4 text-lg">
            Enter your distance from the screen (in cm):
          </label>
          <input
            type="number"
            className="border p-2 rounded-md w-40 mb-4"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleStartTest}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Start Test
          </button>
        </div>
      )}

      {step === 2 && currentLevel < levels.length && (
        <div className="flex flex-col items-center">
          <p className="mb-4 text-lg">Level {currentLevel + 1}</p>
          <img
            src={currentOption.image}
            alt={`E Chart Level ${currentLevel + 1}`}
            className="mb-6"
            style={{
              width: levels[currentLevel].size,
              height: levels[currentLevel].size,
            }}
          />
          <p className="mb-4">Select the direction of the "E":</p>
          <div className="flex gap-4">
            {["up", "down", "left", "right"].map((dir) => (
              <button
                key={dir}
                onClick={() => setSelectedDirection(dir)}
                className={`px-4 py-2 rounded ${
                  selectedDirection === dir
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {dir.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!selectedDirection}
            className={`mt-6 px-6 py-2 rounded ${
              selectedDirection
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Test Results</h2>
          <p className="mb-4 text-xl ">Score: {score} / {levels.length}</p>
          <p className="mb-6 text-xl">
            {score === levels.length
              ? "Excellent! Your visual acuity is great."
              : score >= 2
              ? "Good! Your vision seems fine, but consider an eye checkup."
              : "You might need to visit an eye specialist for further evaluation."}
          </p>
          <button
            onClick={restartTest}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
};

export default VATest;
