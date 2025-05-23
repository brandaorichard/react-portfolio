import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import spotify from "../assets/images/spotify.png";
import todo1 from "../assets/images/todo1.png";
import weatherapp from "../assets/images/weatherapp.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import claropage from "../assets/images/claropage1.png"
import appImg from "../assets/images/app-img.png"

const projects = [
  {
    title: "Spotify Clone App",
    desc: "A full stack Spotify clone application that replicates core features of Spotify.",
    devstack: "MongoDB, Express, React, Node.js",
    git: "https://github.com/brandaorichard/Fullstack-Spotify-Clone",
    src: spotify,
    type: "FullStack",
  },
  {
    title: "Claro Landing Page",
    desc: "Interactive landing page for Claro offers, featuring plan selection, smartphones, and a form integrated with Google Forms.",
    devstack: "Built with ReactJS and Tailwind CSS.",
    link: "https://claro-landingpage.vercel.app",
    git: "https://github.com/brandaorichard/claro-landingpage",
    src: claropage,
    type: "Frontend",
  },
  {
    title: "Petshop Landing Page",
    desc: "Modern and responsive landing page for pet shops, built with Next.js, React, TypeScript, and Tailwind CSS. Showcase your services, customer testimonials, partner brands, and make WhatsApp contact easy—all with a professional and attractive design.",
    devstack: "Built with Next.js and Tailwind CSS.",
    link: "https://petshop-landingpage.vercel.app/",
    git: "https://github.com/brandaorichard/petshop-landingpage",
    src: appImg,
    type: "Frontend",
  },
  {
    title: "To-do App",
    desc: "A fullstack project developed with the MERN stack that allows users to create, list, and manage tasks in a simple and efficient way.",
    devstack: "React, TailwindCSS, Node.js, Express, MongoDB",
    link: "https://to-do-app-qz1p.onrender.com/",
    git: "https://github.com/brandaorichard/to-do-app",
    src: todo1,
    type: "FullStack",
  },
  {
    title: "Weather App 🌤️",
    desc: "A simple Weather App that uses the OpenWeatherMap API to display temperature, humidity, and wind speed for any searched city.",
    devstack: "HTML, CSS, JavaScript",
    link: "https://weather-app-ochre-zeta.vercel.app/",
    git: "https://github.com/brandaorichard/weather-app",
    src: weatherapp,
    type: "Frontend",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Projetos
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};