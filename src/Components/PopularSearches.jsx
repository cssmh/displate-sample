import { Link } from "react-router-dom";
import { useState } from "react";

const PopularSearches = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="pb-2">
              <Link to="/categories/anime-posters" className="hover:underline">
                Anime posters
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/categories/movie-posters" className="hover:underline">
                Movie posters
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/categories/horror-posters" className="hover:underline">
                Horror posters
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/categories/halloween-posters"
                className="hover:underline"
              >
                Halloween posters
              </Link>
            </li>
            {showMore && (
              <>
                <li className="pb-2">
                  <Link
                    to="/categories/scifi-posters"
                    className="hover:underline"
                  >
                    Sci-fi posters
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    to="/categories/fantasy-posters"
                    className="hover:underline"
                  >
                    Fantasy posters
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Brands</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="pb-2">
              <Link to="/brands/star-wars-posters" className="hover:underline">
                Star Wars posters
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/brands/cyberpunk-2077-posters"
                className="hover:underline"
              >
                Cyberpunk 2077 posters
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/brands/marvel-posters" className="hover:underline">
                Marvel posters
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/brands/dnd-posters" className="hover:underline">
                DnD posters
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/brands/jurassic-park-posters"
                className="hover:underline"
              >
                Jurassic Park posters
              </Link>
            </li>
            {showMore && (
              <>
                <li className="pb-2">
                  <Link to="/brands/batman-posters" className="hover:underline">
                    Batman posters
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/brands/lotr-posters" className="hover:underline">
                    LOTR posters
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Searches</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="pb-2">
              <Link to="/searches/cat-posters" className="hover:underline">
                Cat posters
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/searches/art-deco-posters" className="hover:underline">
                Art deco posters
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/searches/aesthetic-posters"
                className="hover:underline"
              >
                Aesthetic posters
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/searches/beer-posters" className="hover:underline">
                Beer posters
              </Link>
            </li>
            {showMore && (
              <>
                <li className="pb-2">
                  <Link
                    to="/searches/minimalist-posters"
                    className="hover:underline"
                  >
                    Minimalist posters
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    to="/searches/vintage-posters"
                    className="hover:underline"
                  >
                    Vintage posters
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Artworks</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="pb-2">
              <Link
                to="/artworks/spiderverse-poster"
                className="hover:underline"
              >
                Spiderverse poster
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/artworks/revenge-of-the-sith-poster"
                className="hover:underline"
              >
                Revenge Of The Sith poster
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/artworks/infinity-war-poster"
                className="hover:underline"
              >
                Infinity War poster
              </Link>
            </li>
            <li className="pb-2">
              <Link
                to="/artworks/memento-mori-definition-poster"
                className="hover:underline"
              >
                Memento Mori Definition poster
              </Link>
            </li>
            {showMore && (
              <>
                <li className="pb-2">
                  <Link to="/artworks/dune-poster" className="hover:underline">
                    Dune poster
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    to="/artworks/avatar-poster"
                    className="hover:underline"
                  >
                    Avatar poster
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={toggleShowMore}
          className="text-[#1b8aee] font-bold"
        >
          {showMore ? "Hide" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default PopularSearches;
