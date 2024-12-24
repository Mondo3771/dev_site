import { Link } from "react-router-dom";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import hero from "../assets/dev.png";
import "../App.css";

export default function NavBar() {
  const navRef = useRef();
  const toggleNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  // Add this function to handle link clicks
  const handleLinkClick = () => {
    // Check if nav is open (has responsive-nav class) before trying to close it
    if (navRef.current.classList.contains("responsive-nav")) {
      toggleNav();
    }
  }
  
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-[#F1F8FD]">
      <div className="flex items-center gap-4 sm:gap-6">
        <Link
          href="#"
          className="flex items-center justify-center text-black hover:text-[#7D9B76]"
          //prefetch={false}
        >
          <img
            src={hero}
            width="60"
            height="60"
            alt="Logo"
            className="header-logo"
            //className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <span className="sr-only">Thendo Ravhengani</span>
        </Link>
        <nav ref={navRef} className="flex gap-4 sm:gap-6 ">
          <a
            href="#home"
            className="text-xl text-black hover:text-[#7D9B76] font-medium no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#7D9B76] after:transition-all after:duration-300 hover:after:w-full"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-xl text-black hover:text-[#7D9B76] font-medium no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#7D9B76] after:transition-all after:duration-300 hover:after:w-full"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#education"
            className="text-xl text-black hover:text-[#7D9B76] font-medium no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#7D9B76] after:transition-all after:duration-300 hover:after:w-full"
            onClick={handleLinkClick}
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-xl text-black hover:text-[#7D9B76] font-medium no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#7D9B76] after:transition-all after:duration-300 hover:after:w-full"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xl text-black hover:text-[#7D9B76] font-medium no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#7D9B76] after:transition-all after:duration-300 hover:after:w-full"
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <a
            href="/cv.pdf" // Relative path to the PDF in the public folder
            className="text-xl text-black hover:text-[#7D9B76] font-medium no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#7D9B76] after:transition-all after:duration-300 hover:after:w-full"
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer" // Prevents security vulnerabilities
            onClick={handleLinkClick}
          >
            Curriculum Vitae
          </a>
          <button className="nav-btn nav-close-btn" onClick={toggleNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={toggleNav}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
