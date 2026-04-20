"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "@/components/Button/Button";
import Container from "../Container/Container";

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeAll = () => {
    setResourcesOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <div className={styles.logoWrapper}>
            <Link href="/" onClick={closeAll}>
              <Image
                src="/images/logos/horizontalLogoDark.svg"
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
              <div className={styles.dropdownTriggerWrap}>
                <Link href="/resources" onClick={closeAll}>
                  Resources
                </Link>
                <button
                  className={styles.dropdownToggle}
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle resources menu"
                >
                  <span className={styles.arrow}>
                    {resourcesOpen ? "▲" : "▼"}
                  </span>
                </button>
              </div>

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
              <Link href="/contact" onClick={closeAll}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/donate" onClick={closeAll}>
                <Button variant="primary" size="nav">
                  Donate
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
