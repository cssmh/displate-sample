const ChooseLooks = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">
          Choose how it looks
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Customize your Displate and make it your own. Pick the right size,{" "}
          <br /> go gloss or matte, or add the frame that will bring out the
          best in it.
        </p>
      </div>
      <div className="flex justify-center space-x-6 mt-10 items-end">
        <div className="bg-gray-300 rounded-lg flex items-end justify-center h-32 w-28">
          <a href="#">
            <img
              src="https://displate.com/img/what-a-displate/displate-m.png"
              alt="Image 1"
              className="h-full object-cover rounded-lg"
            />
          </a>
        </div>
        <div className="bg-gray-300 rounded-lg flex items-end justify-center h-48 w-40">
          <a href="#">
            <img
              src="https://displate.com/img/what-a-displate/displate-l.png"
              alt="Image 2"
              className="h-full object-cover rounded-lg"
            />
          </a>
        </div>
        <div className="bg-gray-300 rounded-lg flex items-end justify-center h-64 w-52">
          <a href="#">
            <img
              src="https://displate.com/img/what-a-displate/displate-xl.png"
              alt="Image 3"
              className="h-full object-cover rounded-lg"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-7">
        <div className="mt-3 justify-center flex gap-4 items-center text-center">
          <h2 className="text-xl">Finish:</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <input
                type="radio"
                name="finish"
                className="radio radio-success"
                id="matte"
                defaultChecked
              />
              <label htmlFor="matte" className="ml-2 text-gray-600">
                Matte
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="finish"
                className="radio radio-success"
                id="gloss"
              />
              <label htmlFor="gloss" className="ml-2 text-gray-600">
                Gloss
              </label>
            </div>
          </div>
          <p className="ml-10">Finish: Matte</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800">Frame:</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="w-20 h-20 border-2 border-gray-500 rounded-lg flex justify-center items-center bg-gray-200 hover:border-gray-600">
            <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
          </div>
          <div className="w-20 h-20 border-2 border-gray-500 rounded-lg flex justify-center items-center bg-gray-200 hover:border-gray-600">
            <div className="w-12 h-12 bg-gray-900 rounded-md"></div>
          </div>
          <div className="w-20 h-20 border-2 border-gray-500 rounded-lg flex justify-center items-center bg-gray-200 hover:border-gray-600">
            <div className="w-12 h-12 bg-gray-600 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLooks;
