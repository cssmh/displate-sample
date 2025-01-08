import band from "../assets/band.avif";

const DiscoverBrands = () => {
  const fakeData = [
    {
      id: 1,
      title: "World Class Photos",
      artworks: "2108 artworks",
      image:
        "https://static.displate.com/brand/layout/c089c998-7199-46e3-b0b4-3df185ce3026/catalogCoverStandard.jpg",
    },
    {
      id: 2,
      title: "Urban Landscape",
      artworks: "1500 artworks",
      image:
        "https://static.displate.com/brand/layout/55dc3cf3-89bd-42a5-9067-3d8e7cc4d8f5/catalogCoverStandard.jpg",
    },
    {
      id: 3,
      title: "Nature Wonders",
      artworks: "1200 artworks",
      image:
        "https://static.displate.com/brand/layout/30765e9c-884a-4277-8a2b-110c658cee7d/catalogCoverStandard.jpg",
    },
    {
      id: 4,
      title: "Futuristic Worlds",
      artworks: "900 artworks",
      image:
        "https://static.displate.com/brand/layout/4342347e-b9e0-4a0b-98cb-e905854c0dfd/catalogCoverStandard.jpg",
    },
    {
      id: 5,
      title: "World Class Photos",
      artworks: "2108 artworks",
      image:
        "https://static.displate.com/brand/layout/c089c998-7199-46e3-b0b4-3df185ce3026/catalogCoverStandard.jpg",
    },
    {
      id: 6,
      title: "Urban Landscape",
      artworks: "1500 artworks",
      image:
        "https://static.displate.com/brand/layout/55dc3cf3-89bd-42a5-9067-3d8e7cc4d8f5/catalogCoverStandard.jpg",
    },
    {
      id: 7,
      title: "Nature Wonders",
      artworks: "1200 artworks",
      image:
        "https://static.displate.com/brand/layout/30765e9c-884a-4277-8a2b-110c658cee7d/catalogCoverStandard.jpg",
    },
    {
      id: 8,
      title: "Futuristic Worlds",
      artworks: "900 artworks",
      image:
        "https://static.displate.com/brand/layout/4342347e-b9e0-4a0b-98cb-e905854c0dfd/catalogCoverStandard.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen">
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
      <div className="flex-grow px-12 mt-12">
        <div className="grid grid-cols-4 gap-4 -top-5 relative">
          {fakeData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg z-10 -mt-12"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.artworks}</p>
              </div>
            </div>
          ))}
          {fakeData.slice(4).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.artworks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverBrands;
