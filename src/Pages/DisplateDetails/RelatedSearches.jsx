const RelatedSearches = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-semibold mb-3">
        Explore related searches
      </h1>
      <div className="max-w-5xl mx-auto mt-8 gap-3 grid grid-cols-3 lg:grid-cols-6">
        <p className="font-semibold bg-[#ffe7e7] px-3 py-2 rounded-lg">
          Zaun <span className="text-[#a6979a]">posters</span>
        </p>
        <p className="font-semibold bg-[#ffface] px-3 py-2 rounded-lg">
          Graffiti <span className="text-[#a6979a]">posters</span>
        </p>
        <p className="font-semibold bg-[#d9f6ff] px-3 py-2 rounded-lg">
          Animation <span className="text-[#a6979a]">posters</span>
        </p>
        <p className="font-semibold bg-[#efefff] px-3 py-2 rounded-lg">
          Powder <span className="text-[#a6979a]">posters</span>
        </p>
        <p className="font-semibold bg-[#d9ffdd] px-3 py-2 rounded-lg">
          Arcane jinx
          <span className="text-[#a6979a]">posters</span>
        </p>
        <p className="font-semibold bg-[#ffe7e7] px-3 py-2 rounded-lg">
          Arcane <span className="text-[#a6979a]">posters</span>
        </p>
        <p className="font-semibold bg-[#ffface] px-3 py-2 rounded-lg lg:col-span-1 lg:col-start-3">
          Jinx <span className="text-[#a6979a]">posters</span>
        </p>
      </div>
    </div>
  );
};

export default RelatedSearches;
