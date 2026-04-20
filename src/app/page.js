import styles from "./page.module.css";

import GrantProgressSection from "@/components/GrantProgressSection/GrantProgressSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PathsSection from "@/components/PathsSection/PathsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HeroSection />
        <GrantProgressSection />
        <PathsSection />
      </main>
    </div>
  );
}
