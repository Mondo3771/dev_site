  import React from "react";
  import NavBar from "./NavBar";
  import Footer from "./Footer";
  import { Link } from "react-router-dom";
  import { ReactTyped } from "react-typed";
  import { useState } from "react";
  import hero from "../assets/heroGif.gif";
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
  import website from "../assets/website.png";
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
  import wits from "../assets/wits-logo.png";
  import fatguys from "../assets/fat-guys.jpg";

  import "../App.css";

  function Home() {
    // Define the hover state
    //const [isHovered, setIsHovered] = useState(false);
    return (
      <div>
        <NavBar />
        <main className="flex-1 items-center justify-center bg-[#F1F8FD] ">
          <section id="home" className="w-full py-12 sm:py-16 md:py-12 lg:py-12 ">
            <div className="container px-4 md:px-6 flex sm:flex-col items-center justify-center">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4 ">
                  <div className="space-y-2">
                    {/* ReactTyped Component Integration */}
                    <div>
                      <span className="text-xl from-neutral-700 tracking-tighter sm:text-5xl xl:text-4xl/none rounded-md p-2">
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
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                      Thendo Ravhengani
                    </h1>

                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Computer Science graduate from the University of
                      Witwatersrand with a passion for software development and
                      cloud computing.
                    </p>
                    <div className="flex flex-row items-center">
                      <a href="https://www.linkedin.com/in/thendo-ravhengani-b170982bb/" target="_blank">
                        <img
                          src={linkedIn}
                          width="70"
                          height="70"
                          alt="Thendo Ravhengani"
                          className=" cursor-pointer"
                        />
                      </a>
                      <a href="https://github.com/ThendoRavi" target="_blank">
                        <img
                          src={github}
                          width="60"
                          height="40"
                          alt="Thendo Ravhengani"
                          className=" cursor-pointer"
                        />
                      </a>
                    </div>
                    <h2 className="mt-2">Skills</h2>
                    <div className="flex mt-3 items-center">
                      <div className="flex flex-row">
                        {/* <div className="relative inline-block">
                          <a
                            href=""
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <img
                              src={html}// Replace with your actual image path
                              width="80"
                              height="80"
                              alt="HTML"
                              className="cursor-pointer"
                            />
                          </a>

                  
                          <div
                            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-black text-white text-sm rounded shadow-lg transition-opacity duration-300 ${
                              isHovered
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                            }`}
                          >
                            HTML
                          </div>
                        </div> */}
                        <a href="">
                          <img
                            src={html}
                            width="80"
                            height="80"
                            alt="HTML"
                            className="cursor-pointer"
                          />
                        </a>

                        <a href="">
                          <img
                            src={css}
                            width="80"
                            height="80"
                            alt="CSS"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={js}
                            width="80"
                            height="80"
                            alt="JavaScript"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={react}
                            width="80"
                            height="80"
                            alt="React"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={tailwind}
                            width="80"
                            height="80"
                            alt="Tailwind CSS"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={nodejs}
                            width="80"
                            height="80"
                            alt="Node.js"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={mongodb}
                            width="80"
                            height="80"
                            alt="MongoDB"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={azure}
                            width="80"
                            height="80"
                            alt="Azure"
                            className="cursor-pointer"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="flex mt-3 items-center">
                      <h2 className="mr-3 hidden">Skills</h2>
                      <div className="flex flex-row">
                        <a href="">
                          <img
                            src={java}
                            width="80"
                            height="80"
                            alt="HTML"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={python}
                            width="80"
                            height="80"
                            alt="CSS"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={c}
                            width="80"
                            height="80"
                            alt="JavaScript"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={cpp}
                            width="80"
                            height="80"
                            alt="React"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={sql}
                            width="80"
                            height="80"
                            alt="Tailwind CSS"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={git}
                            width="80"
                            height="80"
                            alt="Node.js"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={agile}
                            width="80"
                            height="80"
                            alt="MongoDB"
                            className="cursor-pointer"
                          />
                        </a>
                        <a href="">
                          <img
                            src={postman}
                            width="80"
                            height="80"
                            alt="Azure"
                            className="cursor-pointer"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={hero}
                  alt="Hero"
                  className="mx-auto aspect-video rounded-xl object-cover sm:w-full"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="w-full py-12 sm:py-16 md:py-12 lg:py-12 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Software Developer
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Seeking an environment where I can contribute my
                    problem-solving skills and strong drive to master my coding
                    expertise and deliver high-quality software solutions. <br />I
                    enjoy problem-solving and coding and I am passionate about
                    designing software solutions that are user-friendly and
                    efficient. I'm constantly striving to expand my technical
                    skills through practice and experimentation with new
                    frameworks.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12 mr-15">
                <div className="grid gap-1">
                  <img src={coder} width="30" height="30" alt="Logo" />
                  <h3 className="text-xl font-bold">Avid Coder</h3>
                  <p className="text-muted-foreground">
                    Over six years of coding experience, in different
                    environments.
                  </p>
                </div>
                <div className="grid gap-1">
                  <img src={webDev} width="30" height="30" alt="Logo" />
                  <h3 className="text-xl font-bold">Web Dev</h3>
                  <p className="text-muted-foreground">
                    Full-stack development experience with the MERN stack
                    (MongooseDB, Express, React, Node.js) and JavaScript for
                    simple and complex web application solutions.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12 mr-15">
                <div className="grid gap-1">
                  <img src={fix} width="30" height="30" alt="Logo" />
                  <h3 className="text-xl font-bold">Problem Solver</h3>
                  <p className="text-muted-foreground">
                    A natural problem-solver with a strong analytical mindset and
                    a deep mathematical background, adept at breaking down complex
                    challenges into manageable solutions.
                    {/* I thrive in environments that require creative thinking, critical analysis, 
                  and innovative approaches to deliver efficient and practical outcomes. */}
                  </p>
                </div>
                <div className="grid gap-1">
                  <img src={team} width="30" height="30" alt="Logo" />
                  <h3 className="text-xl font-bold">Team Player</h3>
                  <p className="text-muted-foreground">
                    Collaborative and communicative, with experience working in
                    diverse team environments to successfully deliver projects.
                  </p>
                </div>
                <div className="grid gap-1">
                  <img src={learner} width="30" height="30" alt="Logo" />
                  <h3 className="text-xl font-bold">Adaptable Learner</h3>
                  <p className="text-muted-foreground">
                    Quick to adapt to new tools, technologies, and frameworks,
                    with a passion for staying up-to-date in the ever-evolving
                    tech landscape.
                  </p>
                </div>
                <div className="grid gap-1">
                  <img src={communication} width="30" height="30" alt="Logo" />
                  <h3 className="text-xl font-bold">Effective Communicator</h3>
                  <p className="text-muted-foreground">
                    Skilled at translating technical concepts into clear and
                    concise language, for non-technical stakeholders to understand
                    project progress and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="w-full py-12 sm:py-16 md:py-12 lg:py-12 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Education
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Currently have completed my bachelors degree in Computer
                    Science at the University of Witwatersrand. I have a strong
                    foundation in mathematics, computer science and software
                    development principles.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12 mr-15">
                <div className="grid gap-1  ">
                  {/* <img src={wits} width="100" height="100" alt="Logo" /> */}
                  <h3 className="text-xl font-bold">BSc Computer Science</h3>

                  <p className="text-muted-foreground font-extrabold">
                    University of Witwatersrand
                  </p>
                  <p className="text-muted-foreground">2022 - 2024 (Completed)</p>
                  <span className="text-muted-foreground">
                    <span className="text-muted-foreground font-bold">
                      Relevant Coursework
                    </span>
                    <br />
                    Mathematics <br />
                    Applied Mathematics <br />
                    Data Structures and Algorithms <br />
                    Database Fundamentals <br />
                    Computer Networks <br />
                    Mobile Computing <br />
                    Software Design <br />
                    Machine Learning <br />
                    Analysis of Algorithms <br />
                  </span>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    National Senior Certificate (IEB){" "}
                  </h3>
                  <p className="text-muted-foreground font-extrabold">
                    Maragon Mooikloof
                  </p>
                  <span className="text-muted-foreground">
                    {" "}
                    <span className="text-muted-foreground font-bold">
                      Matriculated:
                    </span>{" "}
                    2021
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    <span className="text-muted-foreground font-bold">
                      Average:
                    </span>{" "}
                    77+
                  </span>
                  <span className="text-muted-foreground">
                    <span className="text-muted-foreground font-bold">
                      Relevant Coursework
                    </span>
                    <br />
                    Mathematics <br />
                    Physical Science <br />
                    Infomation Technology <br />
                    Dramatic Arts <br />
                    English HL <br />
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="w-full py-12 sm:py-16 md:py-12 lg:py-12 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Projects
                  </h2>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-1 lg:gap-12 mr-15">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Campus Safety App</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground mr-7">
                      Campus Safety is a state-of-the-art web application designed
                      to enhance campus security by providing real-time tools and
                      resources for students, staff, and security personnel. This
                      innovative platform offers users instant access to emergency
                      alerts, live incident updates, and direct reporting
                      features. By incorporating live tracking and real-time
                      notifications, Campus Safety enables swift communication and
                      rapid response to safety concerns. Tailored specifically for
                      campus environments like the University of the
                      Witswatersrand, the app fosters collaboration between users
                      and security teams while promoting transparency and
                      preparedness. With its fully responsive design, Campus
                      Safety ensures a seamless and user-friendly experience on
                      any device, keeping users informed and connected at all
                      times. <br />
                      Demo accounts are available through the GitHub link
                      provided.
                    </p>
                    <img
                      src={campusSafety}
                      width="500"
                      height="180"
                      alt="Campus Safety"
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <a href="https://campus-safety.azurewebsites.net/login" target="_blank">
                      <img
                        src={website}
                        width="50"
                        height="50"
                        alt="Campus Safety App"
                        className=" cursor-pointer"
                      />
                    </a>
                    <a href="https://github.com/ThendoRavi/campus-safety-app.git" target="_blank">
                      <img
                        src={github}
                        width="75"
                        height="55"
                        alt="Thendo Ravhengani"
                        className=" cursor-pointer"
                      />
                    </a>
                  </div>
                </div>

                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Commongrounds Residential Management
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground mr-7">
                      Commongrounds is a powerful online platform designed to
                      simplify property management for sectional title bodies
                      corporate. With a comprehensive suite of features tailored
                      to their unique needs, it empowers governing entities to
                      manage tasks efficiently while fostering transparent
                      communication with residents. Commongrounds offers a fully
                      responsive design, delivering a smooth and user-friendly
                      experience across all devices and screen sizes. <br />
                      Further information & demo accounts are available through
                      the GitHub link provided.
                    </p>
                    <img
                      src={commongrounds}
                      width="500"
                      height="180"
                      alt="Campus Safety"
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <a href="https://common-grounds-app.onrender.com/ " target="_blank">
                      <img
                        src={website}
                        width="50"
                        height="50"
                        alt="Campus Safety App"
                        className=" cursor-pointer"
                      />
                    </a>
                    <a href="https://github.com/ThendoRavi/common-grounds-app.git" target="_blank">
                      <img
                        src={github}
                        width="75"
                        height="55"
                        alt="Thendo Ravhengani"
                        className=" cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Fat Guys - 3D Platformer Game
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground mr-7">
                      <strong>Fat Guys</strong> is a 3D platformer game, inspired
                      by <em>Fall Guys</em>, developed using Three.js. It
                      challenges players to race against the clock while
                      navigating dynamic and visually engaging levels.
                      <br />
                      <br />
                      <strong>Key Features:</strong>
                      <ul>
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
                          <strong>Hierarchical Modeling:</strong> Ensures complex
                          movements and interactions run smoothly.
                        </li>
                        <li>
                          <strong>
                            Dynamic Lighting and Textured Obstacles:
                          </strong>{" "}
                          Combines ambient, directional, and point lighting with
                          detailed textures for an immersive visual experience.
                        </li>
                        <li>
                          <strong>Particle System:</strong> Adds atmospheric
                          effects and dramatic respawn animations.
                        </li>
                        <li>
                          <strong>Minimap and Volume Control:</strong> Enhances
                          navigation and allows players to customize their audio
                          experience.
                        </li>
                      </ul>
                      The game prioritizes polished mechanics, creative gameplay,
                      and an engaging user experience, blending technical
                      innovation with fun and competitive elements. 
                    </p>
                    <img
                      src={fatguys}
                      width="500"
                      height="180"
                      alt="Campus Safety"
                      className=""
                    />
                  </div>
                  <div className="flex items-center">
                    <a href="https://lamp.ms.wits.ac.za/~schickentendies/" target="_blank">
                      <img
                        src={website}
                        width="50"
                        height="50"
                        alt="Campus Safety App"
                        className=" cursor-pointer"
                      />
                    </a>
                    <a href="https://github.com/KatangaDan/fat-guys.git" target="_blank">
                      <img
                        src={github}
                        width="75"
                        height="55"
                        alt="Thendo Ravhengani"
                        className=" cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="w-full py-12 sm:py-16 md:py-12 lg:py-12 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Contact Me
                  </h2>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12 mr-15">
                <div className="grid gap-1">
                  <div className="flex items-center">
                    <img
                      src={location}
                      width="35"
                      height="15"
                      alt="Thendo Ravhengani"
                      className=" cursor-pointer mr-2"
                    />
                    <h3 className="text-xl font-bold">Location</h3>
                  </div>{" "}
                  <p className="text-muted-foreground">
                    Johannesburg, South Africa
                  </p>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center">
                    <img
                      src={email}
                      width="35"
                      height="15"
                      alt="Thendo Ravhengani"
                      className=" cursor-pointer mr-2"
                    />
                    <h3 className="text-xl font-bold">Email</h3>
                  </div>
                  <p className="text-muted-foreground">
                    <Link
                      href="thendorav@gmail.com"
                      className=" hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      thendorav@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  export default Home;
