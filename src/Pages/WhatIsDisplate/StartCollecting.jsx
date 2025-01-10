const StartCollecting = () => {
  const photos = [
    "https://displate.com/img/what-a-displate/animals.jpg",
    "https://displate.com/img/what-a-displate/travel.jpg",
    "https://displate.com/img/what-a-displate/gaming.jpg",
    "https://displate.com/img/what-a-displate/garage2.jpg",
    "https://displate.com/img/what-a-displate/music2.jpg",
  ];

  return (
    <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
      {/* Center Photo */}
      <img
        src={photos[0]}
        alt="Center"
        className="absolute w-1/3 h-auto z-20 object-cover"
      />
      {/* Left Photos */}
      <img
        src={photos[1]}
        alt="Left 1"
        className="absolute w-1/3 h-auto z-10 object-cover left-[30%] transform -translate-x-1/2"
        style={{ clipPath: "inset(0 80% 0 0)" }}
      />
      <img
        src={photos[2]}
        alt="Left 2"
        className="absolute w-1/3 h-auto z-10 object-cover transform -translate-x-1/2"
        style={{ clipPath: "inset(0 80% 0 0)" }}
      />
      {/* Right Photos */}
      <img
        src={photos[3]}
        alt="Right 1"
        className="absolute w-1/3 h-auto z-10 object-cover right-1/4 transform translate-x-1/2"
        style={{ clipPath: "inset(0 0 0 80%)" }}
      />
      <img
        src={photos[4]}
        alt="Right 2"
        className="absolute w-1/3 h-auto z-10 object-cover right-0- transform translate-x-1/2"
        style={{ clipPath: "inset(0 0 0 80%)" }}
      />
    </div>
  );
};

export default StartCollecting;
