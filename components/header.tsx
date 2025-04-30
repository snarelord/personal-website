"use client";

// import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  // add state for hamburger menu, only viewable on mobile
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Kit Jones</p>
      <nav className={styles.nav}>
        <a onClick={() => handleScroll("portfolio")} style={{ cursor: "pointer" }}>
          Portfolio
        </a>
        <a onClick={() => handleScroll("about")} style={{ cursor: "pointer" }}>
          About
        </a>
        <a onClick={() => handleScroll("contact")} style={{ cursor: "pointer" }}>
          Contact
        </a>
        <div className={styles.social}>
          <a href="https://github.com/snarelord" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kit-jones-64926a2aa/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com/circumferencemusicuk/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
        </div>
      </nav>
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle social links">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`${styles.mobileMenu}
      ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <a href="https://github.com/snarelord" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/kit-jones-64926a2aa/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="https://instagram.com/circumferencemusicuk/" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
        </a>
      </div>
    </header>
  );
}
