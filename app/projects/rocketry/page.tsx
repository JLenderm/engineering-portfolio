
import Image from "next/image";
export default function Rocketry() {
  return (
    <main>
      <h1>High Power Rocketry</h1>

      <p>
        Hands-on aerospace engineering experience through rocket
        design, construction, testing, and flight preparation.
      </p>

      <h2>Project Overview</h2>

      <p>
        This project focuses on applying engineering principles to
        develop and test flight-ready rocket systems.
      </p>

      <h2>Skills Developed</h2>

      <ul>
        <li>Mechanical design</li>
        <li>Rocket construction</li>
        <li>Testing procedures</li>
        <li>Engineering documentation</li>
      </ul>

      <h2>Future Improvements</h2>

      <p>
        Future additions will include flight data, CAD models,
        certification progress, and testing results.
      </p>
      <h2>Project Gallery</h2>

<div className="project-gallery">

  <Image
    src="/projects/rocketry/assembly.jpg"
    alt="Rocket assembly process"
    width={900}
    height={600}
  />

  <Image
    src="/projects/rocketry/launch.jpg"
    alt="Rocket launch"
    width={900}
    height={600}
  />

  <Image
    src="/projects/rocketry/cad.png"
    alt="Rocket CAD model"
    width={900}
    height={600}
  />

</div>
      
    </main>
  );
}