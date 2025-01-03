import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import gif from "../../assets/egiftcards.png";
import PassionateGamer from "./PassionateGamer";
import MovieBuff from "./MovieBuff";
import AnimeLover from "./AnimeLover";
import TVShows from "./TVShows";
import CreativeSoul from "./CreativeSoul";
import PetParent from "./PetParent";
import MemeEnthusiast from "./MemeEnthusiast";
import SportFanatic from "./SportFanatic";
import Newsletter from "../../Components/Newsletter";
import FindGiftIdeas from "./FindGiftIdeas";

const Gifts = () => {
  const sectionsRef = {
    gamer: useRef(null),
    movieBuff: useRef(null),
    animeLover: useRef(null),
    tvShowsAddict: useRef(null),
    creativeSoul: useRef(null),
    petParent: useRef(null),
    memeEnthusiast: useRef(null),
    sportFanatic: useRef(null),
  };

  const handleScrollToSection = (section) => {
    if (sectionsRef[section]?.current) {
      sectionsRef[section].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-4 py-6">
        <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#3d45d0] to-[#1c76e6] text-white px-6 lg:px-10 py-8 lg:py-12 rounded-lg flex flex-col justify-between">
          <div className="mb-6">
            <div className="text-5xl md:text-5xl mb-4 mt-8">🎁</div>
            <h1 className="text-4xl md:text-5xl font-medium">
              Solve all your <br /> gifting riddles
            </h1>
          </div>
          <p className="text-lg font-semibold mb-6">
            Find unique gifts that truly capture what your loved ones care about
            most.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#1185ed] font-bold text-white py-3 px-6 rounded-md shadow-lg">
              Find Gifts
            </button>
            <button className="bg-white font-semibold text-[#1185ed] py-3 px-6 rounded-md shadow-lg flex items-center gap-2">
              <FaPlay />
              <span>What&apos;s a Displate</span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[60%] relative">
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex p-7 bg-gradient-to-r from-[#623f82] via-[#622f58] to-[#90202d] rounded-lg">
        <div className="w-3/4 text-white flex flex-col justify-center items-start space-y-6">
          <h2 className="text-xl font-semibold">Last minute gifts?</h2>
          <p className="text-base font-medium">
            Give your loved ones the gift of choice - eGift Cards arrive
            instantly, stay valid for 12 months, and let the recipient pick
            exactly what they want.
          </p>
          <button className="bg-white font-semibold text-[#1185ed] py-3 px-6 rounded-md shadow-lg flex items-center gap-2">
            <span>Check eGift Cards</span>
          </button>
        </div>
        <div className="w-1/4 relative">
          <img
            src={gif}
            alt="gift"
            className="w-full h-auto absolute bottom-0 z-10"
          />
        </div>
      </div>
      <div className="text-center mt-7 mb-3">
        <h2 className="text-4xl font-semibold">Unlock our top picks for:</h2>
      </div>
      <div className="sticky top-[114px] z-50 bg-white py-4">
        <div className="flex overflow-x-auto space-x-5 px-4">
          {Object.keys(sectionsRef).map((key) => (
            <button
              key={key}
              onClick={() => handleScrollToSection(key)}
              className="flex items-center gap-2 border rounded-full py-1 mb-5 px-3 min-w-max text-black font-semibold"
            >
              <span className="text-xl">
                {key === "gamer" && "🎮"}
                {key === "movieBuff" && "🎬"}
                {key === "animeLover" && "⛩️"}
                {key === "tvShowsAddict" && "📺"}
                {key === "creativeSoul" && "🌟"}
                {key === "petParent" && "🐾"}
                {key === "memeEnthusiast" && "😄"}
                {key === "sportFanatic" && "🏀"}
              </span>
              <p className="text-sm font-semibold">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div ref={sectionsRef.gamer}>
        <PassionateGamer />
      </div>
      <div ref={sectionsRef.movieBuff}>
        <MovieBuff />
      </div>
      <div ref={sectionsRef.animeLover}>
        <AnimeLover />
      </div>
      <div ref={sectionsRef.tvShowsAddict}>
        <TVShows />
      </div>
      <div ref={sectionsRef.creativeSoul}>
        <CreativeSoul />
      </div>
      <div ref={sectionsRef.petParent}>
        <PetParent />
      </div>
      <div ref={sectionsRef.memeEnthusiast}>
        <MemeEnthusiast />
      </div>
      <div ref={sectionsRef.sportFanatic}>
        <SportFanatic />
      </div>
      <div className="mb-8">
        <h1 className="text-center text-5xl font-semibold">Why Displate?</h1>
        <div className="grid grid-cols-2 max-w-2xl gap-7 mt-6 mx-auto">
          <div className="flex items-center gap-2">
            <img
              src="https://assets-static-prod.displate.com/webflow/images/webflow_assets/usp_gift.jpg"
              alt="image"
              className="w-24 rounded-full"
            />
            <p>
              <p className="text-lg font-semibold">A perfect gift</p>
              <p className="text-gray-500">
                Displates arrive in ready-to-gift packaging
              </p>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://assets-static-prod.displate.com/webflow/images/webflow_assets/usp_sign.jpg"
              alt="image"
              className="w-24 rounded-full"
            />
            <p>
              <p className="text-lg font-semibold">A perfect gift</p>
              <p className="text-gray-500">
                Displates arrive in ready-to-gift packaging
              </p>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://assets-static-prod.displate.com/webflow/images/webflow_assets/usp_metal.jpg"
              alt="image"
              className="w-24 rounded-full"
            />
            <p>
              <p className="text-lg font-semibold">A perfect gift</p>
              <p className="text-gray-500">
                Displates arrive in ready-to-gift packaging
              </p>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://assets-static-prod.displate.com/webflow/images/webflow_assets/usp_3d.jpg"
              alt="image"
              className="w-24 rounded-full"
            />
            <p>
              <p className="text-lg font-semibold">A perfect gift</p>
              <p className="text-gray-500">
                Displates arrive in ready-to-gift packaging
              </p>
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
      <FindGiftIdeas />
    </div>
  );
};

export default Gifts;
