import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const CategoryModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full min-h-[95vh] max-w-3xl transform overflow-hidden rounded-md bg-white p-8 text-left align-middle transition-all">
                <div className="flex justify-between items-center border-b-2 pt-4 pb-9 mb-4">
                  <h4 className="text-2xl font-semibold text-gray-900">
                    Choose a category
                  </h4>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 border rounded-full border-black p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-6 mb-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800">
                      Interior Design
                    </h5>
                    <ul className="space-y-2 text-[#399af0]">
                      <li className="hover:underline">Kids room</li>
                      <li className="hover:underline">Contemporary art</li>
                      <li className="hover:underline">Mancave</li>
                      <li className="hover:underline">Text Art</li>
                      <li className="hover:underline">Paintings</li>
                      <li className="hover:underline">Abstract</li>
                      <li className="hover:underline">Food & Kitchen</li>
                      <li className="hover:underline">Pop art</li>
                      <li className="hover:underline">Minimalistic</li>
                      <li className="hover:underline">Vintage posters</li>
                      <li className="hover:underline">Blueprints</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800">Culture</h5>
                    <ul className="space-y-2 text-[#399af0]">
                      <li className="hover:underline">Cute</li>
                      <li className="hover:underline">Inspirational</li>
                      <li className="hover:underline">Books</li>
                      <li className="hover:underline">Celebrities</li>
                      <li className="hover:underline">Cartoons</li>
                      <li className="hover:underline">Tv shows</li>
                      <li className="hover:underline">Comics</li>
                      <li className="hover:underline">Funny</li>
                      <li className="hover:underline">Retro</li>
                      <li className="hover:underline">Music</li>
                      <li className="hover:underline">Movies</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800">
                      Nature & Travel
                    </h5>
                    <ul className="space-y-2 text-[#399af0]">
                      <li className="hover:underline">United States</li>
                      <li className="hover:underline">Floral</li>
                      <li className="hover:underline">Travel</li>
                      <li className="hover:underline">Landscapes</li>
                      <li className="hover:underline">Cityscapes</li>
                      <li className="hover:underline">Nature</li>
                      <li className="hover:underline">Animals</li>
                      <li className="hover:underline">Maps</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-800">Passion</h5>
                    <ul className="space-y-2 text-[#399af0]">
                      <li className="hover:underline">Fashion</li>
                      <li className="hover:underline">Planes</li>
                      <li className="hover:underline">Fantasy</li>
                      <li className="hover:underline">Japanese & Asian</li>
                      <li className="hover:underline">Military</li>
                      <li className="hover:underline">Cars</li>
                      <li className="hover:underline">Space</li>
                      <li className="hover:underline">Anime & Manga</li>
                      <li className="hover:underline">Sport</li>
                      <li className="hover:underline">Gaming</li>
                    </ul>
                  </div>
                </div>
                <div className="text-left mt-4">
                  <Link
                    to="/browse-collections"
                    className="font-bold text-[#399af0] hover:underline"
                  >
                    See all collections
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CategoryModal;
