export type BlogPost = {
  slug: string;
  category: string;
  tags: string[];
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  publishedDate: string;
  readTime: string;
  author: string;
  featured: boolean;
  content: string[];
};

type BlogCategory = {
  label: string;
  slug: string;
};

type BlogCategoryGroup = {
  heading: string;
  categories: BlogCategory[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ivf-cost-missouri-2025",
    category: "IVF · Cost guide",
    tags: ["ivf", "cost-guides", "missouri"],
    title: "What IVF actually costs in Missouri in 2025",
    excerpt:
      "Real out-of-pocket costs including medications, monitoring, and transfer fees at clinics across the state.",
    image: "/images/blog/comingSoon.jpg",
    imageAlt: "coming soon",
    publishedDate: "2025-05-02",
    readTime: "8 min read",
    author: "Raeann",
    featured: true,
    content: [
      "This post is coming soon.",
      "We are putting together a comprehensive breakdown of real IVF costs for Missouri families — including medications, monitoring, retrieval, and transfer fees across major clinics in the state.",
      "Check back soon, or sign up for our newsletter to be notified when this post goes live.",
    ],
  },
  {
    slug: "domestic-vs-international-adoption",
    category: "Adoption",
    tags: ["adoption", "cost-guides"],
    title: "Domestic vs international adoption: a cost comparison",
    excerpt:
      "Understanding the cost differences between domestic and international adoption to help you choose the right path.",
    image: "/images/blog/comingSoon.jpg",
    imageAlt: "coming soon",
    publishedDate: "2025-04-18",
    readTime: "8 min read",
    author: "Raeann",
    featured: false,
    content: [
      "This post is coming soon.",
      "We are preparing a detailed comparison of domestic and international adoption costs, timelines, and what families should know before deciding which path fits their situation.",
      "Check back soon, or sign up for our newsletter to be notified when this post goes live.",
    ],
  },
  {
    slug: "micro-grant-lottery",
    category: "Grants",
    tags: ["grants"],
    title: "How our micro-grant lottery works",
    excerpt:
      "Everything you need to know about our quarterly lottery, eligibility requirements, and how funds are distributed.",
    image: "/images/blog/comingSoon.jpg",
    imageAlt: "coming soon",
    publishedDate: "2025-04-10",
    readTime: "8 min read",
    author: "Raeann",
    featured: false,
    content: [
      "This post is coming soon.",
      "We are writing up a full explainer of our quarterly micro-grant lottery — including how to apply, eligibility requirements, the selection process, and how funds are paid directly to providers.",
      "In the meantime, visit our Grants page for current cycle information and application details.",
    ],
  },
];

export const blogCategoryGroups: BlogCategoryGroup[] = [
  {
    heading: "Paths",
    categories: [
      { label: "All posts", slug: "all" },
      { label: "IVF", slug: "ivf" },
      { label: "Adoption", slug: "adoption" },
      { label: "Foster", slug: "foster" },
      { label: "Surrogacy", slug: "surrogacy" },
    ],
  },
  {
    heading: "Topics",
    categories: [
      { label: "Cost guides", slug: "cost-guides" },
      { label: "Grants", slug: "grants" },
    ],
  },
  {
    heading: "States",
    categories: [
      { label: "Missouri", slug: "missouri" },
      { label: "Illinois", slug: "illinois" },
    ],
  },
];

export const getCategoryGroupsWithCounts = () => {
  return blogCategoryGroups.map((group) => ({
    ...group,
    categories: group.categories.map((cat) => ({
      ...cat,
      count:
        cat.slug === "all"
          ? blogPosts.length
          : blogPosts.filter((post) => post.tags?.includes(cat.slug)).length,
    })),
  }));
};

export const featuredBlogPost = blogPosts.find((post) => post.featured);
export const nonFeaturedBlogPosts = blogPosts.filter((post) => !post.featured);
export const featuredBlogPosts = blogPosts.slice(0, 3);
