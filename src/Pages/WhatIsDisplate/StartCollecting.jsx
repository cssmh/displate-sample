const StartCollecting = () => {
  const photos = [
    "https://displate.com/img/what-a-displate/animals.jpg",
    "https://displate.com/img/what-a-displate/travel.jpg",
    "https://displate.com/img/what-a-displate/gaming.jpg",
    "https://displate.com/img/what-a-displate/garage2.jpg",
    "https://displate.com/img/what-a-displate/music2.jpg",
  ];

  return (
    <div className="bg-[#f5f5f5] py-5 my-5">
      <h1 className="text-4xl font-semibold ml-10">Start collecting!</h1>
      <p className="ml-10 mt-4 text-lg">Bring your passions home</p>
      <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
        <img
          src={photos[0]}
          alt="Center"
          className="absolute w-1/3 h-auto z-20 object-cover"
        />
        <img
          src={photos[1]}
          alt="Left 1"
          className="absolute w-1/3 h-auto z-10 object-cover left-[37%] border-4 border-white transform -translate-x-1/2"
          style={{ clipPath: "inset(0 80% 0 0)" }}
        />
        <img
          src={photos[2]}
          alt="Left 2"
          className="absolute w-1/3 h-auto z-10 object-cover transform border-4 border-white right-[40%]"
          style={{ clipPath: "inset(0 80% 0 0)" }}
        />
        <img
          src={photos[3]}
          alt="Right 1"
          className="absolute w-1/3 h-auto z-10 object-cover right-[37%] border-4 border-white transform translate-x-1/2"
          style={{ clipPath: "inset(0 0 0 80%)" }}
        />
        <img
          src={photos[4]}
          alt="Right 2"
          className="absolute w-1/3 h-auto z-10 object-cover left-[40%] border-4 border-white transform"
          style={{ clipPath: "inset(0 0 0 80%)" }}
        />
      </div>
    </div>
  );
};

export default StartCollecting;
