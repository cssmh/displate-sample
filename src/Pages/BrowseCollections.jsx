import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Newsletter from "../Components/Newsletter";
import CategoryModal from "./CategoryModal";

const BrowseCollections = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const sections = [
    "Trending",
    "Gaming",
    "Fantasy",
    "TV Shows",
    "Movies",
    "Comics",
    "Music",
    "Sport",
    "Anime & Manga",
  ];

  const sampleDesigns = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: "Lands Between",
    subtitle: "ELDEN RING",
    avatar:
      "https://static.displate.com/brand/layout/96653a00-33b4-4bc4-8512-4e1724a7a67a/avatarStandard.jpg",
    images: [
      "https://static.displate.com/280x392/displate/2023-02-09/a2e988195eb102065d5d917ecac4a1ea_65f8a3db8a79c2759ea3757dde239d53.jpg",
      "https://static.displate.com/280x392/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg",
      "https://static.displate.com/280x392/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg",
      "https://static.displate.com/280x392/displate/2023-02-09/a2e988195eb102065d5d917ecac4a1ea_65f8a3db8a79c2759ea3757dde239d53.jpg",
    ],
  }));

  const SectionSlider = ({ sectionTitle, data }) => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderSettings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      beforeChange: (current, next) => setCurrentSlide(next),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="relative my-8">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          {sectionTitle}
        </h2>
        {currentSlide > 0 && (
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute z-10 top-1/2 transform -translate-y-1/2 left-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          >
            <FiChevronLeft size={24} />
          </button>
        )}
        <Slider ref={sliderRef} {...sliderSettings}>
          {data.map((design) => (
            <div
              key={design.id}
              className="p-2 flex border flex-col items-center text-center"
            >
              <div className="bg-white p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={design.avatar}
                    alt={design.title}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-left">
                      {design.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-left">
                      {design.subtitle}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {design.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Design ${idx + 1}`}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {currentSlide < data.length - 4 && (
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute z-10 top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          >
            <FiChevronRight size={24} />
          </button>
        )}
      </div>
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= totalPages) {
      setCurrentPage(value);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Browse Collections
        </h1>
        <div className="flex items-center">
          <span className="mr-2 font-medium">Category:</span>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-between w-[200px] border rounded-md px-3 py-2 text-sm font-medium bg-white shadow-sm focus:outline-none"
          >
            <span className="mr-2">All</span>
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>
      {sections.map((section) => (
        <SectionSlider
          key={section}
          sectionTitle={section}
          data={sampleDesigns}
        />
      ))}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-2 rounded-full border shadow-lg disabled:opacity-50"
        >
          <FiChevronLeft size={24} />
        </button>
        <input
          type="number"
          value={currentPage}
          onChange={handlePageChange}
          min={1}
          max={totalPages}
          className="w-16 text-center border rounded-md p-2"
        />
        <span>of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full border shadow-lg disabled:opacity-50"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      <Newsletter />
      <CategoryModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default BrowseCollections;
