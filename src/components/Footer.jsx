import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const VIEWPORT = { once: true, amount: 0.3 };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
];

const SOCIALS = [
  {
    prefix: "EM",
    label: "lunlytayhok@gmail.com",
    href: "mailto:lunlytayhok@gmail.com",
  },
  { prefix: "TEL", label: "096 396 3542", href: "tel:0963963542" },
  { prefix: "LOC", label: "Preak Pnov, Phnom Penh", href: "#about" },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="wrap">
        <motion.h2
          className={styles.heading}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          Let's build something
        </motion.h2>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.a
            className={`pill-btn pill-btn--gold ${styles.cta}`}
            href="mailto:lunlytayhok@gmail.com"
            whileHover={{
              y: -2,
              boxShadow: "0 8px 20px -8px rgba(231,169,61,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Say hello — lunlytayhok@gmail.com
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.ul
          className={styles.socials}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {SOCIALS.map(({ prefix, label, href }) => (
            <motion.li key={prefix} variants={itemVariants}>
              <span>{prefix}</span>
              <a href={href}>{label}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer nav */}
        <motion.nav
          className={styles.footerNav}
          aria-label="Footer navigation"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className={styles.navLink}
              variants={itemVariants}
            >
              {label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.p
          className={styles.copyright}
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          © 2026 Lun Lytayhok. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
