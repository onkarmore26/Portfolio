import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

const PluraImg = require("@/public/Plura.png").default;
const SkateBoardImg = require("@/public/SkateBoard.png").default;
const AiContentGeneratorImg =
  require("@/public/AiContentGenerator.png").default;
const ThinkGridImg = require("@/public/ThinkGrid.png").default;
const ICOTOKENImg = require("@/public/ICOTOKEN.png").default;
const landingImg = require("@/public/landing.png").default;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer - Intern",
    location: "Techspeak IT Solutions",
    description:
      "Working as a web developer intern, contributing to front-end and back-end development using React, Next.js, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Independent Projects",
    location: "Remote",
    description:
      "Built and deployed multiple full-stack projects, including a SaaS website builder, an AI content generator, and an ERC-20 token sale platform.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Bachelor's in Computer Science",
    location: "PVPIT, Sangli",
    description:
      "Graduated with a degree in Computer Science, gaining strong foundations in web development, DSA, and software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Saas Website Builder",
    description:
      "I built a SaaS platform where agencies can create and manage client's websites effortlessly.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    imageUrl: PluraImg,
    liveUrl: "https://plura-build.vercel.app/",
  },
  {
    title: "Skate Board",
    description:
      "Built a 3D skateboard customizer with smooth animations and advanced 3D interactions for a fictional brand.",
    tags: ["GSAP", "Three.js", "Prismic", "Tailwind CSS"],
    imageUrl: SkateBoardImg,
    liveUrl: "https://frame-board.vercel.app/",
  },
  {
    title: "AI Content Generator",
    description:
      "Developed an AI-powered content generator that creates high-quality text for blogs, ads, and social media posts.",
    tags: ["Next.js", "React", "TypeScript", "Drizzle ORM", "Gemini API"],
    imageUrl: AiContentGeneratorImg,
    liveUrl: "https://ai-content-generator-qmje.vercel.app/",
  },
  {
    title: "Think Grid",
    description:
      "Built a real-time collaborative whiteboard which has features like sticky notes, drawing tools, and multi-user sync.",
    tags: ["Next.js 14 ", "ShadCN UI", "Liveblocks", "Convex", "Clerk"],
    imageUrl: ThinkGridImg,
    liveUrl: "https://live-board-omega.vercel.app/",
  },
  {
    title: "ICO Token Sale",
    description:
      "Integrated a responsive ERC20 token sale platform where users can buy tokens, track investments, and view project details.",
    tags: ["Next.js", "Tailwind", "Solidity", "Blockchain", "Sepolia", "Web3"],
    imageUrl: ICOTOKENImg,
    liveUrl: "https://ico-token-sale-orm.vercel.app/",
  },
  {
    title: "Dark Animated Landing Page",
    description: "Built a sleek, minimalistic, and modern animated website. ",
    tags: ["Next.js 14", "GSAP", "Prismic", "TypeScript"],
    imageUrl: landingImg,
    liveUrl: "https://dark-landing-page-brown.vercel.app/",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   liveUrl: "https://wordanalytics.com",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Solidity",
  "Foundry",
  "ShadCN UI",
  "Drizzle ORM",
  "PostgreSQL",

  "GSAP",
  "Three.js",
] as const;
