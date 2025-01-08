import band from "../assets/band.avif";

const DiscoverBrands = () => {
  return (
    <div
      className="relative w-full h-[200px] bg-cover bg-center"
      style={{ backgroundImage: `url(${band})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative flex justify-between items-center w-full h-full text-white px-12">
        <h1 className="text-5xl font-semibold mb-6">Official Brand Shops</h1>
        <div className="flex space-x-10">
          <div className="relative">
            <span className="mr-3">Category:</span>
            <select className="font-semibold bg-white border border-white text-black px-4 py-2 rounded-md outline-none">
              <option className="font-semibold">All</option>
              <option className="font-semibold">Animals</option>
              <option className="font-semibold">Cityscapes</option>
              <option className="font-semibold">Food & Kitchen</option>
              <option className="font-semibold">Japanese & Asian</option>
              <option className="font-semibold">Landscape</option>
              <option className="font-semibold">Travel</option>
              <option className="font-semibold">Gaming</option>
              <option className="font-semibold">Fantasy</option>
            </select>
          </div>
          <div className="relative">
            <span className="mr-3">Sort by:</span>
            <select className="font-semibold bg-white border border-white text-black px-4 py-2 rounded-md outline-none">
              <option className="font-semibold">BestSelling</option>
              <option className="font-semibold">New</option>
              <option className="font-semibold">A-Z</option>
              <option className="font-semibold">Z-A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverBrands;
