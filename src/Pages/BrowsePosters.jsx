import React, { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

  // Custom Prev Arrow
  const CustomPrevArrow = (props) =>
    currentIndex > 0 && (
      <button
        className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
        onClick={props.onClick}
      >
        <FiChevronLeft size={24} />
      </button>
    );

  // Custom Next Arrow
  const CustomNextArrow = (props) => (
    <button
      className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
      onClick={props.onClick}
    >
      <FiChevronRight size={24} />
    </button>
  );

  // Slider Settings
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="relative p-4">
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button bg-[#f6f7f8] font-semibold p-1"
            >
              Filters
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content */}
              <li>
                <a>Filter 1</a>
              </li>
              <li>
                <a>Filter 2</a>
              </li>
              <li>
                <a>Filter 3</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Categories Slider */}
        <div className="mt-8">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="hover:scale-105 transition-transform">
                <p className="text-center bg-[#f6f7f8] font-semibold">
                  {category}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrowsePosters;
