import Image from "next/image";

export default function Rocketry() {
  return (
    <main>
      <h2>Project Documentation</h2>

      <div className="project-gallery">
        <div className="project-image">
          <Image
            src="/projects/rocketry/Team_photo.JPEG"
            alt="Rocketry team with completed rocket"
            width={900}
            height={600}
          />
          <p>Rocketry team with the completed vehicle prior to flight.</p>
        </div>

        <div className="project-image">
          <Image
            src="/projects/rocketry/approval.JPG"
            alt="Rocket approval station"
            width={900}
            height={600}
          />
          <p>Flight-readiness approval and inspection process.</p>
        </div>

        <div className="project-image">
          <Image
            src="/projects/rocketry/Review_station.jpeg"
            alt="Rocket design review station"
            width={900}
            height={600}
          />
          <p>Design review and preparation prior to flight.</p>
        </div>

        <div className="project-image">
          <Image
            src="/projects/rocketry/Data-Retrieval.JPG"
            alt="Post-flight data retrieval"
            width={900}
            height={600}
          />
          <p>Post-flight recovery and retrieval of onboard flight data.</p>
        </div>
      </div>
    </main>
  );
}