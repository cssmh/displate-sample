import {
  FaStar,
  FaReddit,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const Community = () => {
  return (
    <div className="my-9 md:my-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Other people love our <br />
          <span>metal collectibles</span>
        </h1>
        <div className="mt-7 mb-5 flex justify-center gap-2 items-center">
          <p className="text-xl font-semibold">Trustpilot reviews</p>
          <div className="flex items-center">
            <FaStar className="text-[#00b67a] text-xl" />
            <FaStar className="text-[#00b67a] text-xl" />
            <FaStar className="text-[#00b67a] text-xl" />
            <FaStar className="text-[#00b67a] text-xl" />
            <FaStar className="text-[#00b67a] text-xl" />
          </div>
        </div>
        <p className="mt-2 text-lg font-medium">
          Excellent | Based on 15,261 reviewers
        </p>
        <div className="mt-7 md:mt-12">
          <div className="mt-4 p-3 max-w-2xl mx-auto rounded-xl border shadow-xl flex flex-col lg:flex-row items-center justify-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Join our Community on
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3 justify-center">
              <a
                href="https://www.reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                <FaReddit size={40} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600"
              >
                <FaDiscord size={40} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600"
              >
                <FaPinterest size={40} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <FaTwitter size={40} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTiktok size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
