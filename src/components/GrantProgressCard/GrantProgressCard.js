import styles from "./GrantProgressCard.module.css";

export default function GrantProgressCard({
  raised,
  goal,
  families,
  perGrant,
  awardDate,
}) {
  const percent = Math.round((raised / goal) * 100);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.label}>Current Progress</span>
        <span className={styles.percent}>{percent}% of goal</span>
      </div>
      <div className={styles.amount}>
        <span className={styles.raised}>${raised.toLocaleString()}</span>
        <span className={styles.goal}>/ ${goal.toLocaleString()} goal</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${percent}%` }} />
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{families}</div>
          <div className={styles.statLabel}>Families</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>${perGrant.toLocaleString()}</div>
          <div className={styles.statLabel}>Per grant</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{awardDate}</div>
          <div className={styles.statLabel}>Award date</div>
        </div>
      </div>
    </div>
  );
}
