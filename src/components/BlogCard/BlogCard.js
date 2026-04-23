import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({
  slug,
  category,
  title,
  image,
  imageAlt,
  href,
}) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={`${styles.imageWrap} image-overlay`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.link}>Read →</span>
      </div>
    </Link>
  );
}
