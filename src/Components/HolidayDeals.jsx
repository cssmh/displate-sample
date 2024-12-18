import retina from "../assets/avatarRetina.webp"
const HolidayDeals = () => {
  const cardsData = [
    {
      image:
        "https://static.displate.com/brand/layout/7d8f9e17-a42a-4785-be8e-86be56cce4d2/logoStandard.png",
      title: "New World of Warcraft: Dragonflight collection",
      subtitle: "New Collection",
      description: "World Of Warcraft Avatar",
    },
    {
      image:
        "https://static.displate.com/brand/layout/7d8f9e17-a42a-4785-be8e-86be56cce4d2/logoStandard.png",
      title: "Cyberpunk 2077 Collection",
      subtitle: "Limited Edition",
      description: "Exclusive Cyberpunk Posters",
    },
    {
      image:
        "https://static.displate.com/brand/layout/7d8f9e17-a42a-4785-be8e-86be56cce4d2/logoStandard.png",
      title: "Marvel Superhero Collection",
      subtitle: "Best Seller",
      description: "Marvel Cinematic Universe Art",
    },
    {
      image:
        "https://static.displate.com/brand/layout/7d8f9e17-a42a-4785-be8e-86be56cce4d2/logoStandard.png",
      title: "Anime Classics Collection",
      subtitle: "Popular Picks",
      description: "Explore Classic Anime Art",
    },
    {
      image:
        "https://static.displate.com/brand/layout/7d8f9e17-a42a-4785-be8e-86be56cce4d2/logoStandard.png",
      title: "Star Wars Legacy Collection",
      subtitle: "Fan Favorite",
      description: "Iconic Star Wars Posters",
    },
    {
      image:
        "https://static.displate.com/brand/layout/7d8f9e17-a42a-4785-be8e-86be56cce4d2/logoStandard.png",
      title: "Nature & Landscape Collection",
      subtitle: "Peaceful Views",
      description: "Breathtaking Nature Scenes",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Gaming Legends Collection",
      subtitle: "Top Rated",
      description: "Art From Legendary Games",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Retro Vibes Collection",
      subtitle: "Vintage Art",
      description: "Retro & Nostalgic Posters",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Abstract Art Collection",
      subtitle: "Modern Designs",
      description: "Unique Abstract Posters",
    },
  ];

  return (
    <div className="flex max-w-7xl mx-auto bg-gray-50 my-6">
      <div className="w-[70%] relative h-[500px]">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          alt="Holiday Deals"
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 bg-black bg-opacity-40">
          <p className="w-[135px] mb-3 rounded-full bg-gradient-to-r from-[#00a1e9] to-[#3270ec] p-5 text-white text-center flex flex-col items-center justify-center">
            <span className="text-xs leading-tight">
              Make gross and &amp; extra up to
            </span>
            <span className="text-4xl font-extrabold leading-none">37%</span>
            <span className="text-2xl uppercase text-[#0fccd9] font-bold mt-1">
              off
            </span>
          </p>
          <p className="text-red-500 bg-red-200 text-xs rounded-md p-1 my-2">
            PROMO
          </p>
          <h2 className="text-white text-5xl font-bold mb-2">
            Holiday Deals Unlocked!
          </h2>
          <p className="text-white text-5xl font-bold mb-4">
            Use Code <span className="font-semibold">XMAS</span>
          </p>
          <button className="bg-[#1185ed] font-semibold py-2 px-6 rounded text-white transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
      <div className="w-[30%] h-[500px] overflow-hidden bg-white shadow-lg">
        <div className="h-full overflow-y-auto">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border-b hover:bg-gray-100 transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex flex-col">
                <p className="w-[100px] text-red-500 bg-red-200 text-xs rounded-md p-1 text-center">
                  {card.subtitle}
                </p>
                <h3 className="text-md font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600">{card.description}</p>
                <div className="flex items-center gap-2">
                  <img src={retina} className="w-8 rounded-full mt-1" alt="" />
                  <p>Diablo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidayDeals;
