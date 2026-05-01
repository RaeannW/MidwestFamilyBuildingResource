import Container from "@/components/Container/Container";
// import BlogCard from "@/components/BlogCard/BlogCard";
import { featuredBlogPost, nonFeaturedBlogPosts } from "@/content/blog";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturedBlogCard from "@/components/FeaturedBlogCard/FeaturedBlogCard";
import styles from "./page.module.css";
import BlogListItem from "@/components/BlogListItem/BlogListItem";
import BlogCategorySidebar from "@/components/BlogCategorySidebar/BlogCategorySidebar";

const blogContent = {
  eyebrow: "From our team",
  headlineLine1: "All blog posts",
  subtext:
    "Evidence-based information for families navigating IVF, adoption, fostering, and surrogacy.",
  background: "cream",
  align: "center",
};

export default function BlogIndex() {
  return (
    <main>
      <HeroSection {...blogContent} />

      {featuredBlogPost && (
        <section className={styles.featuredSection}>
          <Container>
            <FeaturedBlogCard {...featuredBlogPost} theme="dark" />
          </Container>
        </section>
      )}

      <section className={styles.listSection}>
        <Container>
          <div className={styles.layout}>
            <BlogCategorySidebar activeCategory="all" />
            <div className={styles.list}>
              {nonFeaturedBlogPosts.map((post) => (
                <BlogListItem key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
