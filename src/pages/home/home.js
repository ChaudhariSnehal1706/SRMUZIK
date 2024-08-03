import React, { useState } from "react";
import { Layout } from "../../components/index";
import songData from "../../components/tools/songs/songs";
import StickyPlayer from "../../components/StickyPlayer";

function Home() {
  const [songs, setSongs] = useState(songData);
  const [currentSong, setCurrentSong] = useState(null);

  const handleLike = (id) => {
    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          likes: song.likes + 1,
        };
      }
      return song;
    });
    setSongs(updatedSongs);
  };

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  const handleNext = (nextSong) => {
    setCurrentSong(nextSong);
  };

  const handlePrevious = (previousSong) => {
    setCurrentSong(previousSong);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-lg shadow-md lg:p-4 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer lg:m-4 my-1 flex lg:justify-between items-center"
              onClick={() => handlePlaySong(song)}
            >
              <div className="flex justify-start">
                  <img
                    src={song.image}
                    alt={`Song : ${song.title}`}
                    className="rounded-md hover:cursor-pointer lg:hover:scale-125 lg:hover:bottom-5 lg:hover:relative lg:h-14 h-8 m-2"
                    // style={{ maxWidth: "70px" }}
                  />
              </div>
              <div className="lg:block">

              <h2 className="lg:text-xl text-sm font-semibold ">{song.title}</h2>
            <p className="text-gray-600 mb-2  lg:text-xl text-xs overflow-hidden ft" > {song.artist}</p>
              </div>
              <p className="text-gray-600 text-center hidden lg:block">Duration: {song.duration}</p>

              {/* Render views and like button only on larger screens */}
              <div className="hidden lg:flex items-center gap-4">
                <p className="text-gray-600 text-center">Views: {song.views}</p>
                <div className="flex justify-between  text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(song.id);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <i className="fa-solid fa-thumbs-up"></i> ({song.likes})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StickyPlayer song={currentSong} songs={songs} onNext={handleNext} onPrevious={handlePrevious} />
    </Layout>
  );
}

export default Home;
