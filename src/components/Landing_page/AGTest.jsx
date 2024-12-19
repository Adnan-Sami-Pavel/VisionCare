import React, { useState } from "react";

const AGTest = () => {
  const grids = [
    { id: 1, image: "https://www.aao.org/image.axd?id=4a0d828b-c698-47cf-9455-e265332e7968&t=635998033438800000" },
  ];

  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const handleResponse = (id, response) => {
    setResponses((prev) => ({ ...prev, [id]: response }));
  };

  const handleSubmit = () => {
    const positives = Object.values(responses).filter((r) => r === "yes").length;
    setResult(
      positives > 0
        ? "Abnormalities detected. Consult a professional."
        : "No abnormalities detected."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
  <h2 className="text-2xl font-bold text-center mb-6">
    Amsler Grid Test
  </h2>
  {grids.map((g) => (
    <div
      key={g.id}
      className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-md"
    >
      <img
        src={g.image}
        alt={`Grid ${g.id}`}
        className="w-60 h-60 object-cover mb-4"
      />
      <p className="text-lg font-light text-center mb-6 text-gray-700">
        Are there any distortions or missing areas?
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleResponse(g.id, "yes")}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
        >
          Yes
        </button>
        <button
          onClick={() => handleResponse(g.id, "no")}
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition"
        >
          No
        </button>
      </div>
    </div>
  ))}
  <button
    onClick={handleSubmit}
    className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 transition"
  >
    Submit
  </button>
  {result && (
    <p className="text-lg font-medium text-center mt-4 text-gray-800">
      {result}
    </p>
  )}
</div>

  );
};

export default AGTest;
