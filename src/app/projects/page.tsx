"use client";

import Link from "next/link";
import React from "react";

const PROJECTS = [
  {
    id: 1,
    name: "AI Dockerfile Optimizer",
    description: `AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images.
    Simply paste your Dockerfile, and the app analyzes it for best practices and size optimization tips.
    It then provides a refactored, optimized version of the Dockerfile.`,
    link: "https://ai-docker-file-optimizer.netlify.app/",
  },
  {
    id: 2,
    name: "FinanceMe",
    description: `This project demonstrates the deployment of a DevOps pipeline for a global banking and
    financial services provider. The system transitions from a monolithic architecture to a
    microservice-based architecture with automated CI/CD and monitoring.`,
    link: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the dopest way possible.`,
    link: "https://www.abhijitzende.com/",
  },
  {
    id: 4,
    name: "Smart Parking Assistant",
    description: `An IoT-based smart parking system powered by Arduino and IR sensors to detect and
    recommend parking spots in real time. Includes a Python-based GUI for visualization.`,
    link: "https://github.com/Abhiz2411/smart-parking-assistant",
  },
];

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {PROJECTS.map((project) => (
          <li
            key={project.id}
            className="w-[300px] min-h-[260px] border border-zinc-700 rounded-md p-5 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl mb-2">{project.name}</h2>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:underline"
              >
                View Project →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
