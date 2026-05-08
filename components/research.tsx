"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "./section";
import { ProjectModal, type ProjectModalData } from "./project-modal";

interface MediaItem {
  type: "img" | "video";
  src: string;
  alt?: string;
}

interface Project {
  href: string;
  tag: string;
  title: string;
  description: string;
  chips: string[];
  media: MediaItem[];
}

const projects: Project[] = [
  {
    href: "https://github.com/vu-maple-lab/LEAP_MultiModal_Gesture_Classification",
    tag: "Surgical Robotics Research — MAPLE Lab",
    title: "LEAP — Multimodal Gesture Classification",
    description:
      "Multimodal ML pipeline using I3D models and Late Fusion to classify surgeon proficiency (Novice / Resident / Expert) from dVRK kinematic and video data.",
    chips: ["PyTorch", "I3D", "Late Fusion", "dVRK"],
    media: [
      { type: "img", src: "/images/leap_research.jpeg", alt: "LEAP research" },
      { type: "img", src: "/images/leap_research2.jpeg", alt: "LEAP research 2" },
      { type: "img", src: "/images/leap_research3.jpeg", alt: "LEAP research 3" },
    ],
  },
  {
    href: "https://github.com/bereketsillassie/marquee",
    tag: "Vanderbilt AI Demo & Pitch Competition",
    title: "Project Lumen",
    description:
      "A student-led initiative developing a dynamic pickup shelf for quick-service restaurants that uses real-time computer vision and projection mapping. Industry advisor: Will Croushorn, Wendy's FreshAI Product Lead (deployed in 600+ locations).",
    chips: ["Computer Vision", "Projection Mapping", "Real-Time"],
    media: [
      { type: "img", src: "/images/AI_pitch_comp.jpg", alt: "Project Lumen" },
      { type: "img", src: "/images/pitch_comp2.jpg", alt: "Pitch comp 2" },
      { type: "img", src: "/images/pitch_comp3.jpg", alt: "Pitch comp 3" },
      { type: "img", src: "/images/pitch_comp4.jpg", alt: "Pitch comp 4" },
      { type: "img", src: "/images/pitch_comp5.jpg", alt: "Pitch comp 5" },
      { type: "img", src: "/images/pitch_comp6.jpg", alt: "Pitch comp 6" },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/MicroMouse25-26",
    tag: "Competitive Autonomous Robotics",
    title: "MicroMouse 25–26",
    description:
      "Autonomous maze-solving robot. Floodfill algorithm in C/C++ on an Arduino Nano with custom PCB, hardware architecture, and tuned PID control loops.",
    chips: ["C/C++", "Arduino", "PID", "PCB Design"],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/75W8lRs1ifI" },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/picknplace_robot_kinematics",
    tag: "Robotics — Kinematics",
    title: "Pick-n-Place Robot Kinematics",
    description:
      "Forward and inverse kinematics for a pick-and-place robotic arm — full implementation, derivations, and write-up live in the repository.",
    chips: ["Kinematics", "Inverse Kinematics", "Robotics"],
    media: [
      { type: "img", src: "/images/kinematics.png", alt: "Kinematics diagram" },
    ],
  },
  {
    href: "https://github.com/bereketsillassie/DataSiteAI",
    tag: "VandyHacks XII — Hackathon",
    title: "DataSiteAI",
    description:
      "Geographic mapping and optimization tool that determines ideal locations for new data centers. Combines geospatial data with cost/efficiency optimization.",
    chips: ["Geospatial", "Optimization", "Web"],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/xywZi96q9pE" },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/fanuc_eip_translator",
    tag: "Industrial Robotics",
    title: "fanuc_eip_translator",
    description:
      "Real-time 3D path visualization and kinematic analysis for a Fanuc CRX10 collaborative robot — parses URDF joint states over Ethernet/IP.",
    chips: ["URDF", "Ethernet/IP", "Kinematics", "3D Viz"],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/XORznHtkmeM" },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/Automated-Computer-Vision-Sorting-System",
    tag: "Computer Vision — Mechatronics",
    title: "Automated CV Sorting System",
    description:
      "Computer-vision based object detection driving an automated sorting mechanism — vision pipeline integrated with physical actuation.",
    chips: ["OpenCV", "Mechatronics", "Actuation"],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/fL_YJjmcBfM" },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/BalanceCV",
    tag: "Computer Vision — 1st Place MechTech 2026",
    title: "BalanceCV",
    description:
      "Computer vision application focused on balance and kinematic tracking. Skeletal pose estimation applied to stability analysis.",
    chips: ["Pose Estimation", "Python"],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/_kxQwls69hA" },
      { type: "img", src: "/images/balanceCV_mechtech.JPG", alt: "BalanceCV MechTech" },
      { type: "img", src: "/images/balanceCV_mechtech2.JPG", alt: "BalanceCV MechTech 2" },
      { type: "img", src: "/images/balanceCV_mechtech3.JPG", alt: "BalanceCV MechTech 3" },
      { type: "img", src: "/images/balanceCV_mechtech4.JPG", alt: "BalanceCV MechTech 4" },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/ENGR3530_Electronics_JarvisProject",
    tag: "Coursework — Electronics",
    title: "ENGR 3530 — Jarvis Project",
    description:
      "Academic analog electronics build — audio amplifier circuit using the TDA2030 and LM386 ICs, packaged into a custom CAD-modeled enclosure.",
    chips: ["Analog", "Audio Amp", "CAD", "PCB"],
    media: [
      { type: "img", src: "/images/jarvis_box.jpg", alt: "Jarvis box" },
      { type: "img", src: "/images/jarvis_box_cad.png", alt: "Jarvis CAD" },
      { type: "img", src: "/images/tda_2030.png", alt: "TDA 2030" },
      { type: "img", src: "/images/lm386.png", alt: "LM386" },
    ],
  },
  {
    href: "https://youtu.be/anY-flwiC_s",
    tag: "Field Robotics Research — MTSU",
    title: "Autonomous Moisture-Sensing Robot",
    description:
      "Six-wheeled agricultural irrigation robot built at the MTSU Optics & Mobile Robotics Lab. Wireless ESP32 / Raspberry Pi mesh over MQTT and ESP-NOW with closed-loop drive control.",
    chips: ["ESP32", "Raspberry Pi", "MQTT", "ESP-NOW"],
    media: [
      { type: "video", src: "https://www.youtube.com/embed/anY-flwiC_s" },
    ],
  },
];

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.media[0];

  return (
    <button
      onClick={onOpen}
      className="group flex flex-col border border-border bg-surface text-left no-underline transition-all hover:-translate-y-1 hover:border-forest-light hover:shadow-[0_8px_30px_-10px_var(--color-forest-glow)]"
    >
      {/* Cover media */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-surface">
        {cover.type === "video" ? (
          <iframe
            src={cover.src}
            title={project.title}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="pointer-events-none h-full w-full"
          />
        ) : (
          <Image
            src={cover.src}
            alt={cover.alt || project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {project.media.length > 1 && (
          <span className="absolute right-2 top-2 border border-border-strong bg-background/80 px-1.5 py-0.5 font-mono text-[0.6rem] tracking-wide text-walnut-light backdrop-blur-sm">
            +{project.media.length - 1}
          </span>
        )}
        <span className="absolute bottom-2 right-2 border border-forest-light/40 bg-background/70 px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-forest-light opacity-0 transition-opacity group-hover:opacity-100">
          ⤢ Open
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-walnut-light">
          {project.tag}
        </span>
        <h3 className="mb-2 font-sans text-[1rem] font-semibold text-cream">
          {project.title}
        </h3>
        <p className="mb-3 flex-1 text-[0.8rem] leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.chips.map((chip) => (
            <span
              key={chip}
              className="border border-border-strong px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.02em] text-cream-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function Research() {
  const [open, setOpen] = useState<ProjectModalData | null>(null);

  return (
    <Section
      id="research"
      label="06"
      title="Research & Major Projects"
      description="Original research, autonomous robotics, and full-stack engineering builds. Click any project to view full details."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={() =>
              setOpen({
                href: project.href,
                tag: project.tag,
                title: project.title,
                description: project.description,
                chips: project.chips,
                media: project.media,
              })
            }
          />
        ))}
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
