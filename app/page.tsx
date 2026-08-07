
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
          Engineering student interested in aerospace design, rocketry,
          propulsion, and vehicle systems.
        </p>

        <div>
          <a href="#projects">View My Projects</a>
          <a href="#about">About Me</a>
        </div>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <p className="project-number">01</p>
            <h3>Rocketry</h3>
            <p>
              Hands-on experience designing, building, and testing rockets
              through rocketry projects and competitions.
            </p>
          </div>

          <div className="project-card">
            <p className="project-number">02</p>
            <h3>CAD & Mechanical Design</h3>
            <p>
              Engineering designs and 3D models created using Fusion 360.
            </p>
          </div>

          <div className="project-card">
            <p className="project-number">03</p>
            <h3>Future Projects</h3>
            <p>
              College engineering projects, simulations, programming,
              and aerospace design work will be added here.
            </p>
          </div>
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
          Engineering, rocketry, leadership, and other experiences will be
          showcased here as I continue developing my skills.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <p>
          Interested in connecting? You can find me through my professional
          profiles or contact me directly.
        </p>
      </section>
    </main>
  );
}