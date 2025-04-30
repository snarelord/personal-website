"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import Header from "../components/header";
import TechStack from "../components/TechStack";
import ProjectItem from "../components/ProjectItem";
import styles from "./page.module.css";

import { ChevronsLeftRight } from "lucide-react"; // js
import { StickyNote } from "lucide-react"; // css
import { FileCode } from "lucide-react"; // html
import { Database } from "lucide-react"; // sql
import { Server } from "lucide-react"; // node
import { Globe } from "lucide-react"; // react
import { PanelsTopLeft } from "lucide-react"; // nextjs
import { ArrowBigUpDash } from "lucide-react"; // rest
import { BookOpenCheck } from "lucide-react"; // vitest, jest, playwright
import { Box } from "lucide-react"; // pinecone
import { Computer } from "lucide-react"; // git/github
import { Figma } from "lucide-react"; // figma

let flowFieldAnimation: number;

// const canvasRef = useRef<HTMLCanvasElement | null>(null);
// const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
// const animationRef = useRef<number>(0);
// const flowFieldRef = useRef<any>(null);

// testing

export default function Home() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number>(0);
  const flowFieldRef = useRef<any>(null);

  useEffect(() => {
    const canvas = document.getElementById("techStackCanvas") as HTMLCanvasElement;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    class FlowFieldEffect {
      ctx: CanvasRenderingContext2D;
      width: number;
      height: number;
      lastTime: number;
      interval: number;
      timer: number;
      cellSize: number;
      gradient: CanvasGradient;
      radius: number;
      vr: number;

      constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx;
        // this.#ctx.strokeStyle = "white";
        this.ctx.lineWidth = 0.5;
        this.width = width;
        this.height = height;
        this.lastTime = 0;
        this.interval = 1000 / 60;
        this.timer = 0;
        this.cellSize = 7;
        this.gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
        this.#createGradient();
        this.ctx.strokeStyle = this.gradient;
        this.radius = 0;
        this.vr = 0.02; // speed
      }

      #createGradient() {
        // this.#gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
        this.gradient.addColorStop(0.1, "#A9A9A9");
        this.gradient.addColorStop(0.4, "#36454F");
        this.gradient.addColorStop(0.9, "#2f2f2f");
        // this.#gradient.addColorStop(0.4, "#ccccff");
        // this.#gradient.addColorStop(0.6, "#b3ffff");
        // this.#gradient.addColorStop(0.8, "#80ff80");
        // this.#gradient.addColorStop(0.9, "#ffff33");
      }

      #drawLine(angle: number, x: number, y: number) {
        const length = 60;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        this.ctx.stroke();
      }

      animate(timestamp: number) {
        const deltatime = timestamp - this.lastTime;
        this.lastTime = timestamp;
        if (this.timer > this.interval) {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.radius += this.vr;
          if (this.radius > 2 || this.radius < -2) {
            this.vr *= -1;
          }

          for (let y = 0; y < this.height; y += this.cellSize) {
            for (let x = 0; x < this.width; x += this.cellSize) {
              const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius; // lines rotate based on their position
              this.#drawLine(angle, x, y);
            }
          }

          this.timer = 0;
        } else {
          this.timer += deltatime;
        }

        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
      }
    }
    canvasRef.current = canvas;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const startFlow = () => {
      if (!canvasRef.current || !ctxRef.current) return;
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;
      cancelAnimationFrame(animationRef.current);

      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

      const flow = new FlowFieldEffect(ctx, canvas.width, canvas.height);
      flow.animate(Date.now());
      flowFieldRef.current = flow;
    };

    startFlow();

    // resize listener
    let resizeTimeout: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        startFlow();
      }, 300);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // intersection observer watches for elements entering the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              opacity: 1,
              visibility: "visible",
              translateY: "translateY(0)",
              duration: 1000,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target); // stop once animated
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% of element is visible
    );
    // observe each project item
    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    anime({
      targets: ".heroContent",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1800,
      easing: "easeOutQuad",
    });
    anime({
      targets: ".projectWrapper",
      scale: [1.8, 1.3],
      opacity: [0.6, 1],
      duration: 1000,
      easing: "easeInQuad",
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
        <Image src="./circumference-52-of-811.png" alt="Hero background" fill priority className={styles.heroImage} />
        <div className={styles.heroOverlay} />
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutContent}>
          <h3 className="kit">Hi, I'm Kit!</h3>
          <p>
            In 2024 I decided to take my passion for creation and problem-solving into the world of programming. With
            nearly four years in designer fashion retail management, and almost eight years in electronic music
            production, I wanted a career that challenged me while allowing me to build and innovate in new ways.
          </p>
          <p>
            This journey began with the School of Code. A 16-week intensive bootcamp that started to reshape my life.
            Now as the course comes to an end, I’m looking to deepen my knowledge in both front-end and back-end
            development.
          </p>
        </div>
      </section>

      {/* the tech stack section will have lines drawn through it using techSteckContent as a canvas and act as a background */}
      <section id="techstack" className={styles.techStack}>
        <h3 className={styles.techStackTitle}>Tech Stack</h3>
        <div id="techStackContent" className={styles.techStackContent}>
          <canvas id="techStackCanvas" className={styles.techStackCanvas} />
          <div className={styles.techStackItem}>
            <TechStack name="JavaScript/TypeScript" icon={<ChevronsLeftRight size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="HTML" icon={<FileCode size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="CSS" icon={<StickyNote size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="SQL" icon={<Database size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="Node.js" icon={<Server size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="React" icon={<Globe size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="Next.js" icon={<PanelsTopLeft size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="REST API" icon={<ArrowBigUpDash size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="Vitest/Playwright" icon={<BookOpenCheck size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="Pinecone" icon={<Box size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="Git/GitHub" icon={<Computer size={60} />} />
          </div>
          <div className={styles.techStackItem}>
            <TechStack name="Figma" icon={<Figma size={60} />} />
          </div>
        </div>
      </section>
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.portfolioContent}>
          <h3 className="portfolio-text">Portfolio</h3>
          <div
            ref={(el) => {
              projectRefs.current[0] = el;
            }}
            className={styles.projectWrapper}
          >
            <ProjectItem
              number="01"
              title="Audio Visualiser"
              description=" Audio visualisers built with React, TypeScript, Vite, and CSS Modules. The visualisers use the Web Audio API to analyse audio frequency data in real time and render animated graphics onto canvases."
              link="https://github.com/snarelord/audio-visualiser"
              imageUrl="/visualiser.png"
              isReversed={true}
            />
          </div>
          <div
            ref={(el) => {
              projectRefs.current[1] = el;
            }}
            className={styles.projectWrapper}
          >
            <ProjectItem
              number="02"
              title="Novari"
              description="A website application, planned and built over the group final project week at the School of Code. Novari is designed to tackle the issue of users loneliness and personal growth through community connection. Created with Next.js, React, TypeScript/JavaScript and Tailwind."
              link="https://github.com/AJHemmings/Novari"
              imageUrl="/novari.png"
            />
          </div>

          <div
            ref={(el) => {
              projectRefs.current[2] = el;
            }}
            className={styles.projectWrapper}
          >
            <ProjectItem
              number="03"
              title="Monopoly DEAL"
              description="In development website application remaking the Monopoly Deal card game. Building with Next.js, React, TypeScript/JavaScript. The game is designed to be played with friends and family online."
              link="https://github.com/snarelord/monopoly-deal"
              imageUrl="/monopoly-deal.png"
              isReversed={true}
            />
          </div>
          <div
            ref={(el) => {
              projectRefs.current[3] = el;
            }}
            className={styles.projectWrapper}
          >
            <ProjectItem
              number="04"
              title="Email Promo Sender"
              description="A Node.js application to email music promo to DJs. The app reads email addresses from a recipients.json file and sends an email to each recipient with a specified link pulled from the comand line to music hosted on Dropbox. This was created to make my life easier."
              link="https://github.com/snarelord/email-promo-sender"
              imageUrl="/email_icon.png"
            />
          </div>
          <div
            ref={(el) => {
              projectRefs.current[4] = el;
            }}
            className={styles.projectWrapper}
          >
            <ProjectItem
              number="05"
              title="Blackjack"
              description="A School of Code Hackathon created during week 10 DevOps. Showcasing a CI/CD pipeline, testing and containerisation."
              link="https://github.com/snarelord/week-10-hackathon-blackjack"
              imageUrl="/blackjack.png"
              isReversed={true}
            />
          </div>
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
