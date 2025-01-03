import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const MorePosters = () => {
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
        "https://static.displate.com/230x320/displate/2019-04-25/f1f11a1ea117d1257c670dd124547df1_df19dd10e9015250159f1ea7064edb1e.avif",
      label: "Bestselling",
    },
    {
      id: 12,
      imageUrl:
        "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif",
      label: "Bestselling",
    },
  ];

  return (
    <div className="mt-3 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-2 md:mx-0">
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
      <div className="flex justify-center mt-10">
        <button className="font-bold text-[#449ff1] border border-[#449ff1] bg-white px-4 shadow-md py-2 rounded-md">
          See more posters
        </button>
      </div>
      <div className="grid mt-32 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-2 md:mx-0">
        {data.slice(0,6).map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={card.imageUrl}
              alt={`card-${card.id}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorePosters;
