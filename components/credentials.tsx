import { Section } from "./section";

const graduateCourses = [
  { code: "MATH 6300", name: "Optimization" },
  { code: "ENGR 6010", name: "AI in Robotics" },
  { code: "ENGR 6020", name: "Advanced Control and Applications" },
  { code: "ENGR 6030", name: "Reinforcement Learning" },
];

const undergradCourses = [
  { code: "CSCI 3350", name: "Machine Learning" },
  { code: "ENGR 4530", name: "Controls & Optimization" },
  { code: "ENGR 4580", name: "Mechatronic System Design" },
  { code: "ENGR 3510", name: "Circuits II" },
  { code: "ENGR 3520", name: "Digital Circuits" },
  { code: "ENGR 3540", name: "Intro to Feedback Control" },
];

const taCourses = [
  { code: "ENGR 3510", name: "Circuits II" },
  { code: "ENGR 3520", name: "Digital Circuits" },
  { code: "ENGR 3540", name: "Intro to Feedback Control" },
];

const involvement = [
  "IEEE MTSU Student Branch — Founder & President",
  "Robotics Club — President",
  "Micromouse — Programming Lead",
  "Society of Manufacturing Engineers",
  "Quantum Computing Club",
  "Association for Computing Machinery",
];

export function Credentials() {
  return (
    <Section id="credentials" label="03" title="Credentials">
      {/* Education */}
      <div className="mb-8">
        <h3 className="mb-3 border-b border-border pb-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-forest-light">
          Education
        </h3>
        <div className="border border-border bg-surface p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h4 className="mb-1 font-sans text-[1.1rem] font-semibold text-cream">
                Middle Tennessee State University
              </h4>
              <p className="m-0 text-[0.85rem] text-muted">
                B.S. Mechatronics Engineering
              </p>
              <p className="mt-1 text-[0.8rem] text-muted-foreground">
                Minors in Computer Science & Mathematics
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <span className="border border-border-strong px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.03em] text-muted">
                2024 – 2027
              </span>
              <span className="border border-forest-light px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.03em] text-forest-light">
                GPA 4.00
              </span>
              <span className="border border-border-strong px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.03em] text-muted">
                3-Year Accelerated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Graduate Coursework */}
      <div className="mb-8">
        <h3 className="mb-3 border-b border-border pb-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-forest-light">
          Graduate-Level Coursework
        </h3>
        <p className="mb-3 text-[0.75rem] italic text-muted-foreground">
          Taken as an undergraduate (course number ≥ 6000)
        </p>
        <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
          {graduateCourses.map((course) => (
            <li
              key={course.code}
              className="border-b border-border py-1.5 text-[0.85rem] text-cream-muted"
            >
              <span className="mr-3 font-mono text-[0.75rem] text-walnut-light">
                {course.code}
              </span>
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Undergraduate Coursework */}
      <div className="mb-8">
        <h3 className="mb-3 border-b border-border pb-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-forest-light">
          Undergraduate Coursework (Selected)
        </h3>
        <p className="mb-3 text-[0.75rem] italic text-muted-foreground">
          Course number &lt; 5000
        </p>
        <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
          {undergradCourses.map((course) => (
            <li
              key={course.code}
              className="border-b border-border py-1.5 text-[0.85rem] text-cream-muted"
            >
              <span className="mr-3 font-mono text-[0.75rem] text-walnut-light">
                {course.code}
              </span>
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Teaching Assistant */}
      <div className="mb-8">
        <h3 className="mb-3 border-b border-border pb-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-forest-light">
          Teaching Assistant
        </h3>
        <p className="mb-3 text-[0.75rem] italic text-muted-foreground">
          Write and grade labs, exams, homework, and quizzes. Hold weekly
          recitation/tutorial sections for Circuits II and Intro to Feedback
          Control.
        </p>
        <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-3">
          {taCourses.map((course) => (
            <li
              key={course.code}
              className="border-b border-border py-1.5 text-[0.85rem] text-cream-muted"
            >
              <span className="mr-3 font-mono text-[0.75rem] text-walnut-light">
                {course.code}
              </span>
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Leadership */}
      <div>
        <h3 className="mb-3 border-b border-border pb-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-forest-light">
          Leadership & Involvement
        </h3>
        <div className="flex flex-wrap gap-2">
          {involvement.map((item) => (
            <span
              key={item}
              className="border border-border bg-surface px-3 py-2 text-[0.8rem] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
