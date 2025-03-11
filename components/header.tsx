"use client";

// import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import styles from "./header.module.css";

export default function Header() {
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
        <a
          onClick={() => handleScroll("portfolio")}
          style={{ cursor: "pointer" }}
        >
          Portfolio
        </a>
        <a onClick={() => handleScroll("about")} style={{ cursor: "pointer" }}>
          About
        </a>
        <a
          onClick={() => handleScroll("contact")}
          style={{ cursor: "pointer" }}
        >
          Contact
        </a>
        <div className={styles.social}>
          <a
            href="https://github.com/snarelord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kit-jones-64926a2aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/circumferencemusicuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
