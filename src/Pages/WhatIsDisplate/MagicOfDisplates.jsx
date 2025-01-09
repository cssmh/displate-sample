import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const MagicOfDisplates = () => {
  const videoData = [
    { id: 1, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, videoUrl: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, videoUrl: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [playingVideo, setPlayingVideo] = useState(null);

  const togglePlayPause = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);
    const isCurrentlyPlaying = videoElement.paused;

    if (isCurrentlyPlaying) {
      videoElement.play();
      setPlayingVideo(videoId);
    } else {
      videoElement.pause();
      setPlayingVideo(null);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#f4f4f4]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          See the magic of Displates
        </h1>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {videoData.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-xl relative">
                <video
                  id={`video-${item.id}`}
                  className="w-full h-40 rounded-lg"
                  src={item.videoUrl}
                />
                <button
                  className="absolute inset-0 flex items-center justify-center rounded-lg text-white p-3"
                  onClick={() => togglePlayPause(item.id)}
                >
                  {playingVideo === item.id ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MagicOfDisplates;
