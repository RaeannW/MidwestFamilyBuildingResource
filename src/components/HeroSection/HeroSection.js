import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./HeroSection.module.css";

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
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1 className={styles.headline}>
          {heroContent.headlineLine1}
          <br />
          {heroContent.headlineLine2}
          <span className={styles.accent}>
            {` ${heroContent.headlineAccent}`}
          </span>
        </h1>
        <p className={styles.subtext}>{heroContent.subtext}</p>
        <div className={styles.buttons}>
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
        <div className={`${styles.imageContainer} image-overlay`}>
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Container>
    </section>
  );
}
