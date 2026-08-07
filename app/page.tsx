
export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">JL</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
       <p className="eyebrow">Aerospace Engineering Student</p>

<h1>Jonah Lenderman</h1>

<p className="hero-text">
  Hi my name is Jonah, I'm currently attending Texas Tech University pursuing a degree in Aerospace Engineering.
  I have a strong interest in rocketry, propulsion, and vehicle systems.
  I hope to pursue a career in Aerospace, specifically in the field of rocketry and propulsion. 
</p>

<p className="hero-text">
  Currently developing skills in CAD, rocketry, engineering design,
  and aerospace vehicle systems.
</p>

        <div>
          <a href="#projects">View My Projects</a>

<a 
  href="/Jonah_Lenderman_Resume.pdf"
  target="_blank"
>
  Resume
</a>
          <a href="#about">About Me</a>
        </div>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
<div className="project-card">
  <p className="project-number">01</p>
  <h3>
  <a href="/projects/rocketry">
    High Power Rocketry
  </a>
</h3>
  <p>
    Active member of a rocketry program focused on rocket design,
    construction, testing, and certification. Developing experience
    with flight systems, recovery systems, and aerospace testing.
  </p>
</div>

<div className="project-card">
  <p className="project-number">02</p>
  <h3>CAD & Mechanical Design</h3>
  <p>
    Creating mechanical designs and 3D models using Fusion 360.
    Exploring engineering drawings, assemblies, and design
    optimization.
  </p>
</div>

<div className="project-card">
  <p className="project-number">03</p>
  <h3>Engineering Leadership</h3>
  <p>
    Developed leadership and teamwork skills through engineering,
    music, and extracurricular organizations while managing
    responsibilities and collaborating with teams.
  </p>
</div>

      </section>

      <section id="about">
        <h2>About Me</h2>

        <p>
          I'm an aspiring aerospace engineer who enjoys solving technical
          problems and working on hands-on engineering projects. I'm
          particularly interested in rocketry, propulsion, and vehicle systems.
        </p>
      </section>

      <section id="experience">
  <h2>Experience</h2>

  <p>
    <strong>Rocketry Program</strong><br />
    Hands-on experience designing, building, and testing rockets.
    Working toward additional certifications and expanding aerospace
    engineering skills.
  </p>

  <p>
    <strong>Leadership Experience</strong><br />
    Served in multiple leadership roles including section leadership
    and equipment responsibilities, developing communication,
    organization, and teamwork skills.
  </p>

  <p>
    <strong>Engineering Coursework</strong><br />
    Completed engineering-focused coursework including CAD,
    physics, calculus, and technical design projects.
  </p>
</section>

      <section id="contact">
  <h2>Contact</h2>

  <p>
    Interested in connecting? Feel free to reach out.
  </p>

  <a href="https://github.com/JLenderm">
    GitHub 
  </a>

  <a href="https://www.linkedin.com/in/jonah-lenderman-59589540b/">
     LinkedIn
  </a>
</section>
    </main>
  );
}
