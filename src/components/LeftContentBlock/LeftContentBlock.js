import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./LeftContentBlock.module.css";

export default function LeftContentBlock({
  eyebrow,
  headline,
  paragraphs = [],
  buttons = [],
  background = "cream",
}) {
  const sectionClass = `${styles.section} ${styles[background]}`;

  return (
    <section className={sectionClass}>
      <Container>
        <div className={styles.content}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {headline && <h2 className={styles.headline}>{headline}</h2>}
          {paragraphs.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          {buttons.length > 0 && (
            <div className={styles.buttons}>
              {buttons.map((button, i) => (
                <Button
                  key={i}
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
      </Container>
    </section>
  );
}
