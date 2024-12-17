import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LicensedArtworks = () => {
  const cards = [
    {
      logo: "/images/arcane_logo.png",
      title: "Arcane",
      artworks: "62 artworks",
    },
    {
      logo: "/images/stranger_things_logo.png",
      title: "Stranger Things Series",
      artworks: "407 artworks",
    },
    {
      logo: "/images/star_wars_logo.png",
      title: "Star Wars",
      artworks: "1737 artworks",
    },
    {
      logo: "/images/marvel_logo.png",
      title: "Marvel",
      artworks: "1959 artworks",
    },
    {
      logo: "/images/warhammer_logo.png",
      title: "Warhammer",
      artworks: "464 artworks",
    },
    {
      logo: "/images/middle_earth_logo.png",
      title: "Middle-earth",
      artworks: "141 artworks",
    },
    // Add more card objects as needed
  ];

  // Custom slider arrows
  const CustomPrevArrow = (props) => (
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

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3, // Number of visible cards
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
      {/* Main Title */}
      <h2 className="text-4xl font-bold text-center mb-4">Licensed Artworks</h2>
      <h3 className="text-xl text-center text-gray-600 mb-8">
        From Top Brands
      </h3>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition">
          See all 200+ brands
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-4 h-[220px]">
                {/* Logo */}
                <img
                  src={card.logo}
                  alt={card.title}
                  className="w-20 h-20 object-contain mb-4"
                />
                {/* Text */}
                <h4 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-600">{card.artworks}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LicensedArtworks;
