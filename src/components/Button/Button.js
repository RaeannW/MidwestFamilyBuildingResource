import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  type = "button",
  disabled = false,
}) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      className={classNames}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
