import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import styles from "./BlogListItem.module.css";

type BlogListItemProps = Pick<
  BlogPost,
  | "slug"
  | "category"
  | "title"
  | "excerpt"
  | "image"
  | "imageAlt"
  | "publishedDate"
  | "readTime"
>;

export default function BlogListItem({
  slug,
  category,
  title,
  excerpt,
  image,
  imageAlt,
  publishedDate,
  readTime,
}: BlogListItemProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.item}>
      <div className={`${styles.imageWrap} image-overlay`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.meta}>
          <span className={styles.date}>
            {publishedDate} · {readTime}
          </span>
          <span className={styles.link}>Read →</span>
        </div>
      </div>
    </Link>
  );
}
