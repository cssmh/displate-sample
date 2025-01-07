import { useState } from "react";
import { FaCopy, FaExclamation } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import discover from "../../assets/discover.svg";
import amex from "../../assets/amex.svg";
import gpay from "../../assets/gpay.svg";
import applepay from "../../assets/applepay.svg";
import paypal2 from "../../assets/paypal2.svg";
import { Helmet } from "react-helmet-async";
import LeftImage from "./LeftImage";
import ProductType from "./ProductType";
import ChooseSize from "./ChooseSize";
import MoreAbout from "./MoreAbout";
import MoreDisplate from "./MoreDisplate";
import AwesomeSpaces from "../../Components/AwesomeSpaces";
import RecentlyViewed from "./RecentlyViewed";
import ExclusivePosters from "./ExclusivePosters";

const DisplateDetails = () => {
  const [size, setSize] = useState("M");
  const [isExpanded, setIsExpanded] = useState(false);
  const [frameColor, setFrameColor] = useState("black");
  const [activeTab, setActiveTab] = useState("Matte");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
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
      <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-6">
        <LeftImage frameColor={frameColor} />
        <div className="flex-grow mx-3 lg:mx-0">
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
          <ProductType
            handleTabChange={handleTabChange}
            activeTab={activeTab}
          />
          <ChooseSize handleSizeChange={handleSizeChange} size={size} />
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
          <MoreAbout />
        </div>
      </div>
      <MoreDisplate />
      <AwesomeSpaces />
      <RecentlyViewed />
      <ExclusivePosters />
    </div>
  );
};

export default DisplateDetails;
