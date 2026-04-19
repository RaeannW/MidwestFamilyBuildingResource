import Container from "@/components/Container/Container";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import GrantProgressSection from "@/components/GrantProgressSection/GrantProgressSection";

const heroContent = {
  eyebrow: "RESOURCES FOR EVERY PATH",
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
    src: "/images/handsFeetFamily.jpg",
    alt: "Family at home",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Container>
          <div className={styles.space}>
            <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
          </div>
          <div className={styles.space}>
            <h1 className={styles.homeHeading}>
              {heroContent.headlineLine1}
              <br />
              {heroContent.headlineLine2}
              <span className={styles.accent}>
                {` ${heroContent.headlineAccent}`}
              </span>
            </h1>
          </div>
          <div className={styles.space}>
            <p className={styles.text}>{heroContent.subtext}</p>
          </div>
          <div className={styles.buttonSpace}>
            <Link href={heroContent.primaryCta.href}>
              <Button variant="primary" size="large">
                {heroContent.primaryCta.label}
              </Button>
            </Link>
            <Link href={heroContent.secondaryCta.href}>
              <Button variant="outline" size="large">
                {heroContent.secondaryCta.label}
              </Button>
            </Link>
          </div>
          <div className={`${styles.space} ${styles.imageContainer}`}>
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </Container>
        <GrantProgressSection />
      </main>
    </div>
  );
}
