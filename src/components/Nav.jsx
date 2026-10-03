import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About me" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
];

const SECTION_IDS = ["home", "about", "resume", "work", "contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12 6.6 0 12-5.4 12-12z" />
          </svg>
          Lun Lytayhok
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary navigation">
          <ul className={styles.links}>
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href} className={styles.linkItem}>
                  <a
                    href={href}
                    className={`${styles.link} ${isActive ? styles.active : ""}`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={styles.underline}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="#contact" className={`pill-btn pill-btn--gold ${styles.cta}`}>
          Get in touch!
        </a>

        {/* Hamburger */}
        <button
          className={styles.toggle}
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.bar}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={styles.bar}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.bar}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={styles.mobile}
            style={{ overflow: "hidden" }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              Get in touch!
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
