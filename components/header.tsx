import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Kit Jones
      </Link>
      <nav className={styles.nav}>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
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
