import { FaLightbulb, FaArrowUp, FaArrowDown, FaBook, FaCuttlefish } from "react-icons/fa";

const GetInFrame = () => {
  return (
    <div className="max-w-7xl mx-auto my-4">
      <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-10">
        <div className="relative w-full md:w-1/2">
          <video
            className="rounded-lg shadow-lg w-full h-auto"
            src="path-to-your-video.mp4"
            controls
          ></video>
          <div className="absolute bottom-4 left-4"></div>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-2xl font-semibold text-gray-800">Get in Frame</h1>
          <div className="flex items-start gap-4">
            <FaLightbulb className="text-2xl text-gray-500" />
            <div>
              <p className="text-lg font-medium text-gray-700">
                3D printed on metal in a unique way
              </p>
              <p className="text-sm text-gray-500 italic">- patent pending!</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <FaArrowUp className="text-lg text-gray-500" />
              <FaArrowDown className="text-lg text-gray-500" />
            </div>
            <p className="text-lg font-medium text-gray-700">
              Remember: Displates stay the same <br /> size with or without a
              frame
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaBook className="text-2xl text-gray-500" />
            <p className="text-lg font-medium text-gray-700">
              4 different patterns to play with
            </p>
          </div>
          <div className="flex justify-between border-t border-[#d2d2d2] pt-4 gap-4">
            <p className="text-gray-700 text-sm font-semibold">
              <span className="font-bold">Over 1.5 million artworks</span> to
              choose from
            </p>
            <button className="px-20 text-xl py-3 bg-[#1185ed] font-semibold text-white rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="px-7 py-10 flex shadow-xl rounded-lg gap-6">
        <FaCuttlefish size={50} />
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">
            All Displates, in all sizes and options available in Displate Club!
          </h1>
          <p className="font-semibold">
            Join Displate Club and enjoy all the club’s benefits!
          </p>
          <p>
            With free shipping, permanent discounts and new Displates every 12
            months it will be easy peasy lemon squeezy to surround yourself with
            your favorite passions!
          </p>
          <button className="text-[#1194f2] font-semibold hover:underline">Find out more</button>
        </div>
      </div>
    </div>
  );
};

export default GetInFrame;
