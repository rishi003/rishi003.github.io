"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);

  const navLinks = [
    {
      title: "ABOUT",
      href: "/#about",
    },
    {
      title: "PROJECTS",
      href: "/#projects",
    },
    {
      title: "SLIDES",
      href: "/slides",
    },
  ];

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`flex justify-between items-center py-4 bg-white px-8 xl:px-64 duration-700 ${
          !top && `drop-shadow-2xl`
        }`}
        style={{ fontFamily: "Poppins" }}
      >
        <a href="/">
          <h1 className="text-3xl tracking-wide md:text-5xl">R. Awatani</h1>
        </a>
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-12 text-lg tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href} className="hover:text-teal-500 duration-300">
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="pl-8">
            <a href="https://github.com/rishi003">
              <FontAwesomeIcon
                className="hover:text-teal-500 duration-300"
                icon={faGithub}
                size="2x"
              />
            </a>
          </div>
          <div className="pl-8">
            <a href="https://www.linkedin.com/in/rishabh-awatani/">
              <FontAwesomeIcon
                className="hover:text-teal-500 duration-300"
                icon={faLinkedin}
                size="2x"
              />
            </a>
          </div>
          <div className="pl-8">
            <a href="https://drive.google.com/file/d/1gYUlLgJEnMphSMiVlhG9dYjHZAMO95WW/view?usp=sharing">
              <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white duration-300">
                <p className="tracking-wider" style={{ fontFamily: "Poppins" }}>
                  RESUME
                </p>
                <div className="ml-2">
                  <FontAwesomeIcon icon={faSave} />
                </div>
              </div>
            </a>
          </div>
        </nav>

        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="2x" />
          </button>
        </div>
      </div>
      <nav>
        {isOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 text-lg tracking-wider px-8 bg-white py-8 text-end">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="hover:text-teal-500 duration-300"
                onClick={toggleMenu}
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
            <div onClick={toggleMenu}>
              <a href="https://github.com/rishi003">
                <FontAwesomeIcon
                  className="hover:text-teal-500 duration-300"
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
            <div onClick={toggleMenu}>
              <a href="https://www.linkedin.com/in/rishabh-awatani/">
                <FontAwesomeIcon
                  className="hover:text-teal-500 duration-300"
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
            </div>
            <div className="w-full flex justify-end">
              <a href="https://drive.google.com/file/d/1gYUlLgJEnMphSMiVlhG9dYjHZAMO95WW/view?usp=sharing">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white duration-300 w-min">
                  <p
                    className="tracking-wider"
                    style={{ fontFamily: "Poppins" }}
                  >
                    RESUME
                  </p>
                  <div className="ml-2">
                    <FontAwesomeIcon icon={faSave} />
                  </div>
                </div>
              </a>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
}
