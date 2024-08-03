import React, { useRef, useState, useEffect } from "react";
import loop1 from "../assets/image/repeat-g-1.png";
import { SpeakerHigh, SpeakerLow, SpeakerX } from "@phosphor-icons/react";

const StickyPlayer = ({ song, songs, onNext, onPrevious }) => {
  // console.log('song: ', song);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  // console.log('currentTime: ', currentTime);
  const [duration, setDuration] = useState(0);
  // console.log('duration: ', duration);
  const [volume, setVolume] = useState(1);
  // console.log("volume: ", volume);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // console.log("Key pressed:", event?.key);
      switch (event?.key) {
        case "MediaPlayPause": // Spacebar for play/pause
          handlePlayPause();
          break;
        case "ArrowRight": // Right arrow for next
          handleNext();
          break;
        case "ArrowLeft": // Left arrow for previous
          handlePrevious();
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Check if audioRef.current exists and add event listeners
    if (audioRef?.current) {
      const handleEnded = () => {
        handleNext();
      };
      audioRef?.current?.addEventListener("ended", handleEnded);

      // Cleanup function to remove event listener
      return () => {
        audioRef?.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, [audioRef?.current]); // Depend on audioRef.current to trigger effect

  useEffect(() => {
    // Check if audioRef.current exists and play or pause audio accordingly
    if (audioRef.current) {
      if (isPlaying) {
        playAudio();
      } else {
        pauseAudio();
      }
    }
  }, [isPlaying, audioRef.current]); // Depend on isPlaying and audioRef.current to trigger effect

  const playAudio = () => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Playback error:", error);
        });
    }
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const setVolumemute = () => {
    // if (volume == 0) {
    //   setVolume(1);
    // }else {
    //   setVolume(0);
    // }
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
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const nextIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
    onNext(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const previousIndex =
      currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    onPrevious(songs[previousIndex]);
  };

  useEffect(() => {
    if (song) {
      playAudio();
    } else {
      setIsPlaying(false); // Pause audio if song is null
    }
  }, [song]);

  useEffect(() => {
    if (audioRef?.current) {
      const handleEnded = () => {
        if (audioRef?.current?.currentTime >= audioRef?.current?.duration) {
          handleNext();
        }
      };
      audioRef?.current.addEventListener("ended", handleEnded);

      return () => {
        audioRef?.current.removeEventListener("ended", handleEnded);
      };
    }
  }, [audioRef?.current, handleNext]);

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-2 border-gray-600 bg-gray-800 text-white p-4 shadow-lg flex flex-col sm:flex-row justify-between items-center sm:items-stretch">
      <div className="flex sm:flex-col lg:flex-row items-center mb-2 sm:mb-0">
        <img
          src={song.image}
          alt={song.title}
          className="w-16 h-12 rounded-md mb-2 sm:mb-0"
        />
        <div className="text-center sm:text-left ml-6">
          <h3 className="lg:text-lg text-xs font-semibold">{song.title}</h3>
          <p className="lg:text-sm text-xs">{song.artist}</p>
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
            <img src={loop1} alt="repeat 1" className="h-7" />
          ) : (
            <i className="fa-solid fa-repeat" style={{ fontSize: "17px" }}></i>
          )}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs sm:text-base" onClick={() => setVolumemute()}>
          {volume == 1 || volume >= 0.5 ? (
            <SpeakerHigh size={32} />
          ) : volume == 0 ? (
            <SpeakerX size={32} />
          ) : volume > 0 && volume < 1 ? (
            <SpeakerLow size={32} />
          ) : null}
        </span>
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
