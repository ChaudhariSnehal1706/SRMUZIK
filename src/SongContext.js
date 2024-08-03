// SongContext.js
import React, { createContext, useContext, useState } from 'react';

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  
  return (
    <SongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongContext = () => {
  return useContext(SongContext);
};
