import { FiHeart } from "react-icons/fi";
import { PiTelevisionFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const TVShows = () => {
  const games = [
    {
      name: "Cyberpunk 2077",
      link: "/licensed/cyberpunk-2077",
      image:
        "https://static.displate.com/brand/layout/340334ea-d696-4e68-85e7-9636d026cf77/catalogCoverStandard1712748346.jpg",
    },
    {
      name: "The Witcher 3",
      link: "/licensed/the-witcher-3",
      image:
        "https://static.displate.com/brand/layout/f0969419-d32d-4e36-beea-25df764a6739/catalogCoverStandard.jpg",
    },
    {
      name: "Elden Ring",
      link: "/licensed/elden-ring",
      image:
        "https://static.displate.com/brand/layout/c151898e-6a7c-41f9-bf38-85b5091a6ca6/catalogCoverStandard1708100790.jpg",
    },
    {
      name: "Red Dead Redemption 2",
      link: "/licensed/red-dead-redemption-2",
      image:
        "https://static.displate.com/brand/layout/1de63c25-487e-465f-8c3c-9b5d55b7adfb/catalogCoverStandard.jpg",
    },
    {
      name: "Assassin's Creed Valhalla",
      link: "/licensed/assassins-creed-valhalla",
      image:
        "https://static.displate.com/brand/layout/23369eeb-8d6b-40dc-a4e4-465d6d14ad50/catalogCoverStandard.jpg",
    },
    {
      name: "Horizon Zero Dawn",
      link: "/licensed/horizon-zero-dawn",
      image:
        "https://static.displate.com/brand/layout/6f509bf5-64b3-42de-85e6-32df23b6e26c/catalogCoverStandard.jpg",
    },
    {
      name: "God of War",
      link: "/licensed/god-of-war",
      image:
        "https://static.displate.com/brand/layout/a3f9dacd-3d67-4c07-a6f8-406b7ddfd84a/catalogCoverStandard.jpg",
    },
    {
      name: "Spider-Man",
      link: "/licensed/spider-man",
      image:
        "https://static.displate.com/brand/layout/3134386d-c57f-4bb8-882e-6c4aee42dd49/catalogCoverStandard.jpg",
    },
    {
      name: "Final Fantasy XV",
      link: "/licensed/final-fantasy-xv",
      image:
        "https://static.displate.com/brand/layout/799c0af2-b45a-4a77-9c1b-11ce50dcfd93/catalogCoverStandard1730726236.jpg",
    },
  ];

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
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-6">
        <div className="w-full lg:w-[30%] px-6 lg:px-10 space-y-3">
          <div className="text-5xl md:text-5xl">
            <PiTelevisionFill />
          </div>
          <p className="font-semibold text-xl">Gifts for a</p>
          <h1 className="text-4xl md:text-5xl font-medium">TV Shows</h1>
          <h1 className="text-4xl md:text-5xl font-medium">Addict</h1>
          <div className="mt-6">
            <Link
              to="/posters?category=TV-Shows"
              className="bg-white text-lg font-semibold text-[#1185ed]"
            >
              See all Anime posters
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[70%] relative">
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 py-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-5 text-gray-800">
          Brandshops for Gamers:
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 w-full max-w-7xl">
          {games.map((game, index) => (
            <a
              key={index}
              href={game.link}
              className="block overflow-hidden rounded-lg border border-[#d2d2d2] hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-auto object-cover"
              />
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="font-bold text-[#449ff1] border border-[#449ff1] bg-white px-4 py-2 shadow-md rounded-md">
            See all gaming brands
          </button>
        </div>
      </div>
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
          {data.slice(0, 6).map((card) => (
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
    </div>
  );
};

export default TVShows;
