import React, { useState } from "react";

const DETest = () => {
  const questions = [
    "Do your eyes feel dry in the morning?",
    "Do you feel discomfort when reading for extended periods?",
    "Do your eyes feel irritated when exposed to wind?",
    "Do you experience blurry vision at times?",
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex, answer) => {
    if (!answers[questionIndex]) {
      setAnswers({ ...answers, [questionIndex]: answer });
      if (answer === "Yes") {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen   rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">
        Dry Eye Test
      </h2>
      <p className="text-lg mb-8 text-gray-700">
        Answer the following questions honestly:
      </p>
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="mb-6 border-b border-gray-200 pb-4 last:border-none"
          >
            <p className="text-gray-800 text-lg">{question}</p>
            <div className="flex space-x-4 mt-3">
              <button
                onClick={() => handleAnswer(index, "Yes")}
                className={`py-2 px-6 text-white rounded-md font-medium transition ${
                  answers[index]
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
                disabled={!!answers[index]}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(index, "No")}
                className={`py-2 px-6 text-white rounded-md font-medium transition ${
                  answers[index]
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                }`}
                disabled={!!answers[index]}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xl text-gray-700">Score: {score}</p>
      {score >= 3 && (
        <p className="mt-3 text-lg text-red-500 font-semibold">
          Consult a doctor for further evaluation.
        </p>
      )}
    </div>
  );
};

export default DETest;
