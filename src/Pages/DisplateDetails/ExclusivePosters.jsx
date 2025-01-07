import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const ExclusivePosters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      logo: "https://static.displate.com/230x320/displate/2021-12-27/261d408f23e01010bc2da6cb1ba6717c_0e642ad736f115faedf0ab53eabff42e.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
    {
      id: 2,
      logo: "https://static.displate.com/230x320/displate/2022-11-02/ff1107b82b51aa2d2e056ac8fdd6a51b_69cee8bd2e2ffd7245f079cd9e7ea4d0.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
    {
      id: 3,
      logo: "https://static.displate.com/230x320/displate/2021-03-16/a87474ed3b5b1574d42bbbbe400aa343_9370c1555473c4cdea524c5bacf6b676.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
    {
      id: 4,
      logo: "https://static.displate.com/230x320/displate/2022-11-07/bd8c0ceb6a15995959a0cee2bb35ec68_6234119696a3ed45d20135e78be4f613.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
    {
      id: 5,
      logo: "https://static.displate.com/230x320/displate/2021-12-27/261d408f23e01010bc2da6cb1ba6717c_0e642ad736f115faedf0ab53eabff42e.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
    {
      id: 6,
      logo: "https://static.displate.com/230x320/displate/2021-12-27/261d408f23e01010bc2da6cb1ba6717c_0e642ad736f115faedf0ab53eabff42e.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
    {
      id: 7,
      logo: "https://static.displate.com/230x320/displate/2021-12-27/261d408f23e01010bc2da6cb1ba6717c_0e642ad736f115faedf0ab53eabff42e.avif",
      title: "Star Trek",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/avatarStandard.jpg",
    },
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
    slidesToShow: 4,
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
    <div className="px-4 py-6 md:py-12">
      <h2 className="text-4xl font-semibold text-center mb-3">
        Discover exclusive posters
      </h2>
      <h3 className="text-4xl font-semibold text-center mb-4">
        from top brands
      </h3>
      <div className="relative">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-2">
              <div className="relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={card.logo}
                  alt={card.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white">
                  <div className="flex items-center gap-3">
                    <img
                      src={card.image}
                      alt="card"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-base font-bold text-gray-800">
                        {card.title}
                      </h4>
                      <Link
                        className="text-[#1f8dee] font-semibold"
                        to="/lisenced/dangerous"
                      >
                        See all artworks
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-8">
        <button className="font-bold text-white rounded-md px-4 py-3 bg-[#1185ed]">
          See all brands
        </button>
      </div>
    </div>
  );
};

export default ExclusivePosters;
