const ChooseSize = ({ handleSizeChange, size }) => {
  return (
    <div className="mb-2 group">
      <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
        Choose Size
        <span>
          <div className="drawer drawer-end z-50">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex">
              <label
                htmlFor="my-drawer-1"
                className="drawer-button text-[#1185ed] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn more
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-1"
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
  );
};

export default ChooseSize;
