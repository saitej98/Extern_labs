import React from "react";
import Slideshow from "./SliderShow";

// It is main function components for set the images and render it in the server
function Slider() {
  return (
    <div className="App">
      <h1>SlideShow</h1>
      <Slideshow
        imgs={[
          "https://wallpaperaccess.com/full/5572369.jpg",
          "https://wallpaperaccess.com/full/6493332.jpg",
          "https://wallpaperaccess.com/full/434635.jpg",
          "https://wallpapercave.com/wp/wp2508555.jpg",
          "https://c4.wallpaperflare.com/wallpaper/902/124/853/cars-lamborghini-wallpaper-preview.jpg",
          "https://i.pinimg.com/originals/c8/b9/74/c8b974aa8728e42d02a9af2944348c52.jpg",
          "https://www.carscoops.com/wp-content/uploads/2011/01/mostexpensivecars2010_lead.jpg",
        ]}
      />
    </div>
  );
}

export default Slider;
