const MatchMore = () => {
  const categories = [
    {
      name: "Gaming",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/gaming.avif",
    },
    {
      name: "Movies",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/movies.avif",
    },
    {
      name: "Manga & Anime",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/manga_anime.avif",
    },
    {
      name: "Fantasy",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/fantasy.avif",
    },
    {
      name: "TV Shows",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/tv_shows.avif",
    },
    {
      name: "Sport",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/sport.avif",
    },
    {
      name: "Music",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/music.avif",
    },
    {
      name: "Nature",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/nature.avif",
    },
    {
      name: "Travel",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/travel.avif",
    },
    {
      name: "Cars",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/cars.avif",
    },
    {
      name: "Animals",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/animals.avif",
    },
    {
      name: "Space",
      image:
        "https://assets-static-prod.displate.com/next-assets/public/images/homepage/categories/space.avif",
    },
  ];

  return (
    <div className="my-8 md:my-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Still looking for a match?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative w-full h-28 mx-auto cursor-pointer"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchMore;
