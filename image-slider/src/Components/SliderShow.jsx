import React from "react";
import { useState, useEffect } from "react";

//slider function is to change the images
function Slideshow({ imgs }) {
  const [index, setIndex] = useState(0);

  //This is for when the last image render set back to the first image
  useEffect(() => {
    setIndex(0);
  }, []);

  //next function is for to chage the next image
  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  // prev function is for to set back to the previous image
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
}

export default Slideshow;
