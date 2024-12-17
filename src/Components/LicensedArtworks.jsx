import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const LicensedArtworks = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  const cards = [
    {
      logo: "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/logoStandard1730726236.png",
      title: "Arcane",
      artworks: "62 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Stranger Things Series",
      artworks: "407 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Star Wars",
      artworks: "1737 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/6f509bf5-64b3-42de-85e6-32df23b6e26c/logoStandard.png",
      title: "Marvel",
      artworks: "1959 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Warhammer",
      artworks: "464 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Middle-earth",
      artworks: "141 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Stranger Things Series",
      artworks: "407 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Star Wars",
      artworks: "1737 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Marvel",
      artworks: "1959 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Warhammer",
      artworks: "464 artworks",
    },
    {
      logo: "https://static.displate.com/brand/layout/86c27f4c-0b27-4d83-aacb-cfbc1bee0fdf/logoStandard.png",
      title: "Middle-earth",
      artworks: "141 artworks",
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
    slidesToShow: 5,
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">Licensed Artworks</h2>
      <h3 className="text-4xl font-bold text-center mb-4">From Top Brands</h3>
      <div className="flex justify-center mb-6">
        <button className="text-blue-600 font-semibold">
          See all 200+ brands
        </button>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-2">
              <div className="relative flex flex-col items-start bg-gray-100 shadow-lg rounded-lg p-4 group">
                <img
                  src={card.logo}
                  alt={card.title}
                  className="object-cover mx-auto mb-4"
                />
                <h4 className="text-base font-semibold text-gray-800">
                  {card.title}
                </h4>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-gray-600">{card.artworks}</p>
                  <button className="text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Follow +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LicensedArtworks;
