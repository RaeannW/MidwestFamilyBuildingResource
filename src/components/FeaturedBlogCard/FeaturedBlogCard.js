import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedBlogCard.module.css";

export default function FeaturedBlogCard({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  publishedDate,
  readTime,
  theme = "light",
}) {
  return (
    <Link href={`/blog/${slug}`} className={`${styles.card} ${styles[theme]}`}>
      <div className={`${styles.imageWrap} image-overlay`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.label}>Featured Post</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <p className={styles.meta}>
          {publishedDate} · {readTime}
        </p>
        <span className={styles.link}>Read full article →</span>
      </div>
    </Link>
  );
}
