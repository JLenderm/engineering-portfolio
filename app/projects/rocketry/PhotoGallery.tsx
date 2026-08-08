"use client";

import { useState } from "react";

const photos = [
  { src: "/projects/rocketry/approval.JPG", title: "Rocket Approval" },
  { src: "/projects/rocketry/Data-Retrieval.JPG", title: "Data Retrieval" },
  { src: "/projects/rocketry/Review_station.jpeg", title: "Review Station" },
  { src: "/projects/rocketry/Team_photo.JPEG", title: "Rocket Team" },
];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % photos.length);
  const previous = () =>
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "32px auto",
        padding: "0 16px",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 500,
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid #d9d9d9",
          background: "#f3f3f3",
        }}
      >
        {photos.map((photo, index) => {
          const offset = (index - current + photos.length) % photos.length;
          const normalized =
            offset > photos.length / 2 ? offset - photos.length : offset;
          const active = normalized === 0;

          return (
            <div
              key={photo.src}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: active ? 720 : 420,
                height: active ? 390 : 250,
                transform: `translate(-50%, -50%) translateX(${normalized * 180}px) scale(${active ? 1 : 0.82})`,
                opacity: Math.abs(normalized) > 1 ? 0 : active ? 1 : 0.6,
                transition: "all 0.35s ease",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: active
                  ? "0 20px 50px rgba(0,0,0,0.18)"
                  : "0 10px 30px rgba(0,0,0,0.12)",
                zIndex: 10 - Math.abs(normalized),
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          );
        })}

        <button
          onClick={previous}
          aria-label="Previous photo"
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "none",
            background: "#111111",
            color: "#ffffff",
            fontSize: 28,
            cursor: "pointer",
            zIndex: 30,
          }}
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="Next photo"
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "none",
            background: "#111111",
            color: "#ffffff",
            fontSize: 28,
            cursor: "pointer",
            zIndex: 30,
          }}
        >
          ›
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          marginTop: 18,
        }}
      >
        <h3 style={{ margin: 0, color: "#111111" }}>{photos[current].title}</h3>

        <div style={{ display: "flex", gap: 10 }}>
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to photo ${index + 1}`}
              style={{
                width: index === current ? 12 : 10,
                height: index === current ? 12 : 10,
                borderRadius: "50%",
                border: "none",
                background: index === current ? "#111111" : "#bdbdbd",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}