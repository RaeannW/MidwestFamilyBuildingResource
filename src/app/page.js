import BlogPreviewSection from "@/components/BlogPreviewSection/BlogPreviewSection";

import GrantProgressSection from "@/components/GrantProgressSection/GrantProgressSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PathsSection from "@/components/PathsSection/PathsSection";
import SplitSection from "@/components/SplitSection/SplitSection";

const heroContent = {
  eyebrow: "Resources for every path",
  headlineLine1: "Family building,",
  headlineLine2: "without the",
  headlineAccent: "guesswork.",
  subtext:
    "Honest cost guides, local provider directories, and direct micro-grants for Missouri and Illinois families.",
  primaryCta: {
    label: "Explore resources",
    href: "/resources",
  },
  secondaryCta: {
    label: "Support a family",
    href: "/donate",
  },
  image: {
    src: "/images/heros/handsFeetFamily.jpg",
    alt: "Family at home",
  },
  background: "cream",
  align: "center",
};

const stateResourcesContent = {
  eyebrow: "State-specific guides",
  headline: "Find resources in your state.",
  text: "IVF clinics, adoption agencies, foster contacts, and cost calculators organized by state. Illinois residents also have a fertility insurance mandate we break down clearly.",
  image: "/images/states/stl.jpg",
  imageAlt: "Missouri and Illinois resources",
  imagePosition: "left",
  background: "cream",
  buttons: [
    { label: "Missouri", href: "/resources/missouri", variant: "primary" },
    { label: "Illinois", href: "/resources/illinois", variant: "secondary" },
  ],
};

export default function Home() {
  return (
    <main>
      <HeroSection {...heroContent} />
      <GrantProgressSection />
      <PathsSection />
      <SplitSection {...stateResourcesContent} />
      <BlogPreviewSection />
    </main>
  );
}
