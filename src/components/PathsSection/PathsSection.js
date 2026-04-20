import React from "react";
import Container from "../Container/Container";
import PathCard from "../PathCard/PathCard";
import { paths } from "@/content/paths";
import styles from "./PathsSection.module.css";

const sectionContent = {
  eyebrow: "All paths welcome",
  headline: "Where do you want to start?",
};

export default function PathsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrow">{sectionContent.eyebrow}</p>
          <h2 className={styles.headline}>{sectionContent.headline}</h2>
        </div>
        <div className={styles.grid}>
          {paths.map((path) => (
            <PathCard key={path.slug} {...path} />
          ))}
        </div>
      </Container>
    </section>
  );
}
