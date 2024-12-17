import { useState, useEffect } from "react";
import {
  FiSearch,
  FiGift,
  FiHeart,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo_dark.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
      <nav className="bg-white border-b py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div>
            <Link to="/" className="hover:text-blue-500">
              <img src={logo} alt="logo" />
            </Link>
            <p className="text-sm font-semibold text-right text-gray-800">
              Metal Posters
            </p>
          </div>
          {!scrolled ? (
            <div className="flex-1 mx-4">
              <div className="relative w-full max-w-3xl mx-auto">
                <FiSearch
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="Search for posters..."
                  className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="flex-1 mx-4 text-center">
              <div className="container mx-auto flex justify-center space-x-6 text-gray-700 text-sm font-medium">
                <Link
                  to="/browse-posters"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Browse Posters
                </Link>
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
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
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
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiUser size={20} />
              <span className="text-sm">Join</span>
            </div>
          </div>
        </div>
        {!scrolled && (
          <div className="pt-4 border-t mt-1">
            <div className="container mx-auto flex justify-center space-x-6 text-gray-700 text-sm font-medium">
              <Link
                to="/browse-posters"
                className="hover:text-blue-500 transition duration-200"
              >
                Browse Posters
              </Link>
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
      </nav>
    </div>
  );
};

export default Navbar;
