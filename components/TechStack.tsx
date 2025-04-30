import styles from "./TechStack.module.css";

interface TechStackItemProps {
  icon: React.ReactNode;
  name: string;
}

export default function TechStack({ icon, name }: TechStackItemProps) {
  return (
    <div className={styles.techStackIcon}>
      {icon}
      <div className={styles.techStackName}>{name}</div>
    </div>
  );
}
