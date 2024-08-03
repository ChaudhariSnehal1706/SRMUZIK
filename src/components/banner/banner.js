import React, { useState } from "react";

const Banner = ({ text, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative text-white font-bold text-center overflow-hidden">
      <div className="w-full h-[400px] overflow-hidden relative">
        <img
          src={images[currentImageIndex]}
          alt="Random Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h2>{text}</h2>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 flex items-center">
        <button
          onClick={handlePrevious}
          className="rounded-full w-8 h-8 flex justify-center items-center mr-2">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center">
        <button
          onClick={handleNext}
          className="rounded-full w-8 h-8 flex justify-center items-center">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const images = [
    // "https://via.placeholder.com/1920x500",
    // "https://via.placeholder.com/1920x500/FF0000/FFFFFF",
    // "https://via.placeholder.com/1920x500/0000FF/FFFFFF",
    "https://wallpaperaccess.com/full/3074008.jpg",
    "https://wallpaperaccess.com/full/1162795.jpg",
    "https://wallpaperaccess.com/full/21633.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      {/* <Banner text="Welcome to the Slider" images={images} /> */}
      <Banner images={images} />
    </div>
  );
};

export default App;
