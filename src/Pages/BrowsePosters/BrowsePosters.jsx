import { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight, FiFilter } from "react-icons/fi";
import Filters from "./Filters";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrowsePosters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [
    "Movie Posters",
    "Gaming & Video Game Posters",
    "Sports Posters",
    "Nature Posters",
    "Floral Posters",
    "Travel Posters",
    "United States Posters",
    "Anime Posters",
    "Fantasy Posters",
    "Landscapes Posters",
    "City Skyline Posters",
    "Animal Posters",
    "Transportation Posters",
    "Car Posters",
    "Airplanes Posters",
    "Map Posters",
    "Music Posters",
    "Cute Posters",
    "Funny Posters",
    "Celebrity Posters",
    "Motivational Posters",
    "TV Show Posters",
    "Cartoon Posters",
    "Comic Book Posters",
    "Military Posters",
    "Space Posters",
    "Blueprint Posters",
    "Book Posters",
    "Japanese Posters",
    "Pop Art Posters",
    "Minimalist Posters",
    "Vintage Posters",
    "Retro Posters",
    "Abstract Art Posters",
    "Food Posters",
    "Paintings Posters",
    "Fashion Posters",
    "Art Posters",
    "Contemporary Posters",
  ];

  const CustomPrevArrow = (props) =>
    currentIndex > 0 && (
      <button
        className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
        onClick={props.onClick}
      >
        <FiChevronLeft size={24} />
      </button>
    );

  const CustomNextArrow = (props) => (
    <button
      className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
      onClick={props.onClick}
    >
      <FiChevronRight size={24} />
    </button>
  );

  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="relative py-3">
        <div className="drawer drawer-end z-50 flex items-center justify-between">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <Filters />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button bg-[#f6f7f8] font-semibold p-2 rounded cursor-pointer flex items-center gap-1"
            >
              Filters <FiFilter />
            </label>
          </div>
          <div className="flex-1 overflow-x-hidden px-3">
            <Slider {...settings}>
              {categories.map((category, index) => (
                <div key={index}>
                  <p className="hover:underline text-center bg-[#f6f7f8] font-semibold inline-block whitespace-nowrap px-3 py-1 rounded-md mr-2">
                    {category}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <h1 className="mb-3 text-sm text-gray-400">
        Home Page . Posters & Art Prints .{" "}
        <span className="font-semibold">Posters & Art Prints</span>
        <span className="text-white font-semibold">Crossing the Bridge</span>
      </h1>
      <p className="font-bold my-3">Posters & Art Prints</p>
      {/* <div className="flex items-center justify-between bg-gradient-to-r from-[#2361e7] to-[#1184ef] py-6 px-12 rounded-lg">
        <div className="text-white text-5xl font-bold">
          22% <span className="text-[#09efd0]">OFF</span>
        </div>
        <div className="flex space-x-4">
          <img
            src="image1.jpg"
            alt="image1"
            className="w-16 h-16 object-cover rounded-full"
          />
          <img
            src="image2.jpg"
            alt="image2"
            className="w-16 h-16 object-cover rounded-full"
          />
          <img
            src="image3.jpg"
            alt="image3"
            className="w-16 h-16 object-cover rounded-full"
          />
          <img
            src="image4.jpg"
            alt="image4"
            className="w-16 h-16 object-cover rounded-full"
          />
          <img
            src="image5.jpg"
            alt="image5"
            className="w-16 h-16 object-cover rounded-full"
          />
          <img
            src="image6.jpg"
            alt="image6"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div className="text-white text-2xl font-bold">
          USE CODE: <span className="text-[#09efd0]">SAVE22</span>
        </div>
      </div> */}
      <img
        src="https://cms-static-pages-assets.displate.com/SEARCH_BANNER_22_OFF_DESKTOP_d450815c45.jpg"
        alt=""
      />
    </div>
  );
};

export default BrowsePosters;
