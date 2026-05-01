"use client";

import { getCategoryGroupsWithCounts } from "@/content/blog";
import styles from "./BlogCategorySidebar.module.css";

export default function BlogCategorySidebar({
  activeCategory = "all",
  onCategoryChange,
}) {
  const groups = getCategoryGroupsWithCounts();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        {groups.map((group) => (
          <div key={group.heading} className={styles.group}>
            <h3 className={styles.heading}>{group.heading}</h3>
            <ul className={styles.list}>
              {group.categories.map((cat) => (
                <li
                  key={cat.slug}
                  className={`${styles.item} ${
                    activeCategory === cat.slug ? styles.active : ""
                  }`}
                  onClick={() => onCategoryChange(cat.slug)}
                >
                  {cat.label} ({cat.count})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.newsletter}>
        <h3 className={styles.newsletterTitle}>Get updates</h3>
        <p className={styles.newsletterText}>
          New posts straight to your inbox.
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
