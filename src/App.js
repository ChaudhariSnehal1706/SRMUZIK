import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { SongProvider } from './SongContext';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import PlaylistPage from "./pages/playList/playList";
import PlaySongPage from "./pages/playSong/playSongPage";
import StickyPlayer from "./components/StickyPlayer";

function App() {
  return (
    <Router>
      <SongProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/playlist" element={<PlaylistPage />} />
            <Route path="/playsong/:id" element={<PlaySongPage />} />
          </Routes>
          <StickyPlayer />
        </div>
      </SongProvider>
    </Router>
  );
}

export default App;
