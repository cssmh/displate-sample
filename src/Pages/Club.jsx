import { FaCuttlefish } from "react-icons/fa";

const CLub = () => {
  return (
    <div>
      <div className="flex bg-[#f8f6f8] flex-col lg:flex-row justify-between gap-4 py-6">
        <div className="w-full lg:w-[40%] px-6 lg:px-10 py-8 lg:py-12 rounded-lg flex flex-col justify-between">
          <div className="mb-6">
            <div className="text-2xl mb-2 flex items-center gap-2 mt-8">
              <FaCuttlefish className="text-5xl" />
              <span className="font-semibold">
                Displate <br /> CLub
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium">
              Join Displate Club <br /> & enjoy its benefits!
            </h1>
          </div>
          <p className="text-lg mb-4">
            Watch your collection grow. With benefits like free shipping,
            permanent discounts and new Displates every 12 months it will be
            easy peasy lemon squeezy to surround yourself with your favorite
            passions!
          </p>
          <button className="w-[250px] bg-[#1185ed] font-bold text-white py-3 px-6 rounded-md shadow-lg">
            Complete order and join
          </button>
        </div>
        <div className="w-full lg:w-[60%] relative">
          <video
            className="w-[90%] h-[80%] mt-8 object-cover rounded-lg"
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
      <div>
        
      </div>
    </div>
  );
};

export default CLub;
