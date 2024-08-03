import React, { useState } from "react";
import { Layout } from "../../components/index";
import { Link } from "react-router-dom";
import songData from "../../components/tools/songs/songs"
// import Like from "../../assets/image/thumbsup.jpg";

function Home() {
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

  const [songs, setSongs] = useState(songData);
  return (
    <Layout>
      {/* <Banner /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex justify-center">
                <Link key={song.id} to={`/playsong/${song.id}`}>
                  <img
                    // src={getRandomImage()} // Get a random image URL
                    src={song.image} // Get a random image URL
                    alt={`Song : ${song.title}`}
                    className="rounded-md mb-4 hover:cursor-pointer hover:scale-125 hover:bottom-5 hover:relative"
                    style={{ maxWidth: "200px" }}
                  />
                </Link>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{song.title}</h2>
              <p className="text-gray-600 mb-2">Artist: {song.artist}</p>
              <p className="text-gray-600">Duration: {song.duration}</p>{" "}
              <p className="text-gray-600">Views: {song.views}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleLike(song.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                  {/* <img src={Like} alt="" className="h-10" />  */}
                  <i class="fa-solid fa-thumbs-up"></i> ({song.likes})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
