"use client";
import React from "react";
import { FaLinkedin, FaBluesky, FaGithub, FaEnvelope } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "GunplaCentral",
      description:
        "A fullstack web application for a platform to empower gunpla kit enthusiasts to catalog their collections.",
      tags: ["Next.js", "Firebase", "React", "Go", "Postgresql", "TypeScript"],
      link: "https://gunplacentral.com",
    },
    {
      title: "MyLocalNWS",
      description:
        "Web application to allow users to easily find their nearest National Weather Service office.",
      tags: ["Next.js", "Firebase", "React", "Go", "TypeScript"],
      link: "https://mylocalnws.com",
    },
    {
      title: "Godot Raycast Hitbox",
      description:
        "High-precision RayCast hit detection module for Godot 4 with support for all major platforms.",
      tags: ["Godot", "C#", "GDScript", "Math", "Graphics"],
      link: "https://github.com/ItsTeccs/godot_raycast_hitbox",
    },
  ];

  const technologies = [
    "JavaScript/TypeScript",
    "Go",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
    "AWS",
    "Google Cloud Platform",
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Nav */}
      <header className="bg-gray-800 shadow-lg fixed w-full top-0 z-50 border-b border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Tyler Eccles</h1>
            <div className="flex gap-6">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#technologies"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Technologies
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 pt-24">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Web Developer
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I specialize in building responsive, scalable applications.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/itsteccs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B1F24] hover:text-white transition-colors duration-300"
              >
                <FaGithub size={48} />
              </a>
              <a
                href="https://www.linkedin.com/in/tyler-eccles-81b265265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0073b1] hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={48} />
              </a>
              <a
                href="https://bsky.app/profile/teccs.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1185fe] hover:text-white transition-colors duration-300"
              >
                <FaBluesky size={48} />
              </a>
              <a
                href="mailto:tyler@teccs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors duration-300"
              >
                <FaEnvelope size={48} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-20">
        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">About</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              Hello! I&apos;m a software engineer passionate about building
              scalable web applications and creating exceptional user
              experiences. With expertise in modern web technologies and a track
              record of delivering high-impact solutions, I specialize in both
              frontend and backend development using React, Node.js, TypeScript,
              and Golang.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Throughout my career, I&apos;ve had the privilege of architecting
              and implementing full-stack solutions that have driven significant
              business growth and user engagement. I particularly enjoy working
              with React and Next.js for creating responsive, user-friendly
              interfaces, while leveraging Go and Node.js to build robust
              backend services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Beyond my professional work, I&apos;m an active open-source
              contributor and the creator of GunplaCentral, a full-stack
              platform that serves the Gunpla model kit community. Built with
              Next.js, Go, and PostgreSQL, the platform provides enthusiasts
              with tools to track their collections across more than 4,000 model
              kits. I architected the backend using Go to create type-safe REST
              APIs and implemented real-time collection updates using PostgreSQL
              triggers. The frontend leverages React with TypeScript to deliver
              a responsive, intuitive interface that helps users manage their
              collections efficiently. This project exemplifies my passion for
              creating clean, efficient code that delivers real value to users.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I thrive in collaborative environments where I can combine my
              technical expertise with strong communication skills to transform
              innovative ideas into reality. Currently, I&apos;m seeking
              opportunities to bring my experience in building scalable,
              user-focused web applications to an innovative tech company.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-4"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-900 text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <p className="text-gray-300 mb-4">
              {"I'm always open to discussing new projects and opportunities."}
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:tyler@teccs.dev"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" />
                tyler@teccs.dev
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-20">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-gray-300">
            © 2025 Tyler Eccles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
