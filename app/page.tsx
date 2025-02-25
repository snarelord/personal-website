import Image from "next/image";
import Header from "@/components/header";
import ProjectItem from "@/components/project-item";
import styles from "./page.module.css";

export default function Home() {
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

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h3>Hi, I'm Kit!</h3>
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

      <section className={styles.portfolio}>
        <ProjectItem
          number="01"
          title="Project Name"
          description="A brief description of the project and the technologies used. Explain the problem it solves and your role in developing it."
          link="#"
          imageUrl="/placeholder.svg?height=600&width=800"
        />

        <ProjectItem
          number="02"
          title="Project Name"
          description="A brief description of the project and the technologies used. Explain the problem it solves and your role in developing it."
          link="#"
          imageUrl="/placeholder.svg?height=600&width=800"
          isReversed={true}
        />

        <ProjectItem
          number="03"
          title="Project Name"
          description="A brief description of the project and the technologies used. Explain the problem it solves and your role in developing it."
          link="#"
          imageUrl="/placeholder.svg?height=600&width=800"
        />
      </section>

      <section className={styles.contact}>
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
