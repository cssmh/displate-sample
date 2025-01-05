import { useState } from "react";
import { FaCopy, FaExclamation, FaHeart, FaSearchPlus } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import discover from "../assets/discover.svg";
import amex from "../assets/amex.svg";
import gpay from "../assets/gpay.svg";
import applepay from "../assets/applepay.svg";
import paypal2 from "../assets/paypal2.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiMountainRoad } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const DisplateDetails = () => {
  const [activeTab, setActiveTab] = useState("Matte");
  const [size, setSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(
    "https://static.displate.com/230x320/displate/2024-10-29/d0d9014a05de31c07beff9fe2f5c2962_a541c51b3c30e670c7d69684ceaee944.avif"
  );
  const [frameColor, setFrameColor] = useState("black");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const images = [
    "/images/main.jpg",
    "/images/thumb1.jpg",
    "/images/thumb2.jpg",
    "/images/thumb3.jpg",
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSizeChange = (size) => {
    setSize(size);
  };

  return (
    <div className="max-w-7xl mx-auto my-3">
      <Helmet>
        <title>Arcane Season 2 | Posters</title>
      </Helmet>
      <h1 className="mb-3 text-sm text-gray-600">
        Home Page &gt; Arcane &gt; Key Arts &gt; Arcane Season 2
        <span className="text-white font-semibold">Crossing the Bridge</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <div className="relative rounded-lg bg-black w-full lg:w-[70%]">
          <div className="flex items-center h-screen">
            <img
              src={selectedImage}
              alt="Artwork"
              className={`w-32 mx-auto h-auto border-4 transition-all duration-300 ${
                frameColor === "black"
                  ? "border-black"
                  : frameColor === "white"
                  ? "border-white"
                  : frameColor === "gold"
                  ? "border-[#d4af37]"
                  : frameColor === "gray"
                  ? "border-gray-500"
                  : "border-black"
              }`}
            />
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
              <FaHeart />
            </button>
            <button className="bg-white p-2 rounded-full text-black hover:bg-gray-300">
              <FaSearchPlus />
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 cursor-pointer border-2 border-transparent hover:border-white"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-xl font-semibold">Crossing the Bridge</h1>
          <div>
            <p className="w-[350px]">
              {isExpanded
                ? "In this poignant artwork from Arcane Season 2, the bond between Jinx and Vi is palpable. The contrast of their vibrant hair and intense gazes speaks volumes about their complicated relationship, leaving the viewer to ponder the depths of their connection. Riot Games' distinctive visual style is beautifully captured in the painterly details and dramatic lighting."
                : "In this poignant artwork from Arcane Season...  "}
            </p>
            <button className="text-[#1185ed] font-bold" onClick={toggleText}>
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
          <div className="flex items-center mb-2">
            <p className="mr-2">4.7/5</p>
            <div className="flex text-lg text-green-500">
              {[...Array(5)].map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <p className="ml-2 text-sm text-[#1185ed] font-bold">
              (15,439 reviews)
            </p>
          </div>
          <div className="mb-2 group">
            <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
              Select Product Type
              <span>
                <div className="drawer drawer-end z-50">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content flex">
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button text-[#1185ed] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu font-normal bg-base-200 text-base-content min-h-full w-80 p-4">
                     <div>
                      
                     </div>
                    </ul>
                  </div>
                </div>
              </span>
            </h2>
            <div className="w-2/3 bg-[#eceff4] py-1 rounded-full mb-6">
              <button
                onClick={() => handleTabChange("Matte")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "Matte"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                Matte
              </button>
              <button
                onClick={() => handleTabChange("Gloss")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "Gloss"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                Gloss
              </button>
              <button
                onClick={() => handleTabChange("Textra")}
                className={`p-2 hover:text-[#1788ed] text-sm mx-2 font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "Textra"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                Textra
              </button>
            </div>
          </div>
          <div className="mb-2 group">
            <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
              Choose Size
              <span>
                <div className="drawer drawer-end z-50">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content flex">
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button text-[#1185ed] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                      <li>
                        <a>Sidebar Item 1</a>
                      </li>
                      <li>
                        <a>Sidebar Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
            </h2>
            <div className="w-[65%] bg-[#eceff4] py-1 rounded-full mb-6">
              <button
                onClick={() => handleSizeChange("M")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  size === "M"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                M 45 * 32cm
              </button>
              <button
                onClick={() => handleSizeChange("L")}
                className={`p-2 hover:text-[#1788ed] mx-2 font-medium transition-all duration-300 ease-in-out ${
                  size === "L"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                L
              </button>
              <button
                onClick={() => handleSizeChange("XL")}
                className={`p-2 hover:text-[#1788ed] text-sm mx-2 font-medium transition-all duration-300 ease-in-out ${
                  size === "XL"
                    ? "text-[#1788ed] bg-white px-3 rounded-full"
                    : "text-[#4f565d]"
                }`}
              >
                XL
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Add Frame</h2>
            <div className="flex gap-4">
              {["black", "white", "gold", "gray", "natural"].map(
                (color, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-full border-2 border-${
                      color === "white" ? "green-500" : color
                    } hover:opacity-80`}
                    style={{
                      backgroundColor: color === "natural" ? "#d1b49f" : color,
                    }}
                    onClick={() => setFrameColor(color)}
                  ></button>
                )
              )}
            </div>
          </div>
          <p className="text-2xl font-semibold">$59</p>
          <div className="my-5 bg-[#fff6eb] p-4">
            <div className="text-sm flex items-center gap-2 mb-4">
              <LuTicketPercent className="text-yellow-500 text-xl -rotate-45" />{" "}
              Sale ends in{" "}
              <span className="font-semibold">1d : 3h : 23m : 10s</span>
            </div>
            <p className="font-semibold text-sm">
              <span className="font-bold text-base">15% OFF</span> on 1-2
              Displates <span className="text-red-600">$50.15</span>{" "}
              <span className="line-through">$59</span>
            </p>
            <p className="font-semibold text-sm">
              <span className="font-bold text-base">25% OFF</span> on 3+
              Displates <span className="text-red-600">$44.25</span>{" "}
              <span className="line-through">$59</span>
            </p>
            <div className="mt-2 flex items-center gap-2 bg-gray-100 rounded-md">
              <p>
                Use code <span className="font-bold">SAVE25</span>
              </p>
              <button onClick={() => navigator.clipboard.writeText("SAVE25")}>
                <FaCopy className="text-blue-500" />
              </button>
            </div>
          </div>
          <p className="w-[350px] bg-[#ebf8ff] p-4 flex gap-2">
            <FaExclamation /> Oops! This Displate is not available in your
            country right now. Save it to your wishlist for later and explore
            more similar art!
          </p>
          <div className="grid grid-cols-4 md:grid-cols-6 my-4 border-y border-y-base-300 py-2 gap-2">
            <img src={visa} alt="Visa" className="w-12 h-10 object-contain" />
            <img
              src={mastercard}
              alt="Mastercard"
              className="w-12 h-10 object-contain"
            />
            <img
              src={discover}
              alt="Discover"
              className="w-12 h-10 object-contain"
            />
            <img src={amex} alt="Amex" className="w-12 h-10 object-contain" />
            <img
              src={gpay}
              alt="Google Pay"
              className="w-12 h-10 object-contain"
            />
            <img
              src={applepay}
              alt="Apple Pay"
              className="w-12 h-10 object-contain"
            />
            <img
              src={paypal2}
              alt="PayPal"
              className="w-12 h-10 object-contain"
            />
          </div>
          <div className="my-2">
            <label htmlFor="drawer-about">
              <div className="group flex justify-between border-b border-base-300">
                <div className="flex items-center mb-4">
                  <span className="text-xl mr-2">
                    <i className="fa fa-info-circle text-gray-600"></i>
                  </span>
                  <p className="font-bold group-hover:text-[#1185ed] flex items-center gap-2">
                    <AiOutlineExclamationCircle className="text-xl" />
                    About this poster
                  </p>
                </div>
                <p className="group-hover:text-[#1185ed] cursor-pointer">
                  <FiPlus className="text-xl" />
                </p>
              </div>
            </label>
            <div className="drawer drawer-end z-50">
              <input
                id="drawer-about"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">{/* Page content here */}</div>
              <div className="drawer-side">
                <label
                  htmlFor="drawer-about"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <li>
                    <p>Artist: Arcane</p>
                    <p>Collection: Key Arts</p>
                    <p>Material: Stainless steel</p>
                    <p>Size: 45 cm / 32 cm</p>
                    <p>Thickness: 3,50mm</p>
                    <p>Weight: 0,70kg</p>
                    <p>Mounting: Magnet (no tools)</p>
                    <p>Included in the package:</p>
                    <ul>
                      <li>1 metal poster (45 cm / 32 cm)</li>
                      <li>1 protective leaf</li>
                      <li>1 magnet</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <label htmlFor="drawer-shipping">
              <div className="group flex justify-between border-b pt-4 border-base-300">
                <div className="flex items-center mb-4">
                  <span className="text-xl mr-2">
                    <i className="fa fa-info-circle text-gray-600"></i>
                  </span>
                  <p className="font-bold group-hover:text-[#1185ed] flex items-center gap-2">
                    <MdOutlineLocalShipping className="text-xl" />
                    Shipping and a 100 days return
                  </p>
                </div>
                <p className="group-hover:text-[#1185ed] cursor-pointer">
                  <FiPlus className="text-xl" />
                </p>
              </div>
            </label>
            <div className="drawer drawer-end z-50">
              <input
                id="drawer-shipping"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">{/* Page content here */}</div>
              <div className="drawer-side">
                <label
                  htmlFor="drawer-shipping"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <li>
                    <p>
                      Time: Expected delivery time is 5-6 business days from
                      placing your order.
                    </p>
                    <p>
                      Returns: You may return a Displate within 100 calendar
                      days of delivery for a 100% refund (Displate needs to be
                      sent at the customer&apos;s cost).
                    </p>
                    <p>
                      Gift-ready packaging: Displates arrive in a stylish,
                      eco-friendly box that’s packed with goodies!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <label htmlFor="drawer-mounting">
              <div className="group flex justify-between border-b pt-4 border-base-300">
                <div className="flex items-center mb-4">
                  <span className="text-xl mr-2">
                    <i className="fa fa-info-circle text-gray-600"></i>
                  </span>
                  <p className="font-bold group-hover:text-[#1185ed] flex items-center gap-2">
                    <GiMountainRoad className="text-xl" />
                    Easy mounting in 3 steps
                  </p>
                </div>
                <p className="group-hover:text-[#1185ed] cursor-pointer">
                  <FiPlus className="text-xl" />
                </p>
              </div>
            </label>
            <div className="drawer drawer-end z-50">
              <input
                id="drawer-mounting"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">{/* Page content here */}</div>
              <div className="drawer-side">
                <label
                  htmlFor="drawer-mounting"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <li>
                    <p>
                      1. Stick the leaf: If necessary, clean the wall with a dry
                      wipe. Stick the Protective Leaf and press around to remove
                      air bubbles.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplateDetails;
