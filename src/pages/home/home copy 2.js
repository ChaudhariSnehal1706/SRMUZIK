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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => handlePlaySong(song)}
            >
              <div className="flex justify-center">
                  <img
                    src={song.image}
                    alt={`Song : ${song.title}`}
                    className="rounded-md mb-4 hover:cursor-pointer hover:scale-125 hover:bottom-5 hover:relative"
                    style={{ maxWidth: "200px" }}
                  />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{song.title}</h2>
              <p className="text-gray-600 mb-2">Artist: {song.artist}</p>
              <p className="text-gray-600">Duration: {song.duration}</p>
              <p className="text-gray-600">Views: {song.views}</p>
              <div className="flex justify-between mt-4">
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
          ))}
        </div>
      </div>
      <StickyPlayer song={currentSong} songs={songs} onNext={handleNext} onPrevious={handlePrevious} />
    </Layout>
  );
}

export default Home;
