import React, { useState } from "react";
import con1 from "../../assets/con-1.png"
import con2 from "../../assets/con2.png"
import con3 from "../../assets/con3.png"
import con4 from "../../assets/con4.png"
import con5 from "../../assets/con5.png"

const CSTest = () => {
  const patterns = [
    { id: 1, image: con1, answer: "VRS" },
    { id: 2, image: con2, answer: "NHC" },
    { id: 3, image: con3, answer: "SCN" },
    { id: 4, image: con4, answer: "CNH" },
    { id: 5, image: con5, answer: "KCH" },
  ];

  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const handleResponse = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    patterns.forEach((p) => {
      if (responses[p.id]?.toUpperCase() === p.answer) correctAnswers++;
    });
    const score = Math.round((correctAnswers / patterns.length) * 100);
    setResult(score >= 70 ? `Score: ${score}%. Good sensitivity.` : `Score: ${score}%. Low sensitivity.`);
  };

  return (
    <div  className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl my-12">Contrast Sensitivity Test</h2>
      {patterns.map((p) => (
        <div key={p.id}>
          <img src={p.image} alt={`Pattern ${p.id}` } className=" py-10" />
          <input
          className="border border-green-300 rounded-md p-2 w-full text-center focus:outline-none focus:ring focus:ring-blue-300 mb-4"

            type="text"
            placeholder="Enter the letter you see"
            value={responses[p.id] || ""}
            onChange={(e) => handleResponse(p.id, e.target.value)}
          />
        </div>
      ))}
      <button className="mt-6 w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50" onClick={handleSubmit}>Submit</button>
      {result && <p className="my-12 text-xl">{result}</p>}
    </div>
  );
};

export default CSTest;

