import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
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
  ];

  return (
    <div className="my-10">
      <h1 className="font-semibold text-center text-4xl mb-6">
        Recently viewed
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-2 md:mx-0">
        {data.map((card) => (
          <Link to={`/displate/${card.id}`} key={card.id}>
            <div className="relative bg-white shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
              <img
                src={card.imageUrl}
                alt={`card-${card.id}`}
                className="w-full h-68 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <span className="absolute top-2 left-2 bg-[#341bc9] text-white px-2 py-1 text-xs font-semibold">
                Textra
              </span>
              <div className="absolute top-2 right-2 bg-[#6d5e63] rounded-full p-2 transition-opacity duration-300">
                <FiHeart
                  size={24}
                  className="text-white p-1 bg-gray-600 rounded-full"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
