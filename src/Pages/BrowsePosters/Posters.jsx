import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Posters = () => {
    const data = [
      {
        id: 1,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.avif",
        label: "Bestselling",
      },
      {
        id: 2,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif",
        label: "Bestselling",
      },
      {
        id: 3,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-03-18/7f78f0d6cc17f834dc39a8b25823a53f_b210e2708025e6921547ac20850277d1.avif",
        label: "Bestselling",
      },
      {
        id: 4,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-03-18/7f78f0d6cc17f834dc39a8b25823a53f_b210e2708025e6921547ac20850277d1.avif",
        label: "Bestselling",
      },
      {
        id: 5,
        imageUrl:
          "https://static.displate.com/230x320/displate/2019-04-25/f1f11a1ea117d1257c670dd124547df1_df19dd10e9015250159f1ea7064edb1e.avif",
        label: "Bestselling",
      },
      {
        id: 6,
        imageUrl:
          "https://static.displate.com/230x320/displate/2023-02-09/4b29d0c61c49bc00ef473c5e5d6365fe_3947dc0bd54c512ce59f6e2d5afd7013.avif",
        label: "Bestselling",
      },
      {
        id: 7,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-11-18/b72765ac69aaeade349e8aec117280c2_baf065e495b70a307f354a3a67408cda.avif",
        label: "Bestselling",
      },
      {
        id: 8,
        imageUrl:
          "https://static.displate.com/230x320/displate/2022-07-08/f1d2678ede12938b363b6290e0e85b47_126003ad4518720b8455cfc00933c553.avif",
        label: "Bestselling",
      },
      {
        id: 9,
        imageUrl:
          "https://static.displate.com/230x320/displate/2022-07-08/04e6427613f41f03c91240e718f5fc6f_814bb503187ae110bbd896b432b5db84.avif",
        label: "Bestselling",
      },
      {
        id: 10,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-03-18/7f78f0d6cc17f834dc39a8b25823a53f_b210e2708025e6921547ac20850277d1.avif",
        label: "Bestselling",
      },
      {
        id: 11,
        imageUrl:
          "https://static.displate.com/230x320/displate/2024-03-18/7f78f0d6cc17f834dc39a8b25823a53f_b210e2708025e6921547ac20850277d1.avif",
        label: "Bestselling",
      },
      {
        id: 12,
        imageUrl:
          "https://static.displate.com/230x320/displate/2019-04-25/f1f11a1ea117d1257c670dd124547df1_df19dd10e9015250159f1ea7064edb1e.avif",
        label: "Bestselling",
      },
    ];

    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-2 md:mx-0 mt-6">
          {data.map((card) => (
            <Link to={`/displate/${card.id}`} key={card.id}>
              <div className="relative bg-white shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
                <img
                  src={card.imageUrl}
                  alt={`card-${card.id}`}
                  className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#341bc9] text-white px-2 py-1 text-xs font-semibold">
                  Textra
                </span>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiHeart
                    size={24}
                    className="text-white p-1 bg-gray-600 rounded-full"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mt-5">
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc56_5aa7211b84.jpg"
                alt="Space 1"
                className="w-full h-[210px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc66_8ea7dfeaf0.jpg"
                alt="Space 2"
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc47_77efa79d67.jpg"
                alt="Space 3"
                className="w-full h-[210px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc31_54f8ca250b.png"
                alt="Space 4"
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc72_b195bccf87.jpg"
                alt="Space 5"
                className="w-full h-[210px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 -mt-16">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc73_f9d308ca43.jpg"
                alt="Space 6"
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc34_180c07ade6.jpg"
                alt="Space 7"
                className="w-full h-[210px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 md:-mt-16">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc29_40f6056190.png"
                alt="Space 8"
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc18_3682f6fd41.jpg"
                alt="Space 9"
                className="w-full h-[210px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 md:-mt-16">
              <img
                src="https://cms-static-pages-assets.displate.com/ugc35_6cadc70a66.jpg"
                alt="Space 10"
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="my-8 flex items-center justify-center space-x-4">
          <button className="p-2 border-gray bg-gray-200 border rounded-full hover:bg-gray-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              max="93"
              className="w-16 p-2 text-center border border-gray-300 rounded-md"
              defaultValue="1"
            />
            <span className="text-gray-600">of 93</span>
          </div>
          <button className="p-2 border-gray bg-gray-200 border rounded-full hover:bg-gray-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    );
};

export default Posters;