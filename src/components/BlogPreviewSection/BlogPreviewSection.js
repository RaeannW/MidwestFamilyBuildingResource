import Image from "next/image";
import Container from "@/components/Container/Container";
import BlogCard from "@/components/BlogCard/BlogCard";
import { featuredBlogPosts } from "@/content/blog";
import styles from "./BlogPreviewSection.module.css";

const sectionContent = {
  eyebrow: "Evidence-based guides",
  headline: "From the blog.",
};

export default function BlogPreviewSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrow">{sectionContent.eyebrow}</p>
          <h2 className={styles.headline}>{sectionContent.headline}</h2>
          <div className={styles.icon}>
            <Image
              src="/images/logos/iconRound.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className={styles.grid}>
          {featuredBlogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Container>
      <div className={styles.bottomBar} />
    </section>
  );
}
