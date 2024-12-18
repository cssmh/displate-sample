import { FaPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    imageUrl:
      "https://static.displate.com/230x320/displate/2022-03-04/eb653298d70aa8c0ec2a7ff6300b94f0_1d6ffab16444dab1b8aa4a7921375c41.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://static.displate.com/230x320/displate/2022-10-26/3b1aca2f1d903c2c9d7c29528460f274_2e5cc27326c68e8d799ddeddcee7b3e7.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://static.displate.com/230x320/displate/2024-11-04/9cfcff583f008a389f125bde7d3b92b1_c29d62ea5a5c4d36328e4ed752139655.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://static.displate.com/230x320/displate/2024-11-28/71666be277893b5ccac9124b6c12298b_d91b709bfe07272e302f4474d828e6a5.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://static.displate.com/230x320/displate/2022-03-04/5b87ff6460acd7bf8bb903d3c19ad8cb_bf138023c29b11f7c28768130e694fae.jpg",
  },
  {
    id: 6,
    imageUrl:
      "https://static.displate.com/230x320/displate/2022-10-26/f409e77b1599ee247d860b0310ea6aff_d366e9cb77eb38da16ccde69f085dda2.jpg",
  },
];

const SquidGame = () => {
  return (
    <div className="my-10">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto flex justify-between p-8">
          <div className="flex flex-col justify-center px-10 space-y-6">
            <h2 className="text-lg text-[#8d9ba1] font-bold">
              Brand of the Month
            </h2>
            <div className="flex items-center space-x-4">
              <img
                src="https://static.displate.com/brand/layout/7a2f2e29-c967-460e-8b34-3103a9e6401e/avatarRetina.jpg"
                alt="Squid Game Icon"
                className="w-16 h-16 border object-cover rounded-full"
              />
              <div>
                <h3 className="text-3xl text-white font-semibold">
                  Squid Game
                </h3>
                <p className="text-sm text-[#8c9aa0] mt-1">
                  8 collections | 68 artworks
                </p>
              </div>
            </div>
            <div className="mb-8">
              <p className="text-lg font-semibold text-white mb-4">
                Official Brandshop Squid Game by Netflix
              </p>
              <div className="flex space-x-4">
                <button className="font-semibold flex items-center gap-2 bg-[#1788ed] text-white py-2 px-4">
                  Follow
                  <FaPlus />
                </button>
                <button className="font-semibold text-[#1788ed]">
                  Visit Brand Shop
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-[600px] h-[340px] flex justify-center items-center mb-6">
            <video
              autoPlay
              loop
              muted
              controls
              className="absolute top-[-65px] w-full object-cover rounded-lg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="bg-[#272830] py-12 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.map((card) => (
            <Link to={`/displate/${card.id}`} key={card.id}>
              <div className="relative bg-white shadow-lg overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={`card-${card.id}`}
                  className="w-full h-72 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#341bc9] text-white px-2 py-1 text-xs font-semibold">
                  Textra
                </span>
                <div className="absolute top-2 right-2">
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
    </div>
  );
};

export default SquidGame;
