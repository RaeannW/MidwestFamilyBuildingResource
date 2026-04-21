import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classNames} onClick={onClick}>
        {children}
      </Link>
    );
  }

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
