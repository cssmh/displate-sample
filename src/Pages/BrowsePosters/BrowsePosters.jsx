import { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight, FiFilter } from "react-icons/fi";
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
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="relative p-4">
        <div className="drawer drawer-end z-50 flex items-center justify-between">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-96 space-y-6 p-8">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Filters</h3>
                <div className="flex items-center gap-3">
                  <button className="font-semibold text-[#1185ed]">
                    Reset filters
                  </button>
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="cursor-pointer text-lg text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </label>
                </div>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-2">Orientation</h4>
                <div className="space-y-2 flex flex-col">
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="orientation" className="mr-2" />{" "}
                    All
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="orientation" className="mr-2" />{" "}
                    Horizontal
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="orientation" className="mr-2" />{" "}
                    Vertical
                  </label>
                </div>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-2">Collection</h4>
                <div className="space-y-2 flex flex-col">
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="collection" className="mr-2" />{" "}
                    All
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="collection" className="mr-2" />{" "}
                    Community Choice
                  </label>
                  <p className="mt-2 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">
                      What&apos;s the Community Choice?
                    </span>{" "}
                    Find out more{" "}
                    <a href="#" className="text-blue-500 underline">
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-2">Category</h4>
                <div className="space-y-2 flex flex-col">
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" /> All
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" />{" "}
                    Abstract
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" />{" "}
                    Animals
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" />{" "}
                    Anime & Manga
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" />{" "}
                    Blueprints
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" />{" "}
                    Books
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" /> Cars
                  </label>
                  <label className="cursor-pointer text-lg">
                    <input type="radio" name="category" className="mr-2" />{" "}
                    Cartoons
                  </label>
                </div>
                <button
                  className="mt-4 text-blue-500 hover:underline focus:outline-none"
                  onClick={() => {
                    // Toggle logic for showing more options can be implemented here
                  }}
                >
                  Show More
                </button>
              </div>
            </ul>
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
                  <p className="hover:underline text-center bg-[#f6f7f8] font-semibold inline-block whitespace-nowrap px-2 py-1 rounded-md">
                    {category}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePosters;
