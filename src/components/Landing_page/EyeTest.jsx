import React, { useState } from "react";

const EyeTests = () => {
  const [activeTest, setActiveTest] = useState(null);

  const tests = [
    { id: 1, name: "Visual Acuity Test" },
    { id: 2, name: "Color Vision Test" },
    { id: 3, name: "Astigmatism Test" },
    { id: 4, name: "Contrast Sensitivity Test" },
    { id: 5, name: "Amsler Grid Test" },
    { id: 6, name: "Near Vision Test" },
    { id: 7, name: "Field of Vision Test" },
    { id: 8, name: "Dry Eye Test" },
  ];

  const handleTestSelect = (testId) => {
    setActiveTest(testId);
  };

  return (
    <div className="eye-tests w-full p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Eye Tests</h1>
      <div className="test-menu flex justify-center gap-4 flex-wrap mb-6">
        {tests.map((test) => (
          <button
            key={test.id}
            onClick={() => handleTestSelect(test.id)}
            className={`px-4 py-2 rounded-md text-white ${
              activeTest === test.id ? "bg-blue-700" : "bg-blue-500"
            } hover:bg-blue-600 transition`}
          >
            {test.name}
          </button>
        ))}
      </div>

      <div className="test-area mt-6">
        {activeTest === 1 && <VisualAcuityTest />}
        {activeTest === 2 && <ColorVisionTest />}
        {activeTest === 3 && <AstigmatismTest />}
        {activeTest === 4 && <ContrastSensitivityTest />}
        {activeTest === 5 && <AmslerGridTest />}
        {activeTest === 6 && <NearVisionTest />}
        {activeTest === 7 && <FieldOfVisionTest />}
        {activeTest === 8 && <DryEyeTest />}
      </div>
    </div>
  );
};

// Individual Test Components

const VisualAcuityTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Visual Acuity Test</h2>
    <img src="/snellen-chart.jpg" alt="Snellen Chart" className="w-1/2 mx-auto" />
    <p className="text-center mt-4">Stand 6 feet away from your screen and read the smallest line you can.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </div>
);

const ColorVisionTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Color Vision Test</h2>
    <img src="/ishihara-plate-1.jpg" alt="Ishihara Plate" className="w-1/3 mx-auto" />
    <input type="text" className="border mt-4 px-4 py-2 w-full" placeholder="Enter the number you see" />
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </div>
);

const AstigmatismTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Astigmatism Test</h2>
    <img src="/astigmatism-chart.jpg" alt="Astigmatism Chart" className="w-1/2 mx-auto" />
    <p className="text-center mt-4">Do some lines appear darker or blurrier?</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Yes</button>
    <button className="mt-4 bg-gray-300 text-black px-4 py-2 rounded ml-4">No</button>
  </div>
);

const ContrastSensitivityTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Contrast Sensitivity Test</h2>
    <img src="/contrast-pattern.jpg" alt="Contrast Pattern" className="w-1/2 mx-auto" />
    <input type="text" className="border mt-4 px-4 py-2 w-full" placeholder="What letter or shape do you see?" />
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </div>
);

const AmslerGridTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Amsler Grid Test</h2>
    <img src="/amsler-grid.jpg" alt="Amsler Grid" className="w-1/2 mx-auto" />
    <p className="text-center mt-4">Focus on the center dot. Do any lines appear wavy or missing?</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Yes</button>
    <button className="mt-4 bg-gray-300 text-black px-4 py-2 rounded ml-4">No</button>
  </div>
);

const NearVisionTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Near Vision Test</h2>
    <img src="/near-vision-chart.jpg" alt="Near Vision Chart" className="w-1/2 mx-auto" />
    <p className="text-center mt-4">Hold your screen 12 inches away and read the smallest text you can.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </div>
);

const FieldOfVisionTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Field of Vision Test</h2>
    <p className="text-center mt-4">Click on the dots as they appear on the screen.</p>
    <div className="dot-test-area w-full h-96 border relative">
      {/* Use JavaScript to generate random dots */}
    </div>
  </div>
);

const DryEyeTest = () => (
  <div>
    <h2 className="text-xl font-semibold">Dry Eye Test</h2>
    <form>
      <div className="question mt-4">
        <label>Do your eyes feel dry or itchy?</label>
        <input type="radio" name="dry-eye" value="yes" className="ml-4" /> Yes
        <input type="radio" name="dry-eye" value="no" className="ml-4" /> No
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
);

export default EyeTests;
