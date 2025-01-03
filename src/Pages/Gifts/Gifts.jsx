import { FaPlay } from "react-icons/fa";
import gif from "../../assets/egiftcards.png";
import { IoGameController } from "react-icons/io5";
import Brandshops from "./Brandshops";

const Gifts = () => {
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
      <div className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">Unlock our top picks for:</h2>
        </div>
        <div className="flex overflow-x-auto space-x-5">
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">🎮</span>
            <p className="text-sm font-bold">Passionate Gamer</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">🎬</span>
            <p className="text-sm font-semibold">Movie Buff</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">⛩️</span>
            <p className="text-sm font-semibold">Anime Lover</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">📺</span>
            <p className="text-sm font-semibold">TV Shows Addict</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">🌟</span>
            <p className="text-sm font-semibold">Creative Soul</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">🐾</span>
            <p className="text-sm font-semibold">Pet Parent</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">😄</span>
            <p className="text-sm font-semibold">Meme Enthusiast</p>
          </div>
          <div className="flex items-center gap-2 border rounded-full py-1 px-3 min-w-max mb-5">
            <span className="text-xl">🏀</span>
            <p className="text-sm font-semibold">Sport Fanatic</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-6">
        <div className="w-full lg:w-[30%] px-6 lg:px-10 space-y-3">
          <div className="text-5xl md:text-5xl">
            <IoGameController />
          </div>
          <p>Gifts for a</p>
          <h1 className="text-4xl md:text-5xl font-medium">
            Passionate <br /> Gamer
          </h1>
          <button className="bg-white pt-3 font-semibold text-[#1185ed]">
            See all Gaming posters
          </button>
        </div>
        <div className="w-full lg:w-[70%] relative">
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
      <Brandshops />
    </div>
  );
};

export default Gifts;
