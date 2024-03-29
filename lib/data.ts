import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dotfiles from "@/public/dotfiles.png";
import onlinecv from "@/public/onlinecv.png";
import thesis from "@/public/thesis.png";

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
    title: "Bachelor Degree as Computer Engineer",
    location: "Rome, Italy",
    description:
      "I graduated as a Computer Engineer at La Sapienza University of Rome. My Thesis describes Malware Analysis using Neural Networks embeddings.\nI completed the Master Excellence Program, consisting of extra project activities supported by a professor and his team, developing Natural Language Processing tools for semantic analysis",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title:
      "Master Degree in Engineering in Computer Science + Erasmus Program @ TUE",
    location: "Rome, Italy - Eindhoven, Netherlands",
    description:
      "I graduated at La Sapienza University of Rome. My thesis describes a novel approach to malware analysis using deep learning language models.\nExperience enriched by Erasmus Program in Eindhoven, with courses focused on Machine Learning and Cybersecurity.\n I Completed the Excellence Program, consisting of extra project activities supported by a professor and his team, performing Malware similarities analysis using Neural Network Embeddings",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Software Engineer @ Sara Assicurazioni",
    location: "Rome, Italy - Berlin, Germany",
    description:
      "Software Engineer in an Insurance Company, focusing on Cloud platforms as Salesforce and AWS.\nPartecipated at the Salesforce Bootcamp in Berlin, a series of intense studies and courses on the Salesforce platform where I obtained the Admin and Platform Developer certifications",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer @ Moveax",
    location: "Rome, Italy",
    description:
      "Software Engineer for Moveax, focusing on Microservices applications, Linux servers, DevOps and fullstack development",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dotfiles",
    description:
      "My personal configuration for everything that is on my machine, featuring automated installation, testing and documentation",
    tags: ["Config", "Linux", "Shell", "Shell Script", "CI/CD"],
    imageUrl: dotfiles,
  },
  {
    title: "Online CV",
    description:
      "The very same website you are right on, built with React, TypeScript, Next.js and Tailwind, completed with Cypress testing",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: onlinecv,
  },
  {
    title: "Nomen Omen",
    description:
      "Neural Network model able to translate binary code into meaningful function names, helping reverse engineers in analyzing unknown executables.",
    tags: ["Python", "NLP", "Deep Learning", "Machine Learning"],
    imageUrl: thesis,
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "C++",
  "Java",
  "GO",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Linux",
  "Docker",
  "Containerization",
  "CI/CD",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Grpc",
  "REST",
  "Web Development",
  "Express",
  "Framer Motion",
  "Bash Scripts",
  "AWS",
] as const;

export const additionalSkillsData = [
  "English",
  "Italian",
  "Spanish",
  "Driving License & Property Car",
] as const;
