import React, { useState } from "react";

const ATest = () => {
  const questions = [
    { id: 1, image: "https://image5.cdnsbg.com/cms.smartbuyglasses.com/wp-content/uploads/2022/02/Mobile-Astigmatism-2.png" },
    { id: 2, image: "https://www.garciadeoteyza.es/wp-content/uploads/2017/05/image1-4.png" },
    { id: 3, image: "https://sayora.lk/wp-content/uploads/2021/01/test2.gif" },
  ];

  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const handleResponse = (id, answer) => {
    setResponses((prev) => ({ ...prev, [id]: answer }));
  };

  const handleSubmit = () => {
    const positiveResponses = Object.values(responses).filter((res) => res === "yes").length;
    setResult(
      positiveResponses > 0
        ? "You might have astigmatism. Consult an eyecare professional."
        : "Your vision appears normal."
    );
  };

  return (
    <div className="astigmatism-test p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Astigmatism Test</h2>
      {questions.map((q) => (
        <div key={q.id} className="my-12">
          <img src={q.image} alt={`Pattern ${q.id}`} className="w-1/3 h-1/3 mx-auto mb-2" />
          <p className="text-center m-5">Do some lines appear darker or blurrier in this pattern?</p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleResponse(q.id, "yes")}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={() => handleResponse(q.id, "no")}
            >
              No
            </button>
          </div>
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={handleSubmit}>
        Submit
      </button>
      {result && <p className="mt-4 text-center text-green-500">{result}</p>}
    </div>
  );
};

export default ATest;
