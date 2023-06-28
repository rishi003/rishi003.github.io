"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between px-5 my-5 items-center">
        <div>
          <h1 className="text-3xl font-semibold">
            <Link href={"/"}>Rishabh Awatani</Link>
          </h1>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Primary Menu - Desktop */}
        <div className="hidden md:flex">
          <Link className="px-5 hover:underline underline-offset-8" href={"/"}>
            Home
          </Link>
          <Link className="px-5 hover:underline underline-offset-8" href={"/"}>
            Portfolio
          </Link>
          <Link className="px-5 hover:underline underline-offset-8" href={"/"}>
            Blog
          </Link>
          <Link className="px-5 hover:underline underline-offset-8" href={"/"}>
            About
          </Link>
          <Link className="px-5" href={"https://github.com/rishi003/"}>
            <FontAwesomeIcon icon={faGithub} size="2x" className="inline" />
          </Link>
          <Link
            className="px-5"
            href={"https://www.linkedin.com/in/rishabh-awatani/"}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="inline" />
          </Link>
        </div>
      </div>

      {/* Primary Menu - Mobile */}
      {isOpen ? (
        <div className="md:hidden flex flex-col text-xl text-center">
          <Link className="py-3" href={"/"}>
            Home
          </Link>
          <Link className="py-3" href={"/"}>
            Portfolio
          </Link>
          <Link className="py-3" href={"/"}>
            Blog
          </Link>
          <Link className="py-3" href={"/"}>
            About
          </Link>
          <Link className="py-3" href={"https://github.com/rishi003/"}>
            <FontAwesomeIcon icon={faGithub} size="2x" className="inline" />
          </Link>
          <Link
            className="py-3"
            href={"https://www.linkedin.com/in/rishabh-awatani/"}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="inline" />
          </Link>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </nav>
  );
}
