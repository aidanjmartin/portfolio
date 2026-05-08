import Image from "next/image";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" label="01" title="About">
      <div className="grid items-start gap-12 md:grid-cols-[240px_1fr]">
        {/* Photo with frame */}
        <div className="relative mx-auto max-w-[200px] md:mx-0 md:max-w-none">
          <Image
            src="/images/headshot.png"
            alt="Aidan J Martin"
            width={240}
            height={240}
            className="aspect-square w-full object-cover contrast-[1.05] grayscale-[20%]"
            priority
          />
          {/* Engineering frame decoration */}
          <div className="pointer-events-none absolute -inset-3">
            <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-slate" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-slate" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-slate" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-slate" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.05em] text-muted-foreground">
              240 x 240
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-5 text-[0.95rem] leading-[1.75]">
          <p>
            I am a Mechatronics Engineering student at Middle Tennessee State
            University, completing my Bachelor&apos;s degree with minors in
            Computer Science and Mathematics. Alongside my undergraduate
            studies, my graduate-level coursework focuses on{" "}
            <strong className="font-medium text-ink">
              advanced control, reinforcement learning, robotics, and AI
            </strong>
            .
          </p>
          <p>
            Concurrently, I am a robotics researcher at Vanderbilt
            University&apos;s{" "}
            <strong className="font-medium text-ink">
              Machine Automation, Perception, and Learning (MAPLE) Lab
            </strong>
            , where my work centers on surgical robotics and machine learning.
          </p>
          <p>
            My technical passions are rooted in complex algorithmic design — I
            am actively interested in pursuing work in{" "}
            <span className="border-b border-forest text-forest">
              optimal and robust control
            </span>
            ,{" "}
            <span className="border-b border-forest text-forest">
              novel learning methods for control
            </span>
            ,{" "}
            <span className="border-b border-forest text-forest">
              optimization
            </span>
            ,{" "}
            <span className="border-b border-forest text-forest">
              computer vision
            </span>
            , and{" "}
            <span className="border-b border-walnut text-walnut">
              financial mathematics and engineering
            </span>
            .
          </p>
          <p>
            I look forward to further expanding on these areas this summer
            during the{" "}
            <strong className="font-medium text-ink">
              VUSE Summer Research Program at Vanderbilt
            </strong>
            , where my research will focus on{" "}
            <strong className="font-medium text-ink">
              3D Kidney Reconstruction and optimal control
            </strong>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
