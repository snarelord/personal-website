"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import Header from "@/components/header";
import ProjectItem from "@/components/project-item";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

export default function Home() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // intersection observer watches for elements entering the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: "easeOutQuad",
          });
          observer.unobserve(entry.target); // stop once animated
        }
      });
    });
  }, []);

  useEffect(() => {
    anime({
      targets: "h1",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1800,
      easing: "easeOutQuad",
    });
    anime({
      targets: "h2",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1800,
      easing: "easeOutQuad",
    });
    anime({
      targets: ".kit",
      scale: [1],
      opacity: [0.6, 1],
      duration: 1000,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Kit Jones</h1>
          <h2>Software Engineer</h2>
        </div>
        <Image
          src="./circumference-52-of-811.png"
          alt="Hero background"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <h3 className="kit">Hi, I'm Kit!</h3>
          <p>
            In 2024 I decided to take my passion for creation and
            problem-solving into the world of programming. With nearly four
            years in designer fashion retail management, and almost eight years
            in electronic music production, I wanted a career that challenged me
            while allowing me to build and innovate in new ways.
          </p>
          <p>
            This journey began with the School of Code. A 16-week intensive
            bootcamp that started to reshape my life. Now as the course comes to
            an end, I’m looking to deepen my knowledge in both front-end and
            back-end development.
          </p>
        </div>
      </section>

      <section id="portfolio" className={styles.about}>
        <div className={styles.portfolioContent}>
          <h3>Portfolio</h3>
          <ProjectItem
            number="01"
            title="Novari"
            description="A website application, planned and built over the group final project week at the School of Code. Novari is designed to tackle the issue of users loneliness and personal growth through community connection. Created with Next.js, React, TypeScript/JavaScript and Tailwind."
            link="https://github.com/AJHemmings/Novari"
            imageUrl="/novari.png?height=600&width=800"
          />

          <ProjectItem
            number="02"
            title="Monopoly DEAL"
            description="In development website application remaking the Monopoly Deal card game. Building with Next.js, React, TypeScript/JavaScript. The game is designed to be played with friends and family online."
            link="https://github.com/snarelord/monopoly-deal"
            imageUrl="/monopoly-deal.png?height=600&width=800"
            isReversed={true}
          />

          {/* <ProjectItem
            number="03"
            title="Project Name"
            description="A brief description of the project and the technologies used. Explain the problem it solves and your role in developing it."
            link="#"
            imageUrl="/placeholder.svg?height=600&width=800"
          /> */}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactContent}>
          <h2>Contact</h2>
          <a href="mailto:kitjonesuk@gmail.com" className={styles.contactLink}>
            kitjonesuk@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
