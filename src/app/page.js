import BlogPreviewSection from "@/components/BlogPreviewSection/BlogPreviewSection";
import styles from "./page.module.css";

import GrantProgressSection from "@/components/GrantProgressSection/GrantProgressSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PathsSection from "@/components/PathsSection/PathsSection";
import SplitSection from "@/components/SplitSection/SplitSection";

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
    <div className={styles.page}>
      <main>
        <HeroSection />
        <GrantProgressSection />
        <PathsSection />
        <SplitSection {...stateResourcesContent} />
        <BlogPreviewSection />
      </main>
    </div>
  );
}
