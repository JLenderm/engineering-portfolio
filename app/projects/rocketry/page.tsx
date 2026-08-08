import PhotoGallery from "./PhotoGallery";

const flightData = [
  { label: "0s", altitude: 0, velocity: 0 },
  { label: "5s", altitude: 180, velocity: 44 },
  { label: "10s", altitude: 620, velocity: 92 },
  { label: "15s", altitude: 1180, velocity: 126 },
  { label: "20s", altitude: 2010, velocity: 150 },
  { label: "25s", altitude: 2910, velocity: 176 },
  { label: "30s", altitude: 3650, velocity: 194 },
  { label: "35s", altitude: 4360, velocity: 210 },
  { label: "40s", altitude: 4850, velocity: 198 },
];

const teamMembers = [
  {
    role: "Project Manager / Head of Electrical / Head of Structural",
    name: "Jonah Lenderman",
    description:
      "Coordinates the overall project, manages schedule and milestones, oversees electronics, and leads structure design and analysis for the rocket system.",
  },
  {
    role: "Head of Recovery",
    name: "Kennedy Rhodes",
    description:
      "Designs and tests the parachute, recovery system, and deployment sequence to ensure safe and reliable descent.",
  },
  {
    role: "Head of Propulsion and Business",
    name: "Nathan Barker",
    description:
      "Leads propulsion analysis and motor integration, and budgeting.",
  },
  {
    role: "Head of Logistics",
    name: "Jane Vo",
    description:
      "Coordinates part retrieval, travel, launch-day operations, and overall team logistics for a successful project.",
  },
  {
    role: "Support",
    name: "Zoe Gao",
    description:
      "Provides technical and operational support across testing, construction, field setup, and general team coordination as needed.",
  },
];

export default function Rocketry() {
  const maxAltitude = Math.max(...flightData.map((point) => point.altitude));
  const chartPoints = flightData
    .map((point, index) => {
      const x = 60 + (index * 470) / (flightData.length - 1);
      const y = 210 - (point.altitude / maxAltitude) * 150;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 80px",
        color: "#111111",
      }}
    >
      <section
        style={{
          padding: "80px 0 20px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#555555",
          }}
        >
          Rocketry Project
        </p>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            margin: "16px 0 12px",
            lineHeight: 1.05,
            letterSpacing: "-0.06em",
          }}
        >
          High Power Rocketry
        </h1>

        <p
          style={{
            maxWidth: "760px",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "#333333",
          }}
        >
          This project focuses on the design, testing, and flight validation of a
          high-power rocket system. The team worked together to balance propulsion,
          structural integrity, electrical systems, and mission data collection to
          achieve a successful launch profile.
        </p>
      </section>

      <PhotoGallery />

      <section
        style={{
          padding: "40px 0",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            margin: "0 0 18px",
            letterSpacing: "-0.04em",
          }}
        >
          Project Description
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#2d2d2d",
            maxWidth: "900px",
          }}
        >
          The rocket was designed to carry a payload and collect real-time flight
          data throughout ascent, apogee, and descent. Each subsystem was engineered
          around reliability, safety, and measurable performance, with a strong focus
          on validation through both simulation and physical testing.
          <br />
          <br />
          The project required careful coordination between mechanical design,
          avionics integration, and mission planning. Through iterative testing and
          analysis, the team refined the vehicle to improve stability, reduce risk,
          and ensure the launch objectives were met.
        </p>
      </section>

      <section
        style={{
          padding: "20px 0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            margin: "0 0 24px",
            letterSpacing: "-0.04em",
          }}
        >
          Flight Data
        </h2>

        <div
          style={{
            background: "#f6f6f6",
            border: "1px solid #d9d9d9",
            borderRadius: "18px",
            padding: "20px",
          }}
        >
          <svg
            viewBox="0 0 600 260"
            style={{
              width: "100%",
              height: "260px",
              display: "block",
              background: "#fafafa",
              borderRadius: "12px",
            }}
          >
            <line x1="40" y1="210" x2="560" y2="210" stroke="#222" strokeWidth="2" />
            <line x1="40" y1="30" x2="40" y2="210" stroke="#222" strokeWidth="2" />

            {[0, 1, 2, 3, 4].map((step) => {
              const y = 210 - step * 35;
              return (
                <g key={step}>
                  <line x1="40" y1={y} x2="560" y2={y} stroke="#e0e0e0" strokeWidth="1" />
                  <text
                    x="12"
                    y={y + 4}
                    fontSize="11"
                    fill="#444"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {Math.round((maxAltitude / 4) * (4 - step))} ft
                  </text>
                </g>
              );
            })}

            <polyline
              fill="none"
              stroke="#111111"
              strokeWidth="3"
              points={chartPoints}
            />

            {flightData.map((point, index) => {
              const x = 60 + (index * 470) / (flightData.length - 1);
              const y = 210 - (point.altitude / maxAltitude) * 150;
              return (
                <g key={point.label}>
                  <circle cx={x} cy={y} r="4" fill="#111111" />
                  <text
                    x={x}
                    y="232"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#444"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {point.label}
                  </text>
                </g>
              );
            })}
          </svg>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "12px",
              marginTop: "18px",
            }}
          >
            {flightData.map((point) => (
              <div
                key={point.label}
                style={{
                  background: "#ffffff",
                  border: "1px solid #d8d8d8",
                  borderRadius: "10px",
                  padding: "10px 12px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#666666",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {point.label}
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                  {point.altitude} ft
                </div>
                <div style={{ fontSize: "0.9rem", color: "#444444" }}>
                  {point.velocity} ft/s
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "20px 0 40px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#f4f4f4",
            border: "1px solid #d9d9d9",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >
          <img
            src="/projects/rocketry/simulation.png"
            alt="Rocket simulation"
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div>
          <h2
            style={{
              fontSize: "2rem",
              margin: "0 0 12px",
              letterSpacing: "-0.04em",
            }}
          >
            Simulation
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#2d2d2d",
              margin: 0,
            }}
          >
            Replace this section with a simulation image and add a short explanation
            of the predicted flight profile, stability conditions, and key design
            assumptions used in the analysis. This can include launch trajectory,
            drag behavior, weather assumptions, and expected apogee.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "20px 0 30px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            margin: "0 0 24px",
            letterSpacing: "-0.04em",
          }}
        >
          Team Roles
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.role}
              style={{
                background: "#ffffff",
                border: "1px solid #d9d9d9",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#555555",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                }}
              >
                {member.role}
              </p>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "1.4rem",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#333333",
                }}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}