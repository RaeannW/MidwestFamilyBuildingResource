import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import styles from "./CenteredContentBlock.module.css";

type ButtonItem = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "amber" | "dark";
  size?: "small" | "medium" | "large" | "nav";
};

type CenteredContentBlockProps = {
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  buttons?: ButtonItem[];
  background?: "cream" | "creamLight" | "white" | "charcoal";
};

export default function CenteredContentBlock({
  eyebrow,
  headline,
  paragraphs = [],
  buttons = [],
  background = "cream",
}: CenteredContentBlockProps) {
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
