import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const CanvasRule = () => {
    return (
      <div>
        <h1 className="max-w-[1300px] mx-auto font-semibold text-2xl md:text-4xl">
          One canvas to rule them all
        </h1>
        <div className="max-w-[1300px] mx-auto my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <img
            src="https://displate.com/img/what-a-displate/displate.png"
            alt=""
            className="h-80"
          />
          <img
            src="https://displate.com/img/what-a-displate/backplate.png"
            alt=""
            className="h-80"
          />
          <img
            src="https://displate.com/img/about/girl.png"
            alt=""
            className="h-80"
          />
          <img
            src="https://displate.com/img/what-a-displate/magnet-pack.png"
            alt=""
            className="h-80"
          />
        </div>
        <div className="py-10 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-semibold text-2xl md:text-4xl">
              Displates make the best roommates!
            </h1>
            <div className="w-[90%] mx-auto flex flex-col md:flex-row my-7 justify-between">
              <div className="flex items-center gap-4">
                <FaRegStar size={70} />
                <div>
                  <p className="text-2xl font-semibold">Over 1.5 million</p>
                  <p className="">Artworks</p>
                  <button className="font-semibold hover:underline text-[#36b1f1]">
                    Find the one you like!
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaRegStar size={70} />
                <div>
                  <p className="text-2xl font-semibold">3.2 mln</p>
                  <p>Collectors around the globe</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineScreenSearchDesktop size={70} />
                <div>
                  <p className="text-2xl font-semibold">Over 5 million</p>
                  <p>Website visitors monthly</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl flex justify-center gap-10 mx-auto my-8">
            <div className="bg-white shadow-xl py-5 px-20 flex items-center gap-7">
              <div>
                <p className="text-4xl font-semibold">4.7/5</p>
                <div className="flex items-center">
                  <FaStar className="text-[#00b67a] text-xl" />
                  <FaStar className="text-[#00b67a] text-xl" />
                  <FaStar className="text-[#00b67a] text-xl" />
                  <FaStar className="text-[#00b67a] text-xl" />
                  <FaStar className="text-[#00b67a] text-xl" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-semibold">Trustpilot</p>
                <p className="font-semibold">Excellent</p>
                <p className="font-semibold">Rated based on 15483 reviews</p>
              </div>
            </div>
            <div className="bg-white py-5 px-20 shadow-xl flex items-center gap-7">
              <div>
                <p className="text-4xl font-semibold">97%</p>
                <div className="flex items-center">
                  <FaStar className="text-[#1185ed] text-xl" />
                  <FaStar className="text-[#1185ed] text-xl" />
                  <FaStar className="text-[#1185ed] text-xl" />
                  <FaStar className="text-[#1185ed] text-xl" />
                  <FaStar className="text-[#1185ed] text-xl" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-semibold">Satisfaction</p>
                <p className="font-semibold">97% of all clients</p>
                <p className="font-semibold">
                  are delighted with their Displate experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CanvasRule;