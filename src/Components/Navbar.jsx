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
  return (
    <div>
      <div className="bg-[#00efd2] py-2">
        <p className="text-sm font-semibold text-center px-3 md:px-12">
          🎁 Up to 37% OFF all non-limited Displates Code: XMAS Ends: 1 h : 46 m
          : 39 s
        </p>
      </div>
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div>
            <Link to="/" className="hover:text-blue-500">
              <img src={logo} alt="logo" />
            </Link>
            <p className="text-sm font-semibold text-right text-gray-800">Metal Posters</p>
          </div>

          {/* Search Box */}
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

          {/* Right Side Icons and Links */}
          <div className="flex items-center space-x-6 text-gray-700">
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiGift size={20} />
              <span className="text-sm">Gifts</span>
            </div>

            {/* Club */}
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiUser size={20} />
              <span className="text-sm">Club</span>
            </div>

            {/* Wishlist */}
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiHeart size={20} />
              <span className="text-sm">Wishlist</span>
            </div>

            {/* Cart */}
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiShoppingCart size={20} />
              <span className="text-sm">Cart</span>
            </div>

            {/* Join (with User Icon) */}
            <div className="flex flex-col items-center space-y-1 hover:text-blue-500 cursor-pointer">
              <FiUser size={20} />
              <span className="text-sm">Join</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
