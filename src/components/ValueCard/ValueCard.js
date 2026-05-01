import Image from "next/image";
import styles from "./ValueCard.module.css";

export default function ValueCard({ icon, title, description }) {
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
