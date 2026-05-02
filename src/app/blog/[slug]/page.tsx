import Container from "@/components/Container/Container";
import { blogPosts } from "@/content/blog";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
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
