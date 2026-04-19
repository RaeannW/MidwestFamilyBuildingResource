import Container from "@/components/Container/Container";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Container>
          <div className={styles.space}>
            <p className={styles.eyebrow}>Resources for every path</p>
          </div>
          <div className={styles.space}>
            <h1 className={styles.homeHeading}>
              Family building, <br />
              without the <span className={styles.accent}>guesswork.</span>
            </h1>
          </div>
          <div className={styles.space}>
            <p>
              Honest cost guides, local provider directories, and direct
              micro-grants for Missouri and Illinois families.
            </p>
          </div>
          <div className={styles.buttonSpace}>
            <Button variant="primary" size="large">
              Explore resources
            </Button>
            <Button variant="outline" size="large">
              Support a family
            </Button>
          </div>
          <div className={styles.space}></div>
        </Container>
      </main>
    </div>
  );
}
