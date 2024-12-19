import React, { useState } from 'react';

const NVTest = () => {
  const [lineSize, setLineSize] = useState(1); // Controls text size
  const lines = [
    'N1', 'N2', 'N3', 'N4', 'N5', // Representing different line sizes
  ];

  const handleNext = () => {
    if (lineSize < lines.length - 1) {
      setLineSize(lineSize + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Near Vision Test</h2>
      <p className="text-lg mb-4">Read the smallest line clearly:</p>
      <div className="mb-6">
        <p className={`font-bold text-center ${lineSize === 0 ? 'text-xl' : 'text-4xl'}`}>{lines[lineSize]}</p>
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default NVTest;
