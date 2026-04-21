import Image from "next/image";
import Link from "next/link";
import styles from "./PathCard.module.css";

export default function PathCard({
  title,
  description,
  image,
  imageAlt,
  href,
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={`${styles.imageWrap} image-overlay`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.link}>Explore →</span>
      </div>
    </Link>
  );
}
