import React from "react";

const Slider = ({ animation, images }) => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className={`flex items-center justify-center gap-10 mx-auto ${animation}`}>
        {images.map((image, index) => (
          <li key={index}>
            <img
              className="w-10 mx-2 grayscale hover:grayscale-0 select-none"
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
