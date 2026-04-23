import React from "react";
import Container from "@/components/Container/Container";
import { featuredBlogPosts } from "@/content/blog";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = featuredBlogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return (
    <main>
      <Container>
        <article>
          <p>{post.category}</p>
          <h1>{post.title}</h1>
          <p>Coming soon — full article in progress.</p>
        </article>
      </Container>
    </main>
  );
}
