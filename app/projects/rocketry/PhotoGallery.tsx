
"use client";

import { useState } from "react";

const photos = [
  {
    src: "/images/approval.JPG",
    title: "Rocket Approval",
  },
  {
    src: "/images/Data-Retrieval.JPG",
    title: "Data Retrieval",
  },
  {
    src: "/images/Review_station.jpeg",
    title: "Review Station",
  },
  {
    src: "/images/Team_photo.JPEG",
    title: "Rocket Team",
  },
];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((current - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setCurrent((current + 1) % photos.length);
  };

  return (
    <section className="photo-gallery">
      <div className="gallery-window">
        <div
          className="gallery-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {photos.map((photo, index) => (
            <div className="gallery-slide" key={photo.src}>
              <img
                src={photo.src}
                alt={photo.title}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="gallery-button gallery-button-left"
        onClick={previous}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <button
        className="gallery-button gallery-button-right"
        onClick={next}
        aria-label="Next photo"
      >
        ›
      </button>

      <div className="gallery-caption">
        {photos[current].title}
      </div>

      <div className="gallery-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`gallery-dot ${
              current === index ? "active" : ""
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

