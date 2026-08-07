"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/projects/rocketry/Team_photo.JPEG",
    alt: "Rocketry team with completed rocket",
    caption: "Rocketry team with the completed vehicle prior to flight.",
  },
  {
    src: "/projects/rocketry/approval.JPG",
    alt: "Rocket approval station",
    caption: "Flight-readiness approval and inspection process.",
  },
  {
    src: "/projects/rocketry/Review_station.jpeg",
    alt: "Rocket design review station",
    caption: "Design review and preparation prior to flight.",
  },
  {
    src: "/projects/rocketry/Data-Retrieval.JPG",
    alt: "Post-flight data retrieval",
    caption: "Post-flight recovery and retrieval of onboard flight data.",
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
    <div className="photo-carousel">

      <button
        className="carousel-button left"
        onClick={previous}
        aria-label="Previous photo"
      >
        ←
      </button>

      <div className="carousel-image">
        <Image
          src={photos[current].src}
          alt={photos[current].alt}
          width={1200}
          height={800}
          priority
        />
      </div>

      <button
        className="carousel-button right"
        onClick={next}
        aria-label="Next photo"
      >
        →
      </button>

      <div className="carousel-caption">
        <p>{photos[current].caption}</p>
      </div>

      <div className="carousel-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === current ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`View photo ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}