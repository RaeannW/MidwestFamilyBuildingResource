import Image from "next/image";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./SplitSection.module.css";

export default function SplitSection({
  eyebrow,
  headline,
  text,
  image,
  imageAlt,
  imagePosition = "right",
  buttons = [],
  background = "cream",
}) {
  const sectionClass = `${styles.section} ${styles[background]}`;
  const gridClass = `${styles.grid} ${imagePosition === "left" ? styles.imageLeft : styles.imageRight}`;

  return (
    <section className={sectionClass}>
      <Container>
        <div className={gridClass}>
          <div className={styles.imageWrap}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.content}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className={styles.headline}>{headline}</h2>
            <p className={styles.text}>{text}</p>
            {buttons.length > 0 && (
              <div className={styles.buttons}>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "primary"}
                    size={button.size || "large"}
                    href={button.href}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
