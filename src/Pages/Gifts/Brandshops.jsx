const Brandshops = () => {
  const games = [
    {
      name: "Cyberpunk 2077",
      link: "/licensed/cyberpunk-2077",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "The Witcher 3",
      link: "/licensed/the-witcher-3",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Elden Ring",
      link: "/licensed/elden-ring",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Red Dead Redemption 2",
      link: "/licensed/red-dead-redemption-2",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Assassin's Creed Valhalla",
      link: "/licensed/assassins-creed-valhalla",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Horizon Zero Dawn",
      link: "/licensed/horizon-zero-dawn",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "God of War",
      link: "/licensed/god-of-war",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Spider-Man",
      link: "/licensed/spider-man",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Final Fantasy XV",
      link: "/licensed/final-fantasy-xv",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-5 text-gray-800">
        Brandshops for Gamers:
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 w-full max-w-7xl">
        {games.map((game, index) => (
          <a
            key={index}
            href={game.link}
            className="block overflow-hidden rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300"
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
  );
};

export default Brandshops;
