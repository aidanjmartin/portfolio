import { Section } from "./section";

const experiences = [
  {
    date: "Mar 2026 – Present",
    org: "Vanderbilt University",
    role: "VISE Summer Fellow (VSF)",
    advisor: "Dr. Jie Ying Wu",
    description:
      "Accepted to the 2026 Vanderbilt Institute for Surgery and Engineering Summer Fellowship — research focus on kidney reconstruction from endoscopic videos.",
  },
  {
    date: "Mar 2026 – Present",
    org: "VALIANT — Vanderbilt",
    role: "AI Scholar",
    description:
      "Connecting skill classification, optimal & robust control, and computer vision to bring interdisciplinary mechatronics perspectives into the MAPLE Lab's surgical robotics research.",
  },
  {
    date: "Sep 2025 – Present",
    org: "MAPLE Lab — Vanderbilt",
    role: "Research Assistant",
    advisor: "Dr. Jie Ying Wu",
    description:
      "Built deep-learning models — LSTM, 1D-CNN, TCN — to automate surgeon skill prediction on the da Vinci Research Kit (dVRK). Processed high-dimensional kinematics, contact forces, jerk, and entropy streams in Python; validated and visualized multivariate temporal data in MATLAB.",
  },
  {
    date: "Jan 2025 – Aug 2025",
    org: "Optics & Mobile Robotics Lab — MTSU",
    role: "Research Assistant",
    advisor: "Dr. Hongbo Zhang",
    description:
      "Designed and built a six-wheeled moisture-sensing robot for agricultural irrigation. Established wireless MQTT and ESP-NOW networks across ESP32 nodes and a Raspberry Pi gateway. Implemented closed-loop control in Arduino IDE and Python.",
  },
  {
    date: "Oct 2024 – Jul 2025",
    org: "RoboThink — Middle & East TN",
    role: "Lecturer / Instructor",
    description:
      "Instructed students ages 8–14 on robotics fundamentals — DC motors, microcontrollers, and intro programming.",
  },
];

export function Experience() {
  return (
    <Section id="experience" label="05" title="Experience">
      <ol className="relative m-0 list-none p-0">
        {/* Timeline line */}
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border-strong" />

        {experiences.map((exp, index) => (
          <li
            key={`${exp.org}-${exp.role}`}
            className={`relative pl-10 ${
              index !== experiences.length - 1 ? "pb-8" : ""
            }`}
          >
            {/* Timeline marker */}
            <div className="absolute left-0 top-1.5 h-[15px] w-[15px] border border-forest bg-parchment" />

            <div className="border border-border bg-parchment-dark px-6 py-5">
              <div className="mb-2 flex flex-wrap items-center gap-4">
                <span className="font-mono text-[0.75rem] tracking-[0.03em] text-forest">
                  {exp.date}
                </span>
                <span className="font-mono text-[0.75rem] text-muted-foreground">
                  {exp.org}
                </span>
              </div>
              <h3 className="mb-1 font-serif text-[1.15rem] font-semibold text-ink">
                {exp.role}
              </h3>
              {exp.advisor && (
                <p className="mb-3 text-[0.8rem] italic text-muted-foreground">
                  Advisor: {exp.advisor}
                </p>
              )}
              <p className="m-0 text-[0.9rem] leading-relaxed text-muted">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
