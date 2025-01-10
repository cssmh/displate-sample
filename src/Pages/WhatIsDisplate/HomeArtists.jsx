import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CustomPrevArrow = (props) => (
  <button
    className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
    onClick={props.onClick}
  >
    <FiChevronLeft size={24} />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-200"
    onClick={props.onClick}
  >
    <FiChevronRight size={24} />
  </button>
);

const HomeArtists = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const artists = [
    {
      userImage:
        "https://static.displate.com/avatars/2017-06-05/270ef5a2010a77ccefd5040768882edc.jpg?w=214&h=214",
      name: "Mrwerewolf",
      displate: "5 Collections 81 Displate",
      bottomImages: [
        "https://static.displate.com/280x392/displate/2017-06-07/f7cdd450e3f99b2a12cecb2ef72c4f85_9774cf46fd85ec62262f631da63685f4.jpg",
        "https://static.displate.com/280x392/displate/2017-06-07/f7cdd450e3f99b2a12cecb2ef72c4f85_9774cf46fd85ec62262f631da63685f4.jpg",
        "https://static.displate.com/280x392/displate/2017-06-07/f7cdd450e3f99b2a12cecb2ef72c4f85_9774cf46fd85ec62262f631da63685f4.jpg",
        "https://static.displate.com/280x392/displate/2017-06-07/f7cdd450e3f99b2a12cecb2ef72c4f85_9774cf46fd85ec62262f631da63685f4.jpg",
      ],
    },
    {
      userImage:
        "https://static.displate.com/avatars/2019-12-13/c9af1163bcb69f0a18230291330f7bce.jpg?w=214&h=214",
      name: "Mrwerewolf",
      displate: "5 Collections 81 Displate",
      bottomImages: [
        "https://static.displate.com/280x392/displate/2017-10-11/69b33944c7ef848864b98059aaae41f7_cfcf52a98c36189518bd73b9bd9c49df.jpg",
        "https://static.displate.com/280x392/displate/2017-10-11/69b33944c7ef848864b98059aaae41f7_cfcf52a98c36189518bd73b9bd9c49df.jpg",
        "https://static.displate.com/280x392/displate/2017-10-11/69b33944c7ef848864b98059aaae41f7_cfcf52a98c36189518bd73b9bd9c49df.jpg",
        "https://static.displate.com/280x392/displate/2017-10-11/69b33944c7ef848864b98059aaae41f7_cfcf52a98c36189518bd73b9bd9c49df.jpg",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Home of Genuine Artists
      </h2>
      <Slider {...settings}>
        {artists.map((artist, index) => (
          <div key={index} className="flex justify-center items-center py-8">
            <div className="flex flex-col md:flex-row items-center gap-6 px-4">
              <div className="flex flex-col mx-auto gap-4 w-full">
                <div className="space-y-5 border-r border-[#d2d2d2]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={artist.userImage}
                        alt={artist.name}
                        className="w-16 h-16 border-2 border-[#08efd3] p-1 rounded-full"
                      />
                      <div>
                        <p className="font-bold hover:underline text-xl text-gray-700">
                          {artist.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {artist.displate}
                        </p>
                      </div>
                      <Link className="font-semibold text-[#3698f0]">
                        See more from this artist
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {artist.bottomImages.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Artwork ${imgIndex + 1}`}
                        className="w-36 h-44 rounded-md object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-auto gap-4 w-full">
                <div className="space-y-5">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={artist.userImage}
                        alt={artist.name}
                        className="w-16 h-16 border-2 border-[#08efd3] p-1 rounded-full"
                      />
                      <div>
                        <p className="font-bold hover:underline text-xl text-gray-700">
                          {artist.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {artist.displate}
                        </p>
                      </div>
                    </div>
                    <Link className="font-semibold text-[#3698f0]">
                      See more from this artist
                    </Link>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {artist.bottomImages.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Artwork ${imgIndex + 1}`}
                        className="w-36 h-44 rounded-md object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeArtists;
