const AwesomeSpaces = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Displates in your awesome spaces
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc56_5aa7211b84.jpg"
            alt="Space 1"
            className="w-full h-[210px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc66_8ea7dfeaf0.jpg"
            alt="Space 2"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc47_77efa79d67.jpg"
            alt="Space 3"
            className="w-full h-[210px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc31_54f8ca250b.png"
            alt="Space 4"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc72_b195bccf87.jpg"
            alt="Space 5"
            className="w-full h-[210px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 -mt-16">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc73_f9d308ca43.jpg"
            alt="Space 6"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc34_180c07ade6.jpg"
            alt="Space 7"
            className="w-full h-[210px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 -mt-16">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc29_40f6056190.png"
            alt="Space 8"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc18_3682f6fd41.jpg"
            alt="Space 9"
            className="w-full h-[210px] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 -mt-16">
          <img
            src="https://cms-static-pages-assets.displate.com/ugc35_6cadc70a66.jpg"
            alt="Space 10"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="font-bold text-white border bg-[#1185ed] px-3 py-[6px] rounded-md">
          See all inspirations
        </button>
      </div>
    </div>
  );
};

export default AwesomeSpaces;
