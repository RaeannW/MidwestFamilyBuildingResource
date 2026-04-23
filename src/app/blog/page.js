import Container from "@/components/Container/Container";
import BlogCard from "@/components/BlogCard/BlogCard";
import { featuredBlogPosts } from "@/content/blog";

export default function BlogIndex() {
  return (
    <main>
      <Container>
        <h1>Blog</h1>
        <p>Evidence-based guides for every path to parenthood.</p>
        <div>
          {featuredBlogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
