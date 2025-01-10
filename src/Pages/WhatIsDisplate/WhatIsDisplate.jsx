import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import CanvasRule from "./CanvasRule";
import MagicOfDisplates from "./MagicOfDisplates";
import ChooseLooks from "./ChooseLooks";
import GetInFrame from "./GetInFrame";
import HomeArtists from "./HomeArtists";
import StartCollecting from "./StartCollecting";

const WhatIsDisplate = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === "0");
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.volume = isMuted ? volume : 0;
  };

  const handleProgress = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    videoRef.current.currentTime =
      (newProgress / 100) * videoRef.current.duration;
  };

  return (
    <div>
      <div className="max-w-[1300px] mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-[40%] text-center p-6 shadow-xl md:text-left">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              What&apos;s <br /> a Displate?
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Displate is a{" "}
              <span className="font-semibold">one-of-a-kind metal poster</span>{" "}
              designed to capture your{" "}
              <span className="font-semibold">unique passions.</span> We’ve
              created a 21st-century canvas that’s sturdy, magnet mounted, and
              durable enough to withstand a lifetime of intense staring.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              But staring is only half the fun! You can{" "}
              <span className="font-semibold">
                customize, collect, and rearrange
              </span>{" "}
              them at will – it only takes{" "}
              <span className="font-semibold">20 seconds to set them up</span>{" "}
              with no power tools, no damages, no frustrations.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              Now go ahead and search for your next roommate among our{" "}
              <span className="font-semibold">
                unique and licensed artworks!
              </span>
            </p>
          </div>
          <div className="w-full md:w-[60%] flex items-center justify-center">
            <div className="relative w-full">
              <video
                ref={videoRef}
                className="w-full rounded-lg shadow-lg"
                src=""
                poster="https://via.placeholder.com/400x300?text=Displate+Video"
                onTimeUpdate={handleProgress}
              ></video>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white p-3 rounded-b-lg flex items-center justify-between space-x-4">
                <button onClick={togglePlayPause} className="text-xl">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <div className="flex items-center space-x-2">
                  <button onClick={toggleMute} className="text-xl">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CanvasRule />
      <MagicOfDisplates />
      <ChooseLooks />
      <GetInFrame />
      <HomeArtists />
      <StartCollecting />
    </div>
  );
};

export default WhatIsDisplate;
