import { useState, useEffect } from "react";
import {
  FiSearch,
  FiGift,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo_dark.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMegaMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMegaMenuVisible(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-[rgb(0,239,210)] py-2">
        <p className="text-sm font-semibold text-center px-3 md:px-12">
          🎁 Up to 37% OFF all non-limited Displates Code: XMAS Ends: 1 h : 46 m
          : 39 s
        </p>
      </div>
      <nav className="bg-white border-b py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <button
            className="text-gray-700 text-2xl md:hidden"
            onClick={toggleSidebar}
          >
            <FiMenu />
          </button>
          <div>
            <Link to="/" className="hover:text-blue-500">
              <img src={logo} alt="logo" />
            </Link>
            <p className="text-sm font-semibold text-right text-gray-800">
              Metal Posters
            </p>
          </div>
          {!scrolled ? (
            <div className="flex-1 mx-4 md:flex hidden">
              <div className="relative w-full max-w-3xl mx-auto">
                <FiSearch
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="Search for posters..."
                  className="w-full border border-black rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="flex-1 mx-4 md:flex hidden text-center">
              <div className="container mx-auto flex justify-center space-x-6 text-gray-700 text-sm font-medium">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-blue-500">
                    Browse Posters
                  </button>
                  {isMegaMenuVisible && (
                    <div className="absolute max-w-screen-lg w-screen bg-white shadow-lg p-6 grid grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Passion</h3>
                        <ul>
                          <li>Gaming</li>
                          <li>Sport</li>
                          <li>Anime & Manga</li>
                          <li>Space</li>
                          <li>Cars</li>
                          <li>Fantasy</li>
                          <li>Japanese & Asian</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Nature & Travel</h3>
                        <ul>
                          <li>Maps</li>
                          <li>Animals</li>
                          <li>Nature</li>
                          <li>Cityscapes</li>
                          <li>Landscapes</li>
                          <li>Travel</li>
                          <li>Floral</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Culture</h3>
                        <ul>
                          <li>Movies</li>
                          <li>Music</li>
                          <li>Retro</li>
                          <li>Funny</li>
                          <li>Comics</li>
                          <li>Tv Shows</li>
                          <li>Cartoons</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Interior Design</h3>
                        <ul>
                          <li>Inspirational</li>
                          <li>Vintage posters</li>
                          <li>Minimalistic</li>
                          <li>Pop art</li>
                          <li>Text art</li>
                          <li>Abstract</li>
                          <li>Paintings</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/collections"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Collections
                </Link>
                <Link
                  to="/discover-brands"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Discover Brands
                </Link>
                <Link
                  to="/limited-displates"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Limited Displates
                </Link>
                <Link
                  to="/accessories-gifts"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Accessories & Gifts
                </Link>
                <Link
                  to="/whats-a-displate"
                  className="hover:text-blue-500 transition duration-200"
                >
                  What&apos;s a Displate
                </Link>
              </div>
            </div>
          )}
          <div className="flex items-center space-x-6 text-gray-700">
            {scrolled && (
              <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
                <FiSearch size={20} />
                <span className="text-sm">Search</span>
              </div>
            )}
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiGift size={20} />
              <span className="text-sm">Gifts</span>
            </div>
            <div className="hidden md:flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiUser size={20} />
              <span className="text-sm">Club</span>
            </div>
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiHeart size={20} />
              <span className="text-sm">Wishlist</span>
            </div>
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiShoppingCart size={20} />
              <span className="text-sm">Cart</span>
            </div>
            <div className="hidden md:flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiUser size={20} />
              <span className="text-sm">Join</span>
            </div>
          </div>
        </div>
      </nav>
      {!scrolled && (
        <div className="py-4 border-b">
          <div className="container mx-auto flex justify-center space-x-6 text-gray-700 text-sm font-medium">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-blue-500">Browse Posters</button>
              {isMegaMenuVisible && (
                <div className="absolute max-w-screen-lg w-screen bg-white shadow-lg p-6 grid grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Passion</h3>
                    <ul>
                      <li>Gaming</li>
                      <li>Sport</li>
                      <li>Anime & Manga</li>
                      <li>Space</li>
                      <li>Cars</li>
                      <li>Fantasy</li>
                      <li>Japanese & Asian</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Nature & Travel</h3>
                    <ul>
                      <li>Maps</li>
                      <li>Animals</li>
                      <li>Nature</li>
                      <li>Cityscapes</li>
                      <li>Landscapes</li>
                      <li>Travel</li>
                      <li>Floral</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Culture</h3>
                    <ul>
                      <li>Movies</li>
                      <li>Music</li>
                      <li>Retro</li>
                      <li>Funny</li>
                      <li>Comics</li>
                      <li>Tv Shows</li>
                      <li>Cartoons</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Interior Design</h3>
                    <ul>
                      <li>Inspirational</li>
                      <li>Vintage posters</li>
                      <li>Minimalistic</li>
                      <li>Pop art</li>
                      <li>Text art</li>
                      <li>Abstract</li>
                      <li>Paintings</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/collections"
              className="hover:text-blue-500 transition duration-200"
            >
              Collections
            </Link>
            <Link
              to="/discover-brands"
              className="hover:text-blue-500 transition duration-200"
            >
              Discover Brands
            </Link>
            <Link
              to="/limited-displates"
              className="hover:text-blue-500 transition duration-200"
            >
              Limited Displates
            </Link>
            <Link
              to="/accessories-gifts"
              className="hover:text-blue-500 transition duration-200"
            >
              Accessories & Gifts
            </Link>
            <Link
              to="/whats-a-displate"
              className="hover:text-blue-500 transition duration-200"
            >
              What&apos;s a Displate
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
