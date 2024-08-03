import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../../components/index";
import songData from "../../components/tools/songs/songs";

const PlaySongPage = () => {
  const audioRef = useRef(null);
  const { id } = useParams();
  const integerId = Number(id);
  const navigate = useNavigate();

  const navigatePage = (path) => {
    navigate(path);
  };
  const [currentSongIndex, setCurrentSongIndex] = useState(integerId - 1);
  // const [currentSongIndex, setCurrentSongIndex] = useState(integerId);
  const [isPlaying, setIsPlaying] = useState(true);
  // console.log('isPlaying: ', isPlaying);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playlist = songData;

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateTime);
      audioElement.addEventListener("loadedmetadata", updateDuration);
      return () => {
        audioElement.removeEventListener("timeupdate", updateTime);
        audioElement.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [audioRef?.current?.src]);
  // console.log('audioRef?.current: ', audioRef);
  // audioRef.current.__reactProps$lxjkjp7w2ug.src
  // console.log('audioRef.current.__reactProps$lxjkjp7w2ug.src: ', audioRef?.current?.src);
  useEffect(() => {
    if (isPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [isPlaying, audioRef?.current?.src]);

  useEffect(() => {
    audioRef.current.loop = isLooping;
  }, [isLooping]);

  const playAudio = () => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        // console.log('playPromise: ', playPromise);
        .then(() => {
          // Automatic playback started!
        })
        .catch((error) => {
          console.log("Playback error:", error);
          setTimeout(() => {
            setIsPlaying(true);
          }, 2000);
        });
    }
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeSliderChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const progressBarWidth = (currentTime / duration) * 100 || 0;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // const goToPreviousSong = () => {
  //   setCurrentSongIndex((prevIndex) =>
  //     prevIndex === 0 ? playlist?.length - 1 : prevIndex - 1
  //     );
  //     navigatePage(`/playsong/${currentSongIndex+1}`);
  //   setIsPlaying(true);
  // };

  // const goToNextSong = () => {
  //   setCurrentSongIndex((prevIndex) =>
  //     prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
  //   );
  //       navigatePage(`/playsong/${currentSongIndex+2}`);
  //   setIsPlaying(true);
  // };
  const goToPreviousSong = () => {
    pauseAudio(); // Pause audio before navigating
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist?.length - 1 : prevIndex - 1
    );

    if (integerId === 1) {
      navigatePage(`/playsong/${13}`);
    } else {
      // navigatePage(`/playsong/${currentSongIndex + 2}`);
      navigatePage(`/playsong/${integerId - 1}`);
    }
    // navigatePage(`/playsong/${currentSongIndex + 1}`);
    setIsPlaying(true); // Start playing the new song
  };

  const goToNextSong = () => {
    pauseAudio(); // Pause audio before navigating
    setCurrentSongIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
    if (integerId === 13) {
      navigatePage(`/playsong/${1}`);
    }else {
      navigatePage(`/playsong/${integerId + 1}`);
    }
    // navigatePage(`/playsong/${currentSongIndex + 2}`);
    setIsPlaying(true); // Start playing the new song
  };

  // useEffect(() => {
  //   const currentTimeInteger = Math.floor(currentTime);
  //   const durationInteger = Math.floor(duration);
  //   if (!isLooping && currentTimeInteger === durationInteger) {
  //     setIsPlaying(false);
  //     setTimeout(() => {
  //       goToNextSong();
  //       setIsPlaying(true);
  //     }, 2000);
  //   }
  // // }, [currentTime, duration, isLooping]);
  // }, [isLooping]);

  return (
    <Layout>
      <div className="p-4 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center">
        <div className="w-full md:max-w-md mx-auto p-4 md:p-6 bg-white rounded-md shadow-md">
          {/* <h1 className="text-lg md:text-2xl font-semibold mb-4 text-center">
            Song Player
          </h1> */}
          <div className="mb-4 ">
            <audio
              ref={audioRef}
              src={playlist[currentSongIndex]?.audioUrl}></audio>
            <h2 className="text-base md:text-xl font-semibold mb-2 text-center">
              {playlist[currentSongIndex]?.title}
            </h2>
            <div className="flex justify-center">
              <img
                src={playlist[currentSongIndex]?.image}
                alt={`Song : ${playlist[currentSongIndex]?.title}`}
                className="rounded-md mb-4 hover:cursor-pointer"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <button
              onClick={goToPreviousSong}
              className="w-full md:w-auto px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
              {/* Previous */}
              <i className="fa-solid fa-backward-step"></i>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full md:w-auto px-6 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">
              {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </button>
            <button
              onClick={goToNextSong}
              className="w-full md:w-auto px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
              {/* Next */}
              <i className="fa-solid fa-forward-step"></i>
            </button>
          </div>
          <div className="w-full">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleTimeSliderChange}
              className="w-full appearance-none h-3 bg-gray-300 rounded-md"
            />
            <div
              className=" bg-blue-500 rounded-md"
              style={{ width: `${progressBarWidth}%` }}></div>
          </div>
          <div className="flex justify-between w-full mt-2 text-xs text-gray-600">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="mt-4 flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isLooping}
                onChange={() => setIsLooping(!isLooping)}
                className="mr-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
              <span className="text-xs md:text-sm">Loop</span>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlaySongPage;
