import { Link } from "react-router-dom";
import hero from "../assets/logo.png";
import "../App.css";

export default function NavBar() {
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
            width="45"
            height="45"
            alt="Logo"
            //className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <span className="sr-only">Thendo Ravhengani</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6 ">
          <a
            href="#home"
            className="text-xl text-black hover:text-[#7D9B76] font-medium hover:underline underline-offset-4"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-xl text-black hover:text-[#7D9B76] cursor-pointer font-medium hover:underline underline-offset-4"
          >
            About
          </a>
          <a
            href="#education"
            className="text-xl text-black hover:text-[#7D9B76] cursor-pointer font-medium hover:underline underline-offset-4"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-xl text-black hover:text-[#7D9B76] cursor-pointer font-medium hover:underline underline-offset-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xl text-black hover:text-[#7D9B76] cursor-pointer font-medium hover:underline underline-offset-4"
          >
            Contact
          </a>
          <a
            href="/cv.pdf" // Relative path to the PDF in the public folder
            className="text-xl text-black hover:text-[#7D9B76] cursor-pointer font-medium hover:underline underline-offset-4"
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer" // Prevents security vulnerabilities
          >
            Curriculum Vitae
          </a>
        </nav>
      </div>
    </header>
  );
}
