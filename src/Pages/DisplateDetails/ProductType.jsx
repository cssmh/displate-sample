import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsExclamationCircle, BsPlayCircle } from "react-icons/bs";

const ProductType = ({ handleTabChange, activeTab }) => {
  return (
    <div className="mb-2 group">
      <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
        Select Product Type
        <span>
          <div className="drawer drawer-end z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
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
              <ul className="menu font-normal bg-base-200 text-base-content min-h-full w-96 p-4">
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <BsExclamationCircle className="text-xl text-black" />
                      <p className="text-lg font-semibold">Textra</p>
                    </div>
                    <label
                      htmlFor="my-drawer-4"
                      className="text-xl cursor-pointer text-[#1185ed]"
                    >
                      ✕
                    </label>
                  </div>
                  <div className="mb-6">
                    <div className="relative">
                      <video
                        src="textra-video.mp4"
                        className="rounded-md w-full h-auto"
                        controls={false}
                      ></video>
                      <button className="absolute inset-0 flex items-center justify-center">
                        <BsPlayCircle className="text-6xl text-white" />
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      <span className="font-semibold">
                        Textured finish that pops:
                      </span>
                      Using selective matt & gloss finish and 3D-enhanced print,
                      Textra lets you feel the details and outlines as they
                      seamlessly pop up on the metal surface. This tactile
                      finish evolves with different light conditions, creating a
                      whole new, dynamic and immersive art experience.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AiOutlineExclamationCircle className="text-2xl text-[#1185ed]" />
                      <p className="text-lg font-bold">Gloss</p>
                    </div>
                    <div className="relative">
                      <video
                        src="gloss-video.mp4"
                        className="rounded-md w-full h-auto"
                        controls={false}
                      ></video>
                      <button className="absolute inset-0 flex items-center justify-center">
                        <BsPlayCircle className="text-6xl text-white" />
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      <span className="font-semibold">
                        Shine on with vivid colors:
                      </span>
                      With their gently reflective surface, glossy Displates
                      offer enhanced contrast, highlighting vibrant hues, deep
                      blacks, and intricate details. Go for gloss if
                      you&lsquo;re looking for a photo-like finish. For best
                      effect, try to avoid direct light when arranging your
                      posters.
                    </p>
                  </div>
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
  );
};

export default ProductType;
