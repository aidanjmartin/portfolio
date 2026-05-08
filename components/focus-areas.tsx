import { Section } from "./section";

const focusAreas = [
  {
    title: "Advanced & Novel Control",
    description:
      "Optimal control, robust control, and learning-based methods applied to robotic and surgical systems.",
  },
  {
    title: "Computer Vision",
    description:
      "Perception for robotics — surgical skill assessment, kinematic tracking, and 3D reconstruction from endoscopic video.",
  },
  {
    title: "Optimization",
    description:
      "Numerical optimization and convex methods grounding control synthesis, parameter estimation, and learning pipelines.",
  },
  {
    title: "Financial Engineering",
    description:
      "Quantitative finance and financial mathematics — stochastic modeling, optimization, and applied probability.",
  },
];

export function FocusAreas() {
  return (
    <Section id="focus" label="02" title="Focus Areas">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="border border-border bg-parchment-dark p-6 transition-all hover:-translate-y-0.5 hover:border-forest"
          >
            <h3 className="mb-3 font-serif text-[1.1rem] font-semibold text-ink">
              {area.title}
            </h3>
            <p className="m-0 text-[0.85rem] leading-relaxed text-muted">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
