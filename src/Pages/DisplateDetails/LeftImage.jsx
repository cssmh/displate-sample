import { useState, useEffect } from "react";
import { FaHeart, FaSearchPlus } from "react-icons/fa";

const LeftImage = ({ frameColor }) => {
  const [selectedImage, setSelectedImage] = useState(
    "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif"
  );
  const [zoom, setZoom] = useState(1); // Zoom level for the main image

  const images = [
    "https://static.displate.com/230x320/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.avif",
    "https://static.displate.com/230x320/displate/2021-04-01/d5864f5331eb99f4220c85a9fb1b67eb_1c79637b1124ad13ea9f3bb0b19f6e52.aviff",
    "https://static.displate.com/230x320/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.avif",
    "https://static.displate.com/230x320/displate/2021-04-01/d5864f5331eb99f4220c85a9fb1b67eb_1c79637b1124ad13ea9f3bb0b19f6e52.avif",
    "https://static.displate.com/230x320/displate/2022-06-08/dbfee4f7c585f133cc1f59bf997d8748_ad60b160292f8dc453af81f0a8605878.avif",
    "https://static.displate.com/230x320/displate/2021-04-01/d5864f5331eb99f4220c85a9fb1b67eb_1c79637b1124ad13ea9f3bb0b19f6e52.avif",
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (event.deltaY < 0) {
        setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Zoom in, max 3x
      } else {
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Zoom out, min 1x
      }
    };

    const mainImage = document.getElementById("main-image");
    if (mainImage) {
      mainImage.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (mainImage) {
        mainImage.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative rounded-lg bg-black w-full lg:w-[70%]">
      <div className="relative flex items-center justify-center h-screen">
        <img
          id="main-image"
          src={selectedImage}
          alt="Artwork"
          style={{ transform: `scale(${zoom})` }}
          className={`transition-transform duration-300 border-4 ${
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
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Overlay ${index + 1}`}
            className={`absolute w-32 h-auto border-2 border-transparent transition-all duration-700 transform ${
              selectedImage === img
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-full scale-50"
            }`}
            style={{ top: `${50 + index * 20}px` }}
          />
        ))}
      </div>
      <div className="absolute top-4 right-4 flex flex-col gap-4">
        <button className="bg-white p-3 rounded-full text-black hover:bg-gray-300">
          <FaHeart />
        </button>
        <button className="bg-white p-3 rounded-full text-black hover:bg-gray-300">
          <FaSearchPlus />
        </button>
      </div>
      <div className="absolute m-4 top-2 flex flex-col gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="w-14 h-14 rounded-lg border-white mb-1 cursor-pointer border-2 border-transparent hover:border-white"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftImage;
