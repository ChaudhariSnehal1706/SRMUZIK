import React, { useRef, useState, useEffect } from "react";
import loop1 from "../assets/image/repeat-g-1.png";

const StickyPlayer = ({ song, songs, onNext, onPrevious }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  //   console.log('isPlaying: ', isPlaying);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  //   console.log("currentTime: ", currentTime);
  const [duration, setDuration] = useState(0);
  //   console.log("duration: ", duration);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current.load();
    }
  }, [song]);

  useEffect(() => {
    if (isPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }
    // Add event listener to handle end of current song
    audioRef?.current?.addEventListener("ended", handleNext);

    // Remove event listener when component unmounts
    return () => {
      audioRef?.current?.removeEventListener("ended", handleNext);
    };
  }, [isPlaying, audioRef?.current?.src]);

  const playAudio = () => {
    const playPromise = audioRef?.current?.play();
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
    setIsPlaying(true);
    audioRef?.current?.play();
  };

  const handlePlayPause = () => {
    if (audioRef?.current?.paused) {
      audioRef?.current?.play(); // Play the audio
    } else {
      audioRef?.current?.pause(); // Pause the audio
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    audioRef.current.volume = volume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleNext = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause(); // Pause the current audio
      audioRef.current.currentTime = 0; // Reset currentTime to 0
      audioRef.current.src = ""; // Reset the audio source
    }

    // Proceed to play the next song
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const nextIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
    onNext(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    pauseAudio(); // Pause audio before navigating
    const previousIndex =
      currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    onPrevious(songs[previousIndex]);
  };

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-2 border-gray-600 bg-gray-800 text-white p-4 shadow-lg flex flex-col sm:flex-row justify-between items-center sm:items-stretch">
      <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
        <img
          src={song.image}
          alt={song.title}
          className="w-16 h-12 rounded-md mb-2 sm:mb-0"
        />
        <div className="text-center sm:text-left ml-6">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className="text-sm">{song.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
        <button
          onClick={handlePrevious}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded text-xs sm:text-base">
          <i className="fa-solid fa-backward-step"></i>
        </button>
        <button
          onClick={handlePlayPause}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs sm:text-base">
          {isPlaying ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded text-xs sm:text-base">
          <i className="fa-solid fa-forward-step"></i>
        </button>
        <span className="hidden sm:inline">{formatTime(currentTime)}</span>
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          className="flex-1 sm:hidden"
        />
        <div className="hidden sm:block w-64">
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            className="w-full"
          />
        </div>
        <span className="hidden sm:inline">{formatTime(duration)}</span>
        <button
          onClick={() => setIsLooping(!isLooping)}
          className=" hover:bg-gray-700 text-white font-bold py-2 px-2 rounded text-xs sm:text-base">
          {isLooping ? (
            <img src={loop1} alt="reapeat 1" className="h-7" />
          ) : (
            <i className="fa-solid fa-repeat" style={{fontSize:"17px"}}></i>
          )}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs sm:text-base">Volume</span>
        <input
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          className="w-16 sm:w-24"
        />
      </div>
      <audio
        ref={audioRef}
        src={song.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        loop={isLooping}
      />
    </div>
  );
};

export default StickyPlayer;
