import { useState } from "react";
import { FaHeart, FaSearchPlus } from "react-icons/fa";

const DisplateDetails = () => {
  const [activeTab, setActiveTab] = useState("Matte");
  const [size, setSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(
    "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif"
  );
  const [frameColor, setFrameColor] = useState("black");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const images = [
    "/images/main.jpg",
    "/images/thumb1.jpg",
    "/images/thumb2.jpg",
    "/images/thumb3.jpg",
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSizeChange = (size) => {
    setSize(size);
  };

  return (
    <div className="max-w-7xl mx-auto my-2">
      <h1 className="mb-2 text-sm text-gray-600">
        Home Page &gt; Arcane &gt; Key Arts &gt; Arcane Season 2
        <span className="text-white font-semibold">Crossing the Bridge</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        <div className="relative rounded-lg bg-black w-full lg:w-[70%]">
          <div className="flex items-center h-screen">
            <img
              src={selectedImage}
              alt="Artwork"
              className={`w-32 mx-auto h-auto border-4 border-${frameColor} transition-all duration-300`}
            />
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
              <FaHeart />
            </button>
            <button className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
              <FaSearchPlus />
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 cursor-pointer border-2 border-transparent hover:border-white"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-xl font-semibold">Crossing the Bridge</h1>
          <div>
            <p className="w-[350px]">
              {isExpanded
                ? "In this poignant artwork from Arcane Season 2, the bond between Jinx and Vi is palpable. The contrast of their vibrant hair and intense gazes speaks volumes about their complicated relationship, leaving the viewer to ponder the depths of their connection. Riot Games' distinctive visual style is beautifully captured in the painterly details and dramatic lighting."
                : "In this poignant artwork from Arcane Season...  "}
            </p>
            <button className="text-[#1185ed] font-bold" onClick={toggleText}>
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
          <div className="flex items-center mb-2">
            <p className="mr-2">4.7/5</p>
            <div className="flex text-lg text-green-500">
              {[...Array(5)].map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <p className="ml-2 text-sm text-[#1185ed] font-bold">
              (15,439 reviews)
            </p>
          </div>
          <div className="mb-2 group">
            <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
              Select Product Type
              <span>
                <div className="drawer drawer-end z-50">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content flex">
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button text-[#1185ed] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                      {/* Sidebar content here */}
                      <li>
                        <a>Sidebar Item 1</a>
                      </li>
                      <li>
                        <a>Sidebar Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
            </h2>
            <div className="w-2/3 bg-[#eceff4] py-1 rounded-full mb-6">
              <button
                onClick={() => handleTabChange("Matte")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "Matte"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                Matte
              </button>
              <button
                onClick={() => handleTabChange("Gloss")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "Gloss"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                Gloss
              </button>
              <button
                onClick={() => handleTabChange("Textra")}
                className={`p-2 hover:text-[#1788ed] text-sm mx-2 font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "Textra"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                Textra
              </button>
            </div>
          </div>
          <div className="mb-2">
            <h2 className="text-base font-semibold mb-2">Choose Size</h2>
            <div className="w-[42%] bg-[#eceff4] py-1 rounded-full mb-6">
              <button
                onClick={() => handleSizeChange("M")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  size === "M"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                M
              </button>
              <button
                onClick={() => handleSizeChange("L")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  size === "L"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                L
              </button>
              <button
                onClick={() => handleSizeChange("XL")}
                className={`p-2 hover:text-[#1788ed] text-sm mx-2 font-medium transition-all duration-300 ease-in-out ${
                  size === "XL"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                XL
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Add Frame</h2>
            <div className="flex gap-4">
              {["black", "white", "gold"].map((color, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded border-4 border-${color} hover:opacity-80`}
                  style={{ backgroundColor: color }}
                  onClick={() => setFrameColor(color)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplateDetails;
