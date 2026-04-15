"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeAll = () => {
    setResourcesOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Link href="/" onClick={closeAll}>
          <Image
            src="/images/horizontalLogoDark.svg"
            alt="Midwest Family Building Resource"
            fill
            style={{ objectFit: "contain" }}
            priority
          ></Image>
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/about" onClick={closeAll}>
            About
          </Link>
        </li>
        <li className={styles.dropdownParent}>
          <button
            className={styles.dropdownTrigger}
            onClick={() => setResourcesOpen(!resourcesOpen)}
            aria-expanded={resourcesOpen}
            aria-haspopup="true"
          >
            <Link href="/resources" onClick={closeAll}>
              Resources
            </Link>
            <span className={styles.arrow}>{resourcesOpen ? "▲" : "▼"}</span>
          </button>

          {resourcesOpen && (
            <ul className={styles.dropdown}>
              <li>
                <Link href="/resources/general" onClick={closeAll}>
                  General
                </Link>
              </li>
              <li>
                <Link href="/resources/missouri" onClick={closeAll}>
                  Missouri
                </Link>
              </li>
              <li>
                <Link href="/resources/illinois" onClick={closeAll}>
                  Illinois
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/blog" onClick={closeAll}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/grants" onClick={closeAll}>
            Grants
          </Link>
        </li>

        <li>
          <Link href="/donate" onClick={closeAll}>
            Donate
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeAll}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
