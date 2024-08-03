import React from "react";
import { Layout } from "../../components/index";

const PlaylistPage = () => {
  // Simulated playlist data (you can replace this with actual data fetched from an API)
  const playlists = [
    {
      id: 1,
      title: "Chill Vibes",
      description: "Relaxing tunes for any time of the day",
      imageUrl: "https://via.placeholder.com/300",
      // Other playlist information (e.g., songs, artists, etc.)
    },
    {
      id: 2,
      title: "Workout Mix",
      description: "Energetic tracks to keep you motivated",
      imageUrl: "https://via.placeholder.com/300",
      // Other playlist information (e.g., songs, artists, etc.)
    },
    // Add more playlists as needed
  ];

  return (
    <Layout>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6">Playlists</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-white rounded-lg shadow-md">
              <img
                src={playlist.imageUrl}
                alt={playlist.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{playlist.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{playlist.description}</p>
                {/* Additional information about the playlist */}
                {/* You can add buttons, links, or more details here */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default PlaylistPage;
