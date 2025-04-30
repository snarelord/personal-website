import styles from "./ProjectItem.module.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectItemProps {
  number: string;
  title: string;
  // techIcons: React.ReactNode;
  description: string;
  link: string;
  imageUrl: string;
  isReversed?: boolean;
}

export default function ProjectItem({
  number,
  title,
  // techIcons,
  description,
  link,
  imageUrl,
  isReversed = false,
}: ProjectItemProps) {
  return (
    <div className={`${styles.portfolioItem} ${isReversed ? styles.reversed : ""}`}>
      <div className={styles.portfolioContent}>
        <span className={styles.projectNumber}>{number}</span>
        <h2>{title}</h2>
        {/* <div className={styles.techIcons}>{techIcons}</div> */}
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          View Project <ArrowRight size={20} />
        </a>
      </div>
      <div className={styles.portfolioImageWrapper}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} project screenshot`}
          width={400}
          height={300}
          // style={{ width: "100%", height: "auto" }}
          className={styles.portfolioImage}
        />
      </div>
    </div>
  );
}
