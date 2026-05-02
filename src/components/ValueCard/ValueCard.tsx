import Image from "next/image";
import type { Value } from "@/content/values";
import styles from "./ValueCard.module.css";

type ValueCardProps = Value;

export default function ValueCard({
  icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Image src={icon} alt="" width={80} height={80} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
