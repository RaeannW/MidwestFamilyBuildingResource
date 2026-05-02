"use client";
import { useState, type ComponentProps } from "react";
import Container from "@/components/Container/Container";
import {
  blogPosts,
  featuredBlogPost,
  nonFeaturedBlogPosts,
} from "@/content/blog";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturedBlogCard from "@/components/FeaturedBlogCard/FeaturedBlogCard";
import styles from "./page.module.css";
import BlogListItem from "@/components/BlogListItem/BlogListItem";
import BlogCategorySidebar from "@/components/BlogCategorySidebar/BlogCategorySidebar";
import Button from "@/components/Button/Button";

const blogContent: ComponentProps<typeof HeroSection> = {
  eyebrow: "From our team",
  headlineLine1: "All blog posts",
  subtext:
    "Evidence-based information for families navigating IVF, adoption, fostering, and surrogacy.",
  background: "cream",
  align: "center",
};

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? nonFeaturedBlogPosts
      : blogPosts.filter((post) => post.tags?.includes(activeCategory));

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
            <BlogCategorySidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className={styles.list}>
              {activeCategory !== "all" && (
                <div className={styles.filterStatus}>
                  <span>
                    Showing {filteredPosts.length}{" "}
                    {filteredPosts.length === 1 ? "post" : "posts"}
                  </span>
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => setActiveCategory("all")}
                  >
                    Clear filter ×
                  </Button>
                </div>
              )}

              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <BlogListItem key={post.slug} {...post} />
                ))
              ) : (
                <p className={styles.empty}>
                  No posts in this category yet. Check back soon.
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
