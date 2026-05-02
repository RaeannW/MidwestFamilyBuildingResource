import Container from "@/components/Container/Container";
import ValueCard from "@/components/ValueCard/ValueCard";
import { values } from "@/content/values";
import styles from "./ValuesSection.module.css";

const sectionContent = {
  eyebrow: "What we stand for",
  headline: "Our values.",
};

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrow">{sectionContent.eyebrow}</p>
          <h2 className={styles.headline}>{sectionContent.headline}</h2>
        </div>
        <div className={styles.grid}>
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </Container>
    </section>
  );
}
