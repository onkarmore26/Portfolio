"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m <span className="font-medium">Onkar More</span>, a{" "}
        <span className="font-medium">full-stack developer</span> with a{" "}
        <span className="font-medium">B.Tech in Computer Science</span>. I
        thrive on solving complex problems and building scalable,
        high-performance applications. My expertise lies in{" "}
        <span className="font-medium">
          React (Next.js), Node.js, PostgreSQL, and Solidity
        </span>
        , with hands-on experience in{" "}
        <span className="font-medium">TypeScript, Prisma, and Convex</span>.
        Whether it’s{" "}
        <span className="italic">
          SaaS, AI-driven tools, or blockchain development
        </span>
        , I love crafting seamless, efficient solutions.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I’m constantly
        learning—exploring{" "}
        <span className="font-medium">
          3D web experiences, automation, and emerging technologies
        </span>
        . Beyond tech, I enjoy playing football, diving into new ideas, and
        brainstorming my next big project.
        <span className="font-medium">
          Growing with every challenge, refining with every solution.
        </span>{" "}
        Let’s connect and build something great!
      </p>
    </motion.section>
  );
}
