import Image from "next/image";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  eyebrow,
  headlineLine1,
  headlineLine2,
  headlineAccent,
  subtext,
  primaryCta,
  secondaryCta,
  image,
  background = "cream",
  align = "left",
}) {
  const sectionClass = `${styles.hero} ${styles[background]} ${styles[align]}`;

  return (
    <section className={sectionClass}>
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={styles.headline}>
          {headlineLine1}
          {headlineLine2 && <br />}
          {headlineLine2}
          {headlineAccent && (
            <span className={styles.accent}>{` ${headlineAccent}`}</span>
          )}
        </h1>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
        {(primaryCta || secondaryCta) && (
          <div className={styles.buttons}>
            {primaryCta && (
              <Button variant="primary" size="large" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button variant="secondary" size="large" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
        {image && (
          <div className={`${styles.imageContainer} image-overlay`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}
      </Container>
    </section>
  );
}
