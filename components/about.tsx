import Image from "next/image";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" label="01" title="About">
      <div className="grid items-start gap-10 md:grid-cols-[200px_1fr]">
        {/* Photo with frame */}
        <div className="relative mx-auto max-w-[180px] md:mx-0 md:max-w-none">
          <Image
            src="/images/headshot.png"
            alt="Aidan J Martin"
            width={200}
            height={200}
            className="aspect-square w-full object-cover"
            priority
          />
          {/* Engineering frame decoration */}
          <div className="pointer-events-none absolute -inset-2">
            <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-forest-light/50" />
            <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-forest-light/50" />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-forest-light/50" />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-forest-light/50" />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4 text-[0.9rem] leading-[1.7] text-cream-muted">
          <p>
            I am a Mechatronics Engineering student at Middle Tennessee State
            University, completing my Bachelor&apos;s degree with minors in
            Computer Science and Mathematics. Alongside my undergraduate
            studies, my graduate-level coursework focuses on{" "}
            <strong className="font-medium text-cream">
              advanced control, reinforcement learning, robotics, and AI
            </strong>
            .
          </p>
          <p>
            Concurrently, I am a robotics researcher at Vanderbilt
            University&apos;s{" "}
            <strong className="font-medium text-cream">
              Machine Automation, Perception, and Learning (MAPLE) Lab
            </strong>
            , where my work centers on surgical robotics and machine learning.
          </p>
          <p>
            My technical passions are rooted in complex algorithmic design — I
            am actively interested in pursuing work in{" "}
            <span className="text-forest-light">
              optimal and robust control
            </span>
            ,{" "}
            <span className="text-forest-light">
              novel learning methods for control
            </span>
            ,{" "}
            <span className="text-forest-light">
              optimization
            </span>
            ,{" "}
            <span className="text-forest-light">
              computer vision
            </span>
            , and{" "}
            <span className="text-walnut-light">
              financial mathematics and engineering
            </span>
            .
          </p>
          <p>
            I look forward to further expanding on these areas this summer
            during the{" "}
            <strong className="font-medium text-cream">
              VUSE Summer Research Program at Vanderbilt
            </strong>
            , where my research will focus on{" "}
            <strong className="font-medium text-cream">
              3D Kidney Reconstruction and optimal control
            </strong>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
