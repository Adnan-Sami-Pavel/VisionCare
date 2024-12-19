import React, { useState } from "react";

const CVTest = () => {
  const questions = [
    {
      id: 1,
      image:
        "https://cdn-beaai.nitrocdn.com/DsHNrqyidSdrnEUwxpnDFmLjguAlTfrt/assets/images/optimized/rev-f0a997b/colormax.org/wp-content/uploads/2015/08/colorblind-test-image3.jpg",
      answer: "26",
    },
    {
      id: 2,
      image:
        "https://www.colorblindnesstest.org/static/colorblindnesstest/img/ctest/6-light.png",
      answer: "6",
    },
    {
      id: 3,
      image:
        "https://www.colorblindtest.net/images/colorblindtest/1.webp",
      answer: "1",
    },
  ];

  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const handleInputChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (responses[q.id]?.trim() === q.answer) {
        correctAnswers++;
      }
    });
    const score = Math.round((correctAnswers / questions.length) * 100);
    setResult(
      `Your score: ${score}%. ${
        score >= 70 ? "Normal color vision." : "Possible color vision deficiency. Consult a professional."
      }`
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">
        Color Vision Test
      </h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <img
            src={q.image}
            alt={`Question ${q.id}`}
            className="w-48 h-48 object-cover mx-auto mb-4 rounded-md shadow-sm"
          />
          <input
            type="text"
            className="w-full md:w-1/2 border border-gray-300 rounded-md p-3 mx-auto text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder={`Enter the number you see for plate ${q.id}`}
            value={responses[q.id] || ""}
            onChange={(e) => handleInputChange(q.id, e.target.value)}
          />
        </div>
      ))}
      <button
        className="w-full md:w-1/3 bg-blue-500 text-white py-3 px-6 rounded-md mx-auto hover:bg-blue-600 transition mt-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {result && (
        <p className="mt-6 text-xl text-center text-green-600 font-semibold">{result}</p>
      )}
    </div>
  );
};

export default CVTest;

