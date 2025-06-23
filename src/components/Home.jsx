"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  ExternalLink,
  Github,
  Youtube,
  YoutubeIcon,
} from "lucide-react";

// Import all your existing assets
import hero from "../assets/KabeloPic.JPG";
import coder from "../assets/code-slash.svg";
import fix from "../assets/repair.png";
import webDev from "../assets/cloud.svg";
import linkedIn from "../assets/LinkedIn.svg";
import github from "../assets/github.png";
import html from "../assets/htmlT.svg";
import css from "../assets/cssT.svg";
import js from "../assets/jsT.svg";
import react from "../assets/reactT.svg";
import tailwind from "../assets/tailwindT.svg";
import nodejs from "../assets/nodejsT.svg";
import mongodb from "../assets/mongodbT.svg";
import azure from "../assets/azure.svg";
import campusSafety from "../assets/campusSafety.png";
import commongrounds from "../assets/commongrounds.png";
import Blocky from "../assets/Bock.png";
import synergy from "../assets/synergy.png";
import Univents from "../assets/univents.png";

// set these ones to sernegy , Univents , Serene and BlockyCars ,
import email from "../assets/email.png";
import location from "../assets/placeholder.png";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import c from "../assets/c.svg";
import cpp from "../assets/cpp.svg";
import sql from "../assets/sql.svg";
import git from "../assets/git.svg";
import agile from "../assets/agile.svg";
import postman from "../assets/postman.svg";
import team from "../assets/management.png";
import learner from "../assets/brain.png";
import communication from "../assets/conversation.png";
import fatguys from "../assets/fat-guys.jpg";
import witssdasm from "../assets/witssdasm.png";

import "../App.css";

function Home() {
  // State for skill tooltip
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Intersection Observer for animations
  const [isVisible, setIsVisible] = useState({
    about: false,
    education: false,
    projects: false,
    contact: false,
    awards: false,
    experience: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = ["about", "education", "projects", "contact", "awards", "experience"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Skill data for better organization
  const skillsRow1 = [
    { icon: html, name: "HTML", url: "https://en.wikipedia.org/wiki/HTML" },
    { icon: css, name: "CSS", url: "https://en.wikipedia.org/wiki/CSS" },
    { icon: js, name: "JavaScript", url: "https://www.javascript.com/" },
    { icon: react, name: "React", url: "https://react.dev/" },
    { icon: tailwind, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    { icon: nodejs, name: "Node.js", url: "https://nodejs.org/en" },
    { icon: mongodb, name: "MongoDB", url: "https://www.mongodb.com/" },
    { icon: azure, name: "Azure", url: "https://azure.microsoft.com/en-gb/" },
  ];

  const skillsRow2 = [
    { icon: java, name: "Java", url: "https://www.java.com/en/" },
    { icon: python, name: "Python", url: "https://www.python.org/" },
    { icon: c, name: "C", url: "https://www.jetbrains.com/clion/" },
    { icon: cpp, name: "C++", url: "https://www.jetbrains.com/clion/" },
    { icon: sql, name: "SQL", url: "https://aws.amazon.com/what-is/sql/" },
    { icon: git, name: "Git", url: "https://git-scm.com/" },
    {
      icon: agile,
      name: "Agile",
      url: "https://www.agilealliance.org/agile101/",
    },
    { icon: postman, name: "Postman", url: "https://www.postman.com/" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2f1fd] min-h-screen">
      <NavBar />
      <main className="flex-1 items-center justify-center pt-16">
        {/* Hero Section - Modern Design */}
        <section
          id="home"
          className="w-full py-16 md:py-24 lg:py-32 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f1f8fd] to-[#e0f2fe] opacity-50 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <div className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xl font-medium mb-2">
                    <ReactTyped
                      strings={[
                        "Hello! My name is",
                        "Dumela! Lebitso la ka ke",
                        "Ndaa! Dzina langa ndi",
                        "Sawubona! Igama lami ngu",
                        "Molo! Igama lam ngu",
                        "Dumela! Leina la me ke",
                        "Thobela! Ke nna",
                        "Avuxeni! Vito ra mina ndzi",
                        "Salibonani! Ibizo lami ngu",
                        "Hallo! My naam is",
                        "Nǐ hǎo! Wǒ de míngzì shì",
                        "Hola! Mi nombre es",
                        "Namaste! Mera naam hai",
                        "Bonjour! Je m'appelle",
                        "Privet! Menya zovut",
                        "Olá! Meu nome é",
                      ]}
                      typeSpeed={40}
                      backSpeed={60}
                      loop
                    />
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                    Kabelo Mojalefa Rankoane
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-4"></div>
                  <p className="text-lg text-gray-700 max-w-[600px] leading-relaxed">
                    Computer Science graduate from the University of
                    Witwatersrand. Currently pursuing my honours degree.
                    <br />I keen about Machine Learning and
                    Artificial Intelligence, and I am constantly pursuing the
                    intergrate of these into my projects.
                  </p>

                  <div className="flex flex-row items-center gap-4 mt-6">
                    <a
                      href="https://www.linkedin.com/in/thendo-ravhengani-b170982bb/"
                      target="_blank"
                      className="transition-transform hover:scale-110"
                      aria-label="LinkedIn Profile"
                      rel="noreferrer"
                    >
                      <div className="bg-white p-3 rounded-full shadow-md">
                        <img
                          src={linkedIn || "/placeholder.svg"}
                          width="30"
                          height="30"
                          alt="LinkedIn"
                          className="cursor-pointer"
                        />
                      </div>
                    </a>
                    <a
                      href="https://github.com/ThendoRavi"
                      target="_blank"
                      className="transition-transform hover:scale-110"
                      aria-label="GitHub Profile"
                      rel="noreferrer"
                    >
                      <div className="bg-white p-3 rounded-full shadow-md">
                        <img
                          src={github || "/placeholder.svg"}
                          width="30"
                          height="30"
                          alt="GitHub"
                          className="cursor-pointer"
                        />
                      </div>
                    </a>
                  </div>

                  {/* Skills Section - Redesigned */}
                  <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <span className="h-px flex-grow max-w-[30px] bg-gray-300 mr-3"></span>
                      Technical Skills
                      <span className="h-px flex-grow bg-gray-300 ml-3"></span>
                    </h2>

                    <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -mr-20 -mt-20"></div>

                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 relative z-10">
                        {skillsRow1.map((skill, index) => (
                          <div
                            key={`skill1-${index}`}
                            className="relative"
                            onMouseEnter={() =>
                              setActiveTooltip(`skill1-${index}`)
                            }
                            onMouseLeave={() => setActiveTooltip(null)}
                          >
                            <a
                              href={skill.url}
                              target="_blank"
                              className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                              rel="noreferrer"
                            >
                              <div className="bg-gray-50 p-2 rounded-lg border border-gray-100 shadow-sm">
                                <img
                                  src={skill.icon || "/placeholder.svg"}
                                  width="40"
                                  height="40"
                                  alt={skill.name}
                                  className="cursor-pointer"
                                />
                              </div>
                            </a>
                            {activeTooltip === `skill1-${index}` && (
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                                {skill.name}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-4 relative z-10">
                        {skillsRow2.map((skill, index) => (
                          <div
                            key={`skill2-${index}`}
                            className="relative"
                            onMouseEnter={() =>
                              setActiveTooltip(`skill2-${index}`)
                            }
                            onMouseLeave={() => setActiveTooltip(null)}
                          >
                            <a
                              href={skill.url}
                              target="_blank"
                              className="flex flex-col items-center justify-center transition-transform hover:scale-110"
                              rel="noreferrer"
                            >
                              <div className="bg-gray-50 p-2 rounded-lg border border-gray-100 shadow-sm">
                                <img
                                  src={skill.icon || "/placeholder.svg"}
                                  width="40"
                                  height="40"
                                  alt={skill.name}
                                  className="cursor-pointer"
                                />
                              </div>
                            </a>
                            {activeTooltip === `skill2-${index}` && (
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                                {skill.name}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Image - Enhanced */}
              <div className="relative mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white p-2 rounded-full shadow-xl">
                  <div className="rounded-full overflow-hidden border-4 border-white shadow-inner">
                    <img
                      src={hero || "/placeholder.svg"}
                      alt="Thendo Ravhengani"
                      width={400}
                      height={400}
                      className="rounded-full object-cover aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section
          id="about"
          className={`w-full py-16 md:py-24 bg-white ${
            isVisible.about ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Software Developer
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
              <p className="max-w-[900px] text-gray-700 md:text-lg leading-relaxed">
                Recent Computer Science graduate from the University of
                Witwatersrand, currently pursuing an honours degree. I am
                passionate about Machine Learning and Artificial Intelligence,
                and I actively seek opportunities to incorporate these interests
                into my projects. I thrive in environments that challenge me to
                solve complex problems and push the boundaries of my technical
                abilities. My enthusiasm for coding is matched by a commitment
                to building software that is both robust and user-centric. I am
                always eager to experiment with new frameworks and technologies,
                believing that continuous learning is key to delivering
                innovative solutions. My goal is to contribute to impactful
                projects while growing as a developer and staying at the
                forefront of advancements in the tech industry.
              </p>
            </div>

            {/* Qualities Grid - Redesigned */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <img
                    src={coder || "/placeholder.svg"}
                    width="24"
                    height="24"
                    alt="Avid Coder"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Avid Coder
                </h3>
                <p className="text-gray-600 flex-grow">
                  Over six years of coding experience, in different
                  environments.
                </p>
              </div>
              {/* 
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <img
                    src={webDev || "/placeholder.svg"}
                    width="24"
                    height="24"
                    alt="Web Dev"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Web Dev
                </h3>
                <p className="text-gray-600 flex-grow">
                  Full-stack development experience with the MERN stack
                  (MongooseDB, Express, React, Node.js) and JavaScript for
                  simple and complex web application solutions.
                </p>
              </div> */}

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <img
                    src={fix || "/placeholder.svg"}
                    width="24"
                    height="24"
                    alt="Problem Solver"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Problem Solver
                </h3>
                <p className="text-gray-600 flex-grow">
                  A natural problem-solver with a strong analytical mindset and
                  a deep mathematical background, adept at breaking down complex
                  challenges into manageable solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <img
                    src={team || "/placeholder.svg"}
                    width="24"
                    height="24"
                    alt="Team Player"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Team Player
                </h3>
                <p className="text-gray-600 flex-grow">
                  Collaborative and communicative, with experience working in
                  diverse team environments to successfully deliver projects.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col md:col-span-2 lg:col-span-2">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <img
                    src={learner || "/placeholder.svg"}
                    width="24"
                    height="24"
                    alt="Adaptable Learner"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Adaptable Learner
                </h3>
                <p className="text-gray-600 flex-grow">
                  Quick to adapt to new tools, technologies, and frameworks,
                  with a passion for staying up-to-date in the ever-evolving
                  tech landscape.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col md:col-span-2 lg:col-span-2">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <img
                    src={communication || "/placeholder.svg"}
                    width="24"
                    height="24"
                    alt="Effective Communicator"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Effective Communicator
                </h3>
                <p className="text-gray-600 flex-grow">
                  Skilled at translating technical concepts into clear and
                  concise language, for non-technical stakeholders to understand
                  project progress and outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Enhanced */}
        <section
          id="education"
          className={`w-full py-16 md:py-24 bg-gray-50 ${
            isVisible.education ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Education
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
              <p className="max-w-[900px] text-gray-700 md:text-lg leading-relaxed">
                Currently have completed my bachelors degree in Computer Science
                at the University of Witwatersrand. I have a strong foundation
                in mathematics, computer science, and software development
                principles, with additional experience in machine learning and
                artificial intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* University Education */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -mr-20 -mt-20"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      BSc Computer Science
                    </h3>
                  </div>

                  <div className="flex items-center mb-4">
                    <p className="text-teal-600 font-bold">
                      University of Witwatersrand
                    </p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">2022 - 2024 (Completed)</p>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Average:</span>
                    <span className="text-teal-600 font-bold ml-2">75+</span>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Mathematics
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Applied Mathematics
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Data Structures & Algorithms
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Database Fundamentals
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Computer Networks
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Mathematical Methods and Modelling
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Scientific Computing
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Mechanics
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Mobile Computing
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Software Design
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Machine Learning
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Analysis of Algorithms
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* High School Education */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -mr-20 -mt-20"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      National Senior Certificate
                    </h3>
                  </div>

                  <div className="flex items-center mb-4">
                    <p className="text-teal-600 font-bold">
                      George Campbell HighSchool of Technology
                    </p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">Matriculated: 2021</p>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Average:</span>
                    <span className="text-teal-600 font-bold ml-2">70+</span>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Mathematics
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Physical Science
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Engineering Graphics and Design
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        Electircal Technology
                      </div>
                      <div className="bg-gray-50 px-3 py-2 rounded-md text-gray-700">
                        English HL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Enhanced */}
        <section
          id="projects"
          className={`w-full py-16 md:py-24 bg-white ${
            isVisible.projects ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Projects
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
            </div>

            {/* Project Cards - Redesigned */}
            <div className="grid gap-8 mt-12">
              {/* Campus Safety Project */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Univents
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Univents is a web application designed as a school project
                      to enable students at the University of the Witwatersrand
                      to sell tickets for events hosted on campus. The platform
                      simplifies event management by providing a centralized
                      space for ticket sales, making it easier for students to
                      organize and attend university events.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      "It featured seamless integration with another application
                      for logging external issues and bookings, a built-in
                      payment system, a fully functional calendar, and
                      comprehensive user management with login, signup, and
                      authorization capabilities. These features worked together
                      to provide a smooth and efficient user experience for
                      managing events and related activities."
                    </p>
                    <p className="text-gray-500 italic mb-6">
                      Below I have attached the github repo for the site and a
                      link.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://delightful-forest-0475dad03.5.azurestaticapps.net/"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <ExternalLink size={18} />
                        Visit site
                      </a>

                      <a
                        href="https://github.com/Tapiwamaz/SDP-project"
                        target="_blank"
                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        rel="noreferrer"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="h-full flex items-center justify-center bg-gray-50 p-4">
                      <img
                        src={Univents || "/placeholder.svg"}
                        alt="Campus Safety App"
                        className="w-full rounded-lg shadow-lg object-contain"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Blocky Cars
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Blocky Cars is a unique racing game inspired by the
                      Minecraft universe. We built custom worlds directly in
                      Minecraft, exported those worlds, and integrated them into
                      our game engine to create immersive racing tracks. This
                      approach allowed us to leverage Minecraft’s creative tools
                      for level design while delivering a fresh gameplay
                      experience.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The project features several optimizations for performance
                      including efficient world loading and rendering
                      techniques. Blocky Cars combines the fun of
                      Minecraft-style environments with fast-paced racing
                      mechanics, offering players a visually engaging and
                      entertaining experience.
                    </p>
                    <p className="text-gray-500 italic mb-6">
                      Below I have attached the Youtube link of us showcasing
                      the game.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://lamp.ms.wits.ac.za/~scarhatt/"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <ExternalLink size={18} />
                        Play Game
                      </a>
                      <a
                        href="https://youtu.be/zHYLwI1N_3g"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <YoutubeIcon size={18} />
                        Video Link
                      </a>
                      <a
                        href="https://github.com/Mondo3771/CGV-Assignment"
                        target="_blank"
                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        rel="noreferrer"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="h-full flex items-center justify-center bg-gray-50 p-4">
                      <img
                        src={Blocky || "/placeholder.svg"}
                        alt="Campus Safety App"
                        className="w-full rounded-lg shadow-lg object-contain"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Synergy
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Synergy is a time management application designed to help
                      you track your employees' time effectively. It allows you
                      to monitor how long tasks take to complete, providing
                      insights into job durations and overall productivity. With
                      Synergy, managing and optimizing your team's time becomes
                      seamless and efficient.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Synergy is a feature-rich application designed to enhance
                      productivity and streamline operations. It not only tracks
                      employee time and task durations but also facilitates
                      staff onboarding, meal bookings, and car wash scheduling.
                      The app includes a collaborative chat feature, enabling
                      team members to review and discuss work efficiently,
                      making it a versatile tool for managing both time and team
                      activities
                    </p>
                    <p className="text-gray-500 italic mb-6">
                      Below I have attached the Youtube link of us showcasing
                      the webapp as it had to be remove due to insufficient
                      credits needed to keep it running.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.youtube.com/watch?v=zHYLwI1N_3g"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <YoutubeIcon size={18} />
                        Video Link
                      </a>
                      <a
                        href="https://github.com/Mondo3771/CGV-Assignment"
                        target="_blank"
                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        rel="noreferrer"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="h-full flex items-center justify-center bg-gray-50 p-4">
                      <img
                        src={synergy || "/placeholder.svg"}
                        alt="Campus Safety App"
                        className="w-full rounded-lg shadow-lg object-contain"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Awards Section - Styled like About */}
        <section
          id="awards"
          className={`w-full py-16 md:py-24 bg-white ${
            isVisible.awards ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Awards & Achievements
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* You can use an award icon here */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dean's List
                </h3>
                <p className="text-gray-600 flex-grow">
                  Awarded for outstanding academic performance at University of
                  Witwatersrand (2023).
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* Another award icon or the same */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Top Achiever in Mathematics
                </h3>
                <p className="text-gray-600 flex-grow">
                  Recognized as the top-performing student in Mathematics at
                  George Campbell High School of Technology (2021).
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* Another award icon or the same */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Top Achiever in Physics
                </h3>
                <p className="text-gray-600 flex-grow">
                  Recognized as the top-performing student in Physics at George
                  Campbell High School of Technology (2021).
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* Another award icon or the same */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Top Achiever in Engineering Graphics and Design
                </h3>
                <p className="text-gray-600 flex-grow">
                  Recognized as the top-performing student in EGD at George
                  Campbell High School of Technology (2021).
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* Another award icon or the same */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Best Software Development Project
                </h3>
                <p className="text-gray-600 flex-grow">
                  Recognized for the best software development project in the
                  Computer Science department at the University of Witwatersrand
                  2024.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* Another award icon or the same */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Top 3 Developed games in Computer Graphics and Visualisation
                </h3>
                <p className="text-gray-600 flex-grow">
                  Recognized as one of the top 3 developed games in the Computer
                  Graphics and Visualisation course at the University of
                  Witwatersrand (2024).
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  {/* Another award icon or the same */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <path d="M8.21 13.89l-1.42 4.24a1 1 0 0 0 1.3 1.3l4.24-1.42" />
                    <path d="M15.79 13.89l1.42 4.24a1 1 0 0 1-1.3 1.3l-4.24-1.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Top 3 Achiever
                </h3>
                <p className="text-gray-600 flex-grow">
                  Recognized as one of the top 3 achievers Academically at
                  George Campbell High School of Technology (2021).
                </p>
              </div>
              {/* Add more awards as needed */}
            </div>
          </div>
        </section>
        {/* Contact Section - Enhanced */}

        {/* Experience Section - Styled like Education */}
        <section
          id="experience"
          className={`w-full py-16 md:py-24 bg-gray-50 ${
            isVisible.experience ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Experience
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Serene */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Frontend Developer (Mobile)
                    </h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-teal-600 font-bold">Serene</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">Mar 2023 – Jun 2023</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Role:</span>
                    <span className="text-teal-600 font-bold ml-2">
                      Frontend Developer (Android)
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Developed a clean and intuitive mobile interface using
                        Android Studio.
                      </li>
                      <li>
                        Styled and organized the layout to ensure responsiveness
                        and ease of use.
                      </li>
                      <li>
                        Collaborated with backend developers to integrate APIs
                        and data flow.
                      </li>
                      <li>
                        Focused on UI/UX consistency and design polish across
                        screens.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Univents */}
              {/* Blocky Cars */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Game Developer & Team Lead
                    </h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-teal-600 font-bold">Blocky Cars</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">June 2024 - November 2024</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Role:</span>
                    <span className="text-teal-600 font-bold ml-2">
                      Game Developer & Project Lead
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Key Contributions
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Conceptualized the game idea and led development from
                        start to finish.
                      </li>
                      <li>
                        Created custom racing maps in Minecraft and exported
                        them into JavaScript.
                      </li>
                      <li>
                        Textured game environments and implemented dynamic
                        lighting using Three.js.
                      </li>
                      <li>
                        Managed team workflow and version control processes.
                      </li>
                      <li>
                        Led discussions on multiplayer, time-trial, and
                        optimization features.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Univents */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden mb-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Frontend Developer (Events Page)
                    </h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-teal-600 font-bold">Univents</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">Jul 2024 – Nov 2024</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Role:</span>
                    <span className="text-teal-600 font-bold ml-2">
                      Frontend Developer & Integration
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Key Contributions
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Led the frontend development of the Events page,
                        enabling users to browse and pay for events.
                      </li>
                      <li>
                        Implemented and integrated the payment method for event
                        purchases.
                      </li>
                      <li>
                        Built integration with another group for the
                        alert/notification section in the app.
                      </li>
                      <li>
                        Conducted thorough testing before deployment to ensure a
                        smooth user experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-50 to-gray-200 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-gray-400 to-gray-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M8 20v-4h8v4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Technical Lab Assistant
                    </h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-gray-700 font-bold">MSL Lab</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">March 2023 - September 2023</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-200 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Role:</span>
                    <span className="text-gray-700 font-bold ml-2">
                      Troubleshooting & Support
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Troubleshot and fixed computers in the lab, resolving
                        hardware and software issues.
                      </li>
                      <li>
                        Updated software and installed necessary applications on
                        lab machines.
                      </li>
                      <li>
                        Assisted with general maintenance and technical support
                        for students and staff.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Synergy */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M3 6h18M3 12h18M3 18h18" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Full Stack Developer (Testing & Deployment Lead)
                    </h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-blue-600 font-bold">Synergy</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-gray-500">March 2023 – May 2023</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-lg inline-block mb-6">
                    <span className="font-bold text-gray-700">Role:</span>
                    <span className="text-blue-600 font-bold ml-2">
                      Backend, Testing & Azure Deployment
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-700 mb-3">
                      Key Contributions
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Led testing for the entire application to ensure
                        reliability and performance.
                      </li>
                      <li>
                        Set up and managed the CI/CD pipeline using GitHub
                        Actions for automated deployment.
                      </li>
                      <li>
                        Designed and implemented all backend APIs and managed
                        the database.
                      </li>
                      <li>Developed user login and signup functionality.</li>
                      <li>
                        Connected and deployed the application to Microsoft
                        Azure.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`w-full py-16 md:py-24 bg-gray-50 ${
            isVisible.contact ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 px-4 py-1.5 rounded-full">
                <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  Contact Me
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full my-2"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow flex items-center">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md">
                    <img
                      src={location || "/placeholder.svg"}
                      width="30"
                      height="30"
                      alt="Location"
                      className="invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600">Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow flex items-center">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md">
                    <img
                      src={email || "/placeholder.svg"}
                      width="30"
                      height="30"
                      alt="Email"
                      className="invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:thendorav@gmail.com"
                      className="text-teal-600 hover:underline underline-offset-4 font-medium"
                    >
                      Kabelomrn@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Download CV
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
