import styles from "./project-item.module.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectItemProps {
  number: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  isReversed?: boolean;
}

export default function ProjectItem({
  number,
  title,
  description,
  link,
  imageUrl,
  isReversed = false,
}: ProjectItemProps) {
  return (
    <div
      className={`${styles.portfolioItem} ${isReversed ? styles.reversed : ""}`}
    >
      <div className={styles.portfolioContent}>
        <span className={styles.projectNumber}>{number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          View Project <ArrowRight size={20} />
        </a>
      </div>
      <div className={styles.portfolioImageWrapper}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} project screenshot`}
          width={400}
          height={300}
          className={styles.portfolioImage}
        />
      </div>
    </div>
  );
}
