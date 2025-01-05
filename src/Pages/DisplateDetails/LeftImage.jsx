import { useState } from "react";
import { FaHeart, FaSearchPlus } from "react-icons/fa";

const LeftImage = ({ frameColor }) => {
  const [selectedImage, setSelectedImage] = useState(
    "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif"
  );

  const images = [
    "/images/main.jpg",
    "/images/thumb1.jpg",
    "/images/thumb2.jpg",
    "/images/thumb3.jpg",
  ];
  return (
    <div className="relative rounded-lg bg-black w-full lg:w-[70%]">
      <div className="flex items-center h-screen">
        <img
          src={selectedImage}
          alt="Artwork"
          className={`w-32 mx-auto h-auto border-4 transition-all duration-300 ${
            frameColor === "black"
              ? "border-black"
              : frameColor === "white"
              ? "border-white"
              : frameColor === "gold"
              ? "border-[#d4af37]"
              : frameColor === "gray"
              ? "border-gray-500"
              : "border-black"
          }`}
        />
      </div>
      <div className="absolute top-4 right-4 flex flex-col gap-2">
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
  );
};

export default LeftImage;
