"use client";

import { useState } from "react";

// Add your media + captions here:
// - Use type: "image" for JPG/PNG files
// - Use type: "video" for MP4/WebM files
// - Replace each caption text with your own
const mediaItems = [
  {
    type: "image",
    src: "/projects/rocketry/approval.JPG",
    title: "Rocket Approval",
    caption: "Add your caption for this image here.",
  },
  {
    type: "image",
    src: "/projects/rocketry/Data-Retrieval.JPG",
    title: "Data Retrieval",
    caption: "Add your caption for this image here.",
  },
  {
    type: "video",
    src: "/projects/rocketry/Crayon.mp4",
    title: "Senior Flight",
    caption: "Add your caption for this video here.",
  },
  {
    type: "image",
    src: "/projects/rocketry/Review_station.jpeg",
    title: "Review Station",
    caption: "Add your caption for this image here.",
  },
  {
    type: "video",
    src: "/projects/rocketry/Icaurus.mp4",
    title: "Junior Flight",
    caption: "Add your caption for this video here.",
  },
  {
    type: "image",
    src: "/projects/rocketry/Team_photo.JPEG",
    title: "Rocket Team",
    caption: "Add your caption for this image here.",
  },
];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % mediaItems.length);
  const previous = () =>
    setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);

  const currentItem = mediaItems[current];

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
        {mediaItems.map((item, index) => {
          const offset = (index - current + mediaItems.length) % mediaItems.length;
          const normalized =
            offset > mediaItems.length / 2 ? offset - mediaItems.length : offset;
          const active = normalized === 0;

          return (
            <div
              key={`${item.type}-${item.src}`}
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
                background: "#111111",
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    background: "#000000",
                  }}
                />
              )}
            </div>
          );
        })}

        <button
          onClick={previous}
          aria-label="Previous media"
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
          aria-label="Next media"
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
        <h3 style={{ margin: 0, color: "#111111" }}>{currentItem.title}</h3>
        <p style={{ margin: 0, color: "#444444", textAlign: "center" }}>
          {currentItem.caption}
        </p>

        <div style={{ display: "flex", gap: 10 }}>
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to media ${index + 1}`}
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