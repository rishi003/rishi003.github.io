"use client";

import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <nav>Home, About, Portfolio, Resume, My quirky blog</nav>;
}
