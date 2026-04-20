import Link from "next/link";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import GrantProgressCard from "@/components/GrantProgressCard/GrantProgressCard";
import { currentGrantCycle } from "@/content/grantData";
import styles from "./GrantProgressSection.module.css";

const grantSectionContent = {
  eyebrow: "Pilot round is open now",
  headlineLine1: "Help us fund our",
  headlineLine2: "first two families.",
  text: "100% of grant donations go directly to licensed providers on behalf of recipient families.",
  cta: {
    label: "Donate to grant fund",
    href: "/donate",
  },
};

export default function GrantProgressSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className="eyebrow">{grantSectionContent.eyebrow}</p>
            <h2 className={styles.headline}>
              {grantSectionContent.headlineLine1}
              <br />
              {grantSectionContent.headlineLine2}
            </h2>
            <p className={styles.text}>{grantSectionContent.text}</p>
            <Link href={grantSectionContent.cta.href}>
              <Button variant="primary" size="large">
                {grantSectionContent.cta.label}
              </Button>
            </Link>
          </div>
          <div className={styles.cardWrap}>
            <GrantProgressCard {...currentGrantCycle} />
          </div>
        </div>
      </Container>
    </section>
  );
}
