import styles from "./project-item.module.css"
import { ArrowRight } from "lucide-react"

interface ProjectItemProps {
  number: string
  title: string
  description: string
  link: string
  imageUrl: string
  isReversed?: boolean
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
    <div className={`${styles.portfolioItem} ${isReversed ? styles.reversed : ""}`}>
      <div className={styles.portfolioContent}>
        <span className={styles.projectNumber}>{number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className={styles.projectLink}>
          View Project <ArrowRight size={20} />
        </a>
      </div>
      <div className={styles.portfolioImageWrapper}>
        <div className={styles.portfolioImage} style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
    </div>
  )
}

