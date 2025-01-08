const Filters = () => {
  return (
    <ul className="menu bg-base-200 text-base-content min-h-full w-96 space-y-6 p-8">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filters</h3>
        <div className="flex items-center gap-3">
          <button className="font-semibold text-[#1185ed]">
            Reset filters
          </button>
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="cursor-pointer text-lg text-gray-500 hover:text-gray-700"
          >
            ✕
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Orientation</h4>
        <div className="space-y-2 flex flex-col">
          <label className="cursor-pointer text-lg">
            <input type="radio" name="orientation" className="mr-2" /> All
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="orientation" className="mr-2" />{" "}
            Horizontal
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="orientation" className="mr-2" /> Vertical
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Collection</h4>
        <div className="space-y-2 flex flex-col">
          <label className="cursor-pointer text-lg">
            <input type="radio" name="collection" className="mr-2" /> All
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="collection" className="mr-2" /> Community
            Choice
          </label>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">
              What&apos;s the Community Choice?
            </span>{" "}
            Find out more{" "}
            <a href="#" className="text-blue-500 underline">
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Category</h4>
        <div className="space-y-2 flex flex-col">
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> All
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Abstract
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Animals
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Anime &
            Manga
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Blueprints
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Books
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Cars
          </label>
          <label className="cursor-pointer text-lg">
            <input type="radio" name="category" className="mr-2" /> Cartoons
          </label>
        </div>
        <button
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
          onClick={() => {
            // Toggle logic for showing more options can be implemented here
          }}
        >
          Show More
        </button>
      </div>
    </ul>
  );
};

export default Filters;
