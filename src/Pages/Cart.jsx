import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow sliderRef={sliderRef} />,
    prevArrow: <PrevArrow sliderRef={sliderRef} />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sampleDesigns = [
    {
      id: 1,
      title: "Lands Between",
      subtitle: "Elden Ring",
      avatar:
        "https://static.displate.com/brand/layout/96653a00-33b4-4bc4-8512-4e1724a7a67a/avatarStandard.jpg",
      images: [
        "https://static.displate.com/280x392/displate/2023-02-09/a2e988195eb102065d5d917ecac4a1ea_65f8a3db8a79c2759ea3757dde239d53.jpg",
        "https://static.displate.com/280x392/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg",
        "https://static.displate.com/280x392/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg",
        "https://static.displate.com/280x392/displate/2023-02-09/a2e988195eb102065d5d917ecac4a1ea_65f8a3db8a79c2759ea3757dde239d53.jpg",
      ],
    },
    {
      id: 2,
      title: "Night City",
      subtitle: "Cyberpunk 2077",
      avatar:
        "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/avatarStandard1730726236.jpg",
      images: [
        "https://static.displate.com/280x392/displate/2024-09-04/67bfaeb4abedbac6b22d5ebaff6d740f_f53e764f418d678801f757760e4ce12e.jpg",
        "https://static.displate.com/280x392/displate/2024-09-04/acaec6f19b09d862c257cbb53bd898fa_245615344cc3b9344a4315c48c613755.jpg",
        "https://static.displate.com/280x392/displate/2024-09-04/acaec6f19b09d862c257cbb53bd898fa_245615344cc3b9344a4315c48c613755.jpg",
        "https://static.displate.com/280x392/displate/2024-09-04/67bfaeb4abedbac6b22d5ebaff6d740f_f53e764f418d678801f757760e4ce12e.jpg",
      ],
    },
    {
      id: 3,
      title: "Valhalla",
      subtitle: "Assassin's Creed",
      avatar:
        "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/avatarStandard1730726236.jpg",
      images: [
        "https://static.displate.com/280x392/displate/2024-11-06/b067353de590d682d2bec50b391af720_482d75b37638c717c74188e6f7f3f143.jpg",
        "https://static.displate.com/280x392/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.jpg",
        "https://static.displate.com/280x392/displate/2024-11-06/b067353de590d682d2bec50b391af720_482d75b37638c717c74188e6f7f3f143.jpg",
        "https://static.displate.com/280x392/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.jpg",
      ],
    },
    {
      id: 4,
      title: "Hyrule",
      subtitle: "Legend of Zelda",
      avatar:
        "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/avatarStandard1730726236.jpg",
      images: [
        "https://static.displate.com/280x392/displate/2022-07-08/ddd1c00b44eb6080e0ba9e93c7b7f60f_c1dc78eb311e2310dbc4a9bd427e06e1.jpg",
        "https://static.displate.com/280x392/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.jpg",
        "https://static.displate.com/280x392/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.jpg",
        "https://static.displate.com/280x392/displate/2022-07-08/ddd1c00b44eb6080e0ba9e93c7b7f60f_c1dc78eb311e2310dbc4a9bd427e06e1.jpg",
      ],
    },
    {
      id: 5,
      title: "Skyrim",
      subtitle: "The Elder Scrolls",
      avatar:
        "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/avatarStandard1730726236.jpg",
      images: [
        "https://static.displate.com/280x392/displate/2023-02-09/a2e988195eb102065d5d917ecac4a1ea_65f8a3db8a79c2759ea3757dde239d53.jpg",
        "https://static.displate.com/280x392/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg",
        "https://static.displate.com/280x392/displate/2023-02-09/71049421c849d08851529ad62371e7a6_5dfcd9ee3c1b832f2e745ef734bdcf9b.jpg",
        "https://static.displate.com/280x392/displate/2023-02-09/a2e988195eb102065d5d917ecac4a1ea_65f8a3db8a79c2759ea3757dde239d53.jpg",
      ],
    },
    {
      id: 6,
      title: "Los Santos",
      subtitle: "GTA V",
      avatar:
        "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/avatarStandard1730726236.jpg",
      images: [
        "https://static.displate.com/280x392/displate/2022-07-08/ddd1c00b44eb6080e0ba9e93c7b7f60f_c1dc78eb311e2310dbc4a9bd427e06e1.jpg",
        "https://static.displate.com/280x392/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.jpg",
        "https://static.displate.com/280x392/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.jpg",
        "https://static.displate.com/280x392/displate/2022-07-08/ddd1c00b44eb6080e0ba9e93c7b7f60f_c1dc78eb311e2310dbc4a9bd427e06e1.jpg",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl mb-1">
          <span className="font-semibold">Hmmmm....</span> it looks like your
          cart is empty.
        </h1>
        <p className="text-2xl md:text-3xl mb-6">
          Find yourself a <span className="font-semibold">Displate!</span>
        </p>
        <Link
          to="/browse-collections"
          className="bg-[#1185ed] text-white px-4 font-semibold py-3 rounded-md text-lg transition duration-200"
        >
          Shop Now
        </Link>
      </div>
      <div className="w-full">
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-8">
          Check out our popular designs
        </h2>
        <div className="max-w-[1250px] mx-auto">
          <Slider {...sliderSettings}>
            {sampleDesigns.map((design) => (
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
                      <h3 className="font-bold text-left">{design.title}</h3>
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
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
    onClick={onClick}
  >
    <FiChevronRight size={24} />
  </button>
);

const PrevArrow = ({ onClick, sliderRef }) => {
  const isDisabled = sliderRef?.current?.innerSlider?.state.currentSlide === 0;

  return (
    <button
      className={`absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={isDisabled ? null : onClick}
      disabled={isDisabled}
    >
      <FiChevronLeft size={24} />
    </button>
  );
};

export default Cart;
