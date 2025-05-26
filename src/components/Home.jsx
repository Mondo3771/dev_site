"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { ChevronRight, ExternalLink, Github,Youtube, YoutubeIcon } from "lucide-react";

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

    const sections = ["about", "education", "projects", "contact"];
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
                    <br />I have a great intrest in Machine Learning and
                    Artificial Intelligence, and I am always looking for new to
                    intergrate those intrests into my projects.
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
                      National Senior Certificate (IEB)
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

              {/* Commongrounds Project */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Commongrounds Residential Management
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Commongrounds is a powerful online platform designed to
                      simplify property management for sectional title bodies
                      corporate. With a comprehensive suite of features tailored
                      to their unique needs, it empowers governing entities to
                      manage tasks efficiently while fostering transparent
                      communication with residents.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Commongrounds offers a fully responsive design, delivering
                      a smooth and user-friendly experience across all devices
                      and screen sizes.
                    </p>
                    <p className="text-gray-500 italic mb-6">
                      Further information & demo accounts are available through
                      the GitHub link provided.
                    </p>

                    <div className="flex items-center gap-4">
                      <a
                        href="https://common-grounds-app.onrender.com/"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <ExternalLink size={18} />
                        View Live
                      </a>
                      <a
                        href="https://github.com/ThendoRavi/common-grounds-app.git"
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
                        src={commongrounds || "/placeholder.svg"}
                        alt="Commongrounds App"
                        className="w-full rounded-lg shadow-lg object-contain"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fat Guys Project */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Fat Guys - 3D Platformer Game
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      <strong>Fat Guys</strong> is a 3D platformer game,
                      inspired by <em>Fall Guys</em>, developed using Three.js.
                      It challenges players to race against the clock while
                      navigating dynamic and visually engaging levels.
                    </p>

                    <h4 className="font-bold text-gray-700 mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                      <li>
                        <strong>Timer and Best-Time Tracking:</strong>{" "}
                        Encourages competitive play by rewarding fast completion
                        times.
                      </li>
                      <li>
                        <strong>Lives System and Level Unlocking:</strong>{" "}
                        Offers progression-based gameplay for an engaging
                        experience.
                      </li>
                      <li>
                        <strong>Rigged and Animated Player Models:</strong>{" "}
                        Unique character designs fully created and animated in
                        Blender.
                      </li>
                      <li>
                        <strong>
                          Dynamic Lighting and Textured Obstacles:
                        </strong>{" "}
                        Combines ambient, directional, and point lighting with
                        detailed textures.
                      </li>
                      <li>
                        <strong>Particle System:</strong> Adds atmospheric
                        effects and dramatic respawn animations.
                      </li>
                    </ul>

                    <div className="flex items-center gap-4">
                      <a
                        href="https://lamp.ms.wits.ac.za/~schickentendies/"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <ExternalLink size={18} />
                        Play Game
                      </a>
                      <a
                        href="https://github.com/ThendoRavi/fat-guys.git"
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
                        src={fatguys || "/placeholder.svg"}
                        alt="Fat Guys Game"
                        className="w-full rounded-lg shadow-lg object-contain"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Campus Safety Project */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      WITS SDASM Website
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Wits SDASM Website is a dynamic and purpose-driven
                      platform designed to serve the Seventh-day Adventist
                      Student Movement at the University of the Witwatersrand.
                      Built to foster spiritual growth, community engagement,
                      and accessibility to faith-based resources, the site acts
                      as a central hub for both members and visitors.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The website features dedicated pages for church services,
                      executive committee profiles, and active subcommittees,
                      offering insight into the structure and values of the
                      organization. It also includes a thoughtfully curated
                      Resource Centre—a collection of devotionals, Bible study
                      guides, and wellness programs tailored to enrich the
                      spiritual journey of students.
                    </p>
                    <p className="text-gray-500 italic mb-6">
                      Built using WordPress, the site leverages its flexibility
                      and user-friendly interface to deliver a modern, easily
                      maintainable platform.
                    </p>

                    <div className="flex items-center gap-4">
                      <a
                        href="https://witssdasm.org.za"
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        rel="noreferrer"
                      >
                        <ExternalLink size={18} />
                        View Live
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="h-full flex items-center justify-center bg-gray-50 p-4">
                      <img
                        src={witssdasm || "/placeholder.svg"}
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

        {/* Contact Section - Enhanced */}
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
                      thendorav@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
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
