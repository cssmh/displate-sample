import { useState } from "react";

const ChooseLooks = () => {
  const [selectedFrame, setSelectedFrame] = useState("No Frame");

  const frameColors = {
    "No Frame": "",
    "Black Wood Pattern": "border-black",
    "White Wood Pattern": "border-white",
    "Natural Wood Pattern": "border-yellow-600",
    Graphite: "border-gray-700",
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Choose how it looks
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Customize your Displate and make it your own. Pick the right size,{" "}
          <br /> go gloss or matte, or add the frame that will bring out the
          best in it.
        </p>
      </div>
      <div className="flex justify-center space-x-6 mt-10 items-end">
        <div
          className={`bg-gray-300 rounded-lg flex items-end justify-center h-32 w-28 ${
            frameColors[selectedFrame]
              ? `${frameColors[selectedFrame]} border-4`
              : ""
          }`}
        >
          <a href="#">
            <img
              src="https://displate.com/img/what-a-displate/displate-m.png"
              alt="Image 1"
              className="h-full object-cover rounded-lg"
            />
          </a>
        </div>
        <div
          className={`bg-gray-300 rounded-lg flex items-end justify-center h-48 w-40 ${
            frameColors[selectedFrame]
              ? `${frameColors[selectedFrame]} border-4`
              : ""
          }`}
        >
          <a href="#">
            <img
              src="https://displate.com/img/what-a-displate/displate-l.png"
              alt="Image 2"
              className="h-full object-cover rounded-lg"
            />
          </a>
        </div>
        <div className="bg-gray-300 rounded-lg flex items-end justify-center h-64 w-52">
          <a href="#">
            <img
              src="https://displate.com/img/what-a-displate/displate-xl.png"
              alt="Image 3"
              className="h-full object-cover rounded-lg"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-7 mt-6">
        <div className="flex gap-4 items-center">
          <h2 className="text-xl">Finish:</h2>
          <div className="flex space-x-8">
            <div className="flex items-center">
              <input
                type="radio"
                name="finish"
                className="radio radio-success"
                id="matte"
                defaultChecked
              />
              <label htmlFor="matte" className="ml-2 text-gray-600">
                Matte
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="finish"
                className="radio radio-success"
                id="gloss"
              />
              <label htmlFor="gloss" className="ml-2 text-gray-600">
                Gloss
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center gap-5 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Frame:</h2>
        <div className="flex justify-center space-x-4 mt-4">
          {[
            { name: "No Frame", color: "bg-gray-200" },
            { name: "Black Wood Pattern", color: "bg-black" },
            { name: "White Wood Pattern", color: "bg-white" },
            { name: "Natural Wood Pattern", color: "bg-yellow-600" },
            { name: "Graphite", color: "bg-gray-700" },
          ].map((frame) => (
            <div
              key={frame.name}
              onClick={() => setSelectedFrame(frame.name)}
              className={`w-16 h-16 border rounded-lg flex justify-center items-center ${
                selectedFrame === frame.name
                  ? "border-blue-500"
                  : "border-gray-500 hover:border-gray-600"
              }`}
            >
              <div
                className={`w-full h-full rounded-md ${frame.color} ${
                  frame.color === "bg-white" ? "border border-gray-500" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
        <p>
          Frame: <span className="font-bold">No frame</span>
        </p>
      </div>
    </div>
  );
};

export default ChooseLooks;
