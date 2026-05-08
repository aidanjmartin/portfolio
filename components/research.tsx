"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./section";

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

function ProjectCard({ project }: { project: Project }) {
  const [activeMedia, setActiveMedia] = useState(0);
  const currentMedia = project.media[activeMedia];

  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener"
      className="group flex flex-col border border-border bg-parchment-dark no-underline transition-all hover:-translate-y-1 hover:border-forest"
    >
      {/* Media */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-parchment-dark">
        {currentMedia.type === "video" ? (
          <iframe
            src={currentMedia.src}
            title={project.title}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <Image
            src={currentMedia.src}
            alt={currentMedia.alt || project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Gallery thumbnails */}
      {project.media.length > 1 && (
        <div className="flex gap-1 overflow-x-auto border-b border-border bg-parchment px-3 py-2">
          {project.media.map((item, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setActiveMedia(idx);
              }}
              className={`aspect-video h-9 flex-shrink-0 overflow-hidden border transition-colors ${
                idx === activeMedia
                  ? "border-forest"
                  : "border-border hover:border-forest"
              }`}
            >
              {item.type === "video" ? (
                <span className="flex h-full w-full items-center justify-center bg-parchment-dark font-mono text-[0.55rem] text-forest">
                  Video
                </span>
              ) : (
                <Image
                  src={item.src}
                  alt=""
                  width={56}
                  height={35}
                  className="h-full w-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-walnut">
          {project.tag}
        </span>
        <h3 className="mb-2 font-serif text-[1.15rem] font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-[0.85rem] leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.chips.map((chip) => (
            <span
              key={chip}
              className="border border-border-strong px-2 py-1 font-mono text-[0.65rem] tracking-[0.02em] text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function Research() {
  return (
    <Section
      id="research"
      label="06"
      title="Research & Major Projects"
      description="Original research, autonomous robotics, and full-stack engineering builds."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
