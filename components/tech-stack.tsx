import styles from "./tech-stack.module.css";

interface TechStackItemProps {
  icon: React.ReactNode;
  title: string;
}

export default function TechStack({ icon, title }: TechStackItemProps) {
  return (
    <div className={styles.techStackIcon}>
      {icon}
      <div className={styles.techStackTitle}>{title}</div>
    </div>
  );
}
