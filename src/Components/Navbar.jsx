import { useState, useEffect } from "react";
import {
  FiSearch,
  FiGift,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import logo from "../assets/logo_dark.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCuttlefish, FaRegCheckCircle } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubSidebarOpen, setSubSidebarOpen] = useState(false);
  const toggleSubSidebar = () => setSubSidebarOpen(!isSubSidebarOpen);
  const loc = useLocation();
  
  const showOffer =
    loc.pathname === "/" ||
    loc.pathname === "/browse-collections" ||
    loc.pathname === "lp/gifts";

  const [isClubHoverVisible, setIsClubHoverVisible] = useState(false);
  const handleMouseEnterClub = () => setIsClubHoverVisible(true);
  const handleMouseLeaveClub = () => setIsClubHoverVisible(false);
  const [isJoinHoverVisible, setIsJoinHoverVisible] = useState(false);
  const handleMouseEnterJoin = () => setIsJoinHoverVisible(true);
  const handleMouseLeaveJoin = () => setIsJoinHoverVisible(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsMegaMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMegaMenuVisible(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
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
      {/* {showOffer && ( */}
      <div className="bg-[rgb(0,239,210)] py-2">
        <p className="text-sm font-semibold text-center px-3 md:px-12">
          🎁 Up to 37% OFF all non-limited Displates Code: XMAS Ends: 1 h : 46 m
          : 39 s
        </p>
      </div>
      {/* )} */}
      <nav className="bg-white border-b border-[#d2d2d2] py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <button
            className="text-gray-700 text-2xl md:hidden"
            onClick={toggleSidebar}
          >
            <FiMenu />
          </button>
          <div>
            <Link to="/" className="hover:text-blue-500">
              <img src={logo} alt="logo" className="w-[90%] ml-auto" />
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
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-full border border-black rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
                {!inputValue && (
                  <span className="absolute left-12 top-1/2 transform -translate-y-1/2 flex items-center text-black pointer-events-none">
                    <span>Search for&nbsp;</span>
                    <Typewriter
                      options={{
                        strings: [
                          "posters",
                          "metal posters",
                          "design",
                          "artworks",
                          "brands",
                          "Displate",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                )}
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
                    <div className="fixed text-left top-[114px] left-0 w-full bg-white shadow-2xl p-11 grid grid-cols-7 gap-6">
                      <div className="text-base">
                        <h3 className="font-bold mb-2">Passion</h3>
                        <ul className="space-y-2 text-black">
                          <li className="font-normal">Gaming</li>
                          <li className="font-normal">Sport</li>
                          <li className="font-normal">Anime & Manga</li>
                          <li className="font-normal">Space</li>
                          <li className="font-normal">Cars</li>
                          <li className="font-normal">Fantasy</li>
                          <li className="font-normal">Japanese & Asian</li>
                        </ul>
                      </div>
                      <div className="text-base">
                        <h3 className="font-bold mb-2">Nature & Travel</h3>
                        <ul className="space-y-2 text-black">
                          <li className="font-normal">Maps</li>
                          <li className="font-normal">Animals</li>
                          <li className="font-normal">Nature</li>
                          <li className="font-normal">Cityscapes</li>
                          <li className="font-normal">Landscapes</li>
                          <li className="font-normal">Travel</li>
                          <li className="font-normal">Floral</li>
                        </ul>
                      </div>
                      <div className="text-base">
                        <h3 className="font-bold mb-2">Culture</h3>
                        <ul className="space-y-2 text-black">
                          <li className="font-normal">Movies</li>
                          <li className="font-normal">Music</li>
                          <li className="font-normal">Retro</li>
                          <li className="font-normal">Funny</li>
                          <li className="font-normal">Comics</li>
                          <li className="font-normal">Tv Shows</li>
                          <li className="font-normal">Cartoons</li>
                        </ul>
                      </div>
                      <div className="text-base">
                        <h3 className="font-bold mb-2">Interior Design</h3>
                        <ul className="space-y-2 text-black">
                          <li className="font-normal">Inspirational</li>
                          <li className="font-normal">Vintage posters</li>
                          <li className="font-normal">Minimalistic</li>
                          <li className="font-normal">Pop art</li>
                          <li className="font-normal">Text art</li>
                          <li className="font-normal">Abstract</li>
                          <li className="font-normal">Paintings</li>
                        </ul>
                      </div>
                      <div className="col-span-3 rounded-lg text-white bg-gradient-to-r from-violet-500 to-violet-400 p-8">
                        <h1 className="text-3xl font-bold">Displate Textra</h1>
                        <p className="text-sm">3D-textured metal posters</p>
                        <div className="mt-3">
                          <p className="flex text-white items-center gap-2">
                            <FaRegCheckCircle />
                            <span>Selective matte & gloss finish</span>
                          </p>
                          <p className="flex text-white items-center gap-2">
                            <FaRegCheckCircle />
                            <span>Outstanding 3D details</span>
                          </p>
                          <p className="flex text-white items-center gap-2">
                            <FaRegCheckCircle />
                            <span>Added depth and texture</span>
                          </p>
                          <p className="flex text-white items-center gap-2">
                            <FaRegCheckCircle />
                            <span>Selected art now in size L!</span>
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <button className="bg-white text-black font-semibold py-2 px-4 rounded shadow hover:bg-gray-100">
                            See More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/collections"
                  className="hover:text-blue-500 transition duration-200 py-"
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
          <div className="flex items-center space-x-2 md:space-x-5 text-gray-700">
            {scrolled && (
              <div className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
                <FiSearch size={20} />
                <span className="text-sm">Search</span>
              </div>
            )}
            <Link
              to="/lp/gifts"
              className="flex flex-col items-center hover:text-blue-500 cursor-pointer"
            >
              <FiGift size={20} />
              <span className="text-sm">Gifts</span>
            </Link>
            <Link
              to="/join-displate-club"
              className="hidden md:flex flex-col items-center hover:text-blue-500 cursor-pointer relative"
              onMouseEnter={handleMouseEnterClub}
              onMouseLeave={handleMouseLeaveClub}
            >
              <FaCuttlefish size={20} />
              <span className="text-sm">Club</span>
              {isClubHoverVisible && (
                <div className="absolute top-[100%] -right-16 mt-2 bg-white text-black shadow-lg rounded-lg p-3 w-80 z-10">
                  <p className="flex text-[12px] items-center gap-2">
                    <FaRegCheckCircle className="text-blue-500" />
                    <span>Free shipping, discounts and storage sleeve</span>
                  </p>
                  <p className="flex text-[12px] items-center gap-2">
                    <FaRegCheckCircle className="text-blue-500" />
                    <span>Free Displates every 12 months</span>
                  </p>
                  <p className="flex text-[12px] items-center gap-2">
                    <FaRegCheckCircle className="text-blue-500" />
                    <span>Early Access to Limited Editions</span>
                  </p>
                  <p className="flex text-[12px] items-center gap-2">
                    <FaRegCheckCircle className="text-blue-500" />
                    <span>Tool to create Displates from your own photos</span>
                  </p>
                </div>
              )}
            </Link>
            <Link
              to="/wishlist"
              className="flex flex-col items-center hover:text-blue-500 cursor-pointer"
            >
              <FiHeart size={20} />
              <span className="text-sm">Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className="flex flex-col items-center hover:text-blue-500 cursor-pointer"
            >
              <FiShoppingCart size={20} />
              <span className="text-sm">Cart</span>
            </Link>
            <div
              className="hidden md:flex flex-col items-center hover:text-blue-500 cursor-pointer relative"
              onMouseEnter={handleMouseEnterJoin}
              onMouseLeave={handleMouseLeaveJoin}
            >
              <Link to="/auth/signin">
                <FiUser size={20} />
                <span className="text-sm">Join</span>
              </Link>
              {isJoinHoverVisible && (
                <div className="absolute top-[80%] -right-8 mt-2 bg-white text-black shadow-lg rounded-lg w-64 z-10 p-4">
                  <Link to="/auth/signin">
                    {" "}
                    <button className="bg-blue-500 rounded-lg text-white font-semibold text-center p-3 w-full">
                      Log in
                    </button>
                  </Link>
                  <p className="text-sm mt-2">
                    Don&apos;t have an account yet?{" "}
                    <span className="text-blue-600 font-semibold">Sign up</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {!scrolled && (
        <div className="py-4 hidden lg:block border-b border-[#d2d2d2]">
          <div className="container mx-auto flex justify-center space-x-6 text-gray-700 text-sm font-medium">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-blue-500">Browse Posters</button>
              {isMegaMenuVisible && (
                <div className="fixed text-left top-[118px] left-0 w-full bg-white shadow-2xl p-11 grid grid-cols-7 gap-6">
                  <div className="text-base">
                    <h3 className="font-bold mb-2">Passion</h3>
                    <ul className="space-y-2 text-black">
                      <li className="font-normal">Gaming</li>
                      <li className="font-normal">Sport</li>
                      <li className="font-normal">Anime & Manga</li>
                      <li className="font-normal">Space</li>
                      <li className="font-normal">Cars</li>
                      <li className="font-normal">Fantasy</li>
                      <li className="font-normal">Japanese & Asian</li>
                    </ul>
                  </div>
                  <div className="text-base">
                    <h3 className="font-bold mb-2">Nature & Travel</h3>
                    <ul className="space-y-2 text-black">
                      <li className="font-normal">Maps</li>
                      <li className="font-normal">Animals</li>
                      <li className="font-normal">Nature</li>
                      <li className="font-normal">Cityscapes</li>
                      <li className="font-normal">Landscapes</li>
                      <li className="font-normal">Travel</li>
                      <li className="font-normal">Floral</li>
                    </ul>
                  </div>
                  <div className="text-base">
                    <h3 className="font-bold mb-2">Culture</h3>
                    <ul className="space-y-2 text-black">
                      <li className="font-normal">Movies</li>
                      <li className="font-normal">Music</li>
                      <li className="font-normal">Retro</li>
                      <li className="font-normal">Funny</li>
                      <li className="font-normal">Comics</li>
                      <li className="font-normal">Tv Shows</li>
                      <li className="font-normal">Cartoons</li>
                    </ul>
                  </div>
                  <div className="text-base">
                    <h3 className="font-bold mb-2">Interior Design</h3>
                    <ul className="space-y-2 text-black">
                      <li className="font-normal">Inspirational</li>
                      <li className="font-normal">Vintage posters</li>
                      <li className="font-normal">Minimalistic</li>
                      <li className="font-normal">Pop art</li>
                      <li className="font-normal">Text art</li>
                      <li className="font-normal">Abstract</li>
                      <li className="font-normal">Paintings</li>
                    </ul>
                  </div>
                  <div className="col-span-3 rounded-lg text-white bg-gradient-to-r from-violet-500 to-violet-400 p-8">
                    <h1 className="text-3xl font-bold">Displate Textra</h1>
                    <p className="text-sm">3D-textured metal posters</p>
                    <div className="mt-3">
                      <p className="flex text-white items-center gap-2">
                        <FaRegCheckCircle />
                        <span>Selective matte & gloss finish</span>
                      </p>
                      <p className="flex text-white items-center gap-2">
                        <FaRegCheckCircle />
                        <span>Outstanding 3D details</span>
                      </p>
                      <p className="flex text-white items-center gap-2">
                        <FaRegCheckCircle />
                        <span>Added depth and texture</span>
                      </p>
                      <p className="flex text-white items-center gap-2">
                        <FaRegCheckCircle />
                        <span>Selected art now in size L!</span>
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-white text-black font-semibold py-2 px-4 rounded shadow hover:bg-gray-100">
                        See More
                      </button>
                    </div>
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
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto`}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 bg-white z-10">
          <Link to="/" onClick={toggleSidebar}>
            <img src={logo} alt="logo" className="h-8 mt-3" />
            <p className="text-sm font-semibold text-right text-gray-800">
              Metal Posters
            </p>
          </Link>
          <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
            <FiX />
          </button>
        </div>
        <div className="flex items-center p-4 border-b-2 text-gray-700">
          <FiUser className="text-xl mr-2" />
          <span className="font-medium">
            Hello!{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Log in
            </Link>{" "}
            or{" "}
            <Link to="/signup" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </span>
        </div>
        <div className="flex flex-col space-y-3 px-4 text-gray-700 mb-8">
          <Link
            to="/"
            onClick={toggleSidebar}
            className="border-b-2 py-2 font-medium"
          >
            Home
          </Link>
          {[
            { path: "/browse-posters", label: "Browse Posters" },
            { path: "/collections", label: "Collections" },
            { path: "/discover-brands", label: "Discover Brands" },
            { path: "/limited-displates", label: "Limited Displates" },
            { path: "/accessories-gifts", label: "Accessories & Gifts" },
          ].map((route) => (
            <button
              key={route.path}
              onClick={toggleSubSidebar}
              className="flex items-center justify-between border-b-2 pb-3 font-medium w-full text-left"
            >
              {route.label}
              <IoIosArrowForward className="text-2xl text-gray-500" />
            </button>
          ))}
          <Link
            to="/whats-a-displate"
            onClick={toggleSidebar}
            className="border-b-2 pb-3 font-medium"
          >
            What&apos;s a Displate
          </Link>
          <Link
            to="/displate-club"
            onClick={toggleSidebar}
            className="border-b-2 pb-3 font-medium"
          >
            Displate Club
          </Link>
          {[
            { path: "/support", label: "Support" },
            { path: "/about-us", label: "About Us" },
          ].map((route) => (
            <button
              key={route.path}
              onClick={toggleSubSidebar}
              className="flex items-center justify-between border-b-2 pb-3 font-medium w-full text-left"
            >
              {route.label}
              <IoIosArrowForward className="text-2xl text-gray-500" />
            </button>
          ))}
          <Link
            to="/sell-your-art"
            onClick={toggleSidebar}
            className="border-b-2 pb-3 font-medium"
          >
            Sell Your Art
          </Link>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
          isSubSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto`}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 bg-white z-10">
          <button onClick={toggleSubSidebar} className="text-gray-700 text-2xl">
            <IoIosArrowBack />
          </button>
          <Link to="/" className="text-center mt-3">
            <img src={logo} alt="logo" className="h-8" />
            <p className="text-sm font-semibold text-gray-800">Metal Posters</p>
          </Link>
          <button onClick={toggleSubSidebar} className="text-gray-700 text-2xl">
            <FiX />
          </button>
        </div>
        <div className="py-4 text-gray-700">
          <div className="flex flex-col space-y-3 px-4 text-gray-700 mb-2">
            <p className="border-b-2 font-bold py-2">Passion</p>
            {[
              { path: "/gaming", label: "Gaming" },
              { path: "/sports", label: "Sports" },
              { path: "/anime", label: "Anime & Manga" },
              { path: "/limited-displates", label: "Space" },
              { path: "/cars", label: "Cars" },
              { path: "/fantasy", label: "Fantasy" },
            ].map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="flex items-center justify-between border-b-2 pb-3 font-medium w-full text-left"
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3 px-4 text-gray-700 mb-8">
            <p className="border-b-2 font-bold py-2">Nature & Travel</p>
            {[
              { path: "/Maps", label: "Maps" },
              { path: "/Animals", label: "Animals" },
              { path: "/Nature", label: "Nature" },
              { path: "/cityscapes", label: "Cityscapes" },
              { path: "/Landscapes", label: "Landscapes" },
              { path: "/Travel", label: "Travel" },
              { path: "/floral", label: "Floral" },
            ].map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="flex items-center justify-between border-b-2 pb-3 font-medium w-full text-left"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
