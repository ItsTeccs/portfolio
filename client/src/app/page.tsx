"use client";
import React, { useState } from "react";
import { FaLinkedin, FaBluesky, FaGithub, FaEnvelope } from "react-icons/fa6";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("projects");

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform using Next.js, TypeScript, and Stripe integration",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Developed a collaborative task management application with real-time updates",
      tags: ["React", "Firebase", "Material-UI"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Created a weather dashboard with location-based forecasts and interactive maps",
      tags: ["React", "OpenWeather API", "Mapbox"],
      link: "#",
    },
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Led frontend development for multiple high-impact projects",
    },
    {
      role: "Frontend Developer",
      company: "StartUp Inc",
      period: "2020 - 2022",
      description: "Developed and maintained multiple React-based applications",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Nav */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Tyler Eccles</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveSection("projects")}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === "projects"
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("experience")}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === "experience"
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Experience
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Web Developer
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I specialize in building responsive, scalable applications.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B1F24] hover:text-gray-900 transition-colors duration-300"
              >
                <FaGithub size={48} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0073b1] hover:text-gray-900 transition-colors duration-300"
              >
                <FaLinkedin size={48} />
              </a>
              <a
                href="https://bsky.app/profile/teccs.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1185fe] hover:text-gray-900 transition-colors duration-300"
              >
                <FaBluesky size={48} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <FaEnvelope size={48} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {activeSection === "projects" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {job.role}
                </h3>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>{job.company}</span>
                  <span>{job.period}</span>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2025 Tyler Eccles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
