import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { GiMountainRoad } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";

const MoreAbout = () => {
    return (
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
          <input id="drawer-about" type="checkbox" className="drawer-toggle" />
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
                  Time: Expected delivery time is 5-6 business days from placing
                  your order.
                </p>
                <p>
                  Returns: You may return a Displate within 100 calendar days of
                  delivery for a 100% refund (Displate needs to be sent at the
                  customer&apos;s cost).
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
                  wipe. Stick the Protective Leaf and press around to remove air
                  bubbles.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default MoreAbout;