import { motion } from "framer-motion";
import styles from "./About.module.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const VIEWPORT = { once: true, amount: 0.25 };

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`wrap ${styles.grid}`}>
        {/* Left: text */}
        <motion.div
          className={styles.text}
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h2 className={styles.title}>
            Hello,
            <br />
            I'm Lytayhok!
          </h2>
          <p className={styles.bio}>
            I'm an aspiring Full-Stack Developer currently pursuing a Computer
            Science degree at the Royal University of Phnom Penh (RUPP). I
            combine strong technical proficiency in React.js, Laravel, and MySQL
            with creative expertise in graphic design and video production,
            adept at leveraging modern AI tools to build responsive,
            user-centric web applications.
          </p>
          <motion.a
            className={`pill-btn pill-btn--terracotta ${styles.githubBtn}`}
            href="mailto:lunlytayhok@gmail.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            lunlytayhok@gmail.com
          </motion.a>
        </motion.div>

        {/* Right: visual panel */}
        <motion.div
          className={styles.visual}
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Green background panel */}
          <div className={styles.panel} aria-hidden="true" />

          {/* Top tag */}
          <motion.span
            className={`${styles.tagPill} ${styles.tagTop}`}
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            CS Sophomore @ RUPP
          </motion.span>

          {/* Terminal card */}
          <div className={styles.terminalCard}>
            <div className={styles.terminalBar}>
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className={styles.terminalTab}>whoami.sh</span>
            </div>
            <pre className={styles.terminalBody}>
              <span className={styles.prompt}>$</span> whoami{"\n"}
              <span className={styles.result}>
                lun-lytayhok — junior web developer
              </span>
              {"\n\n"}
              <span className={styles.prompt}>$</span> cat status.txt{"\n"}
              <span className={styles.muted}>
                open to web developer roles{"\n"}based in Phnom Penh, Cambodia
              </span>
            </pre>
          </div>

          {/* Bottom tag */}
          <motion.span
            className={`${styles.tagPill} ${styles.tagBottom}`}
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Open to web developer roles
          </motion.span>

          {/* Contact card */}
          <motion.div
            className={styles.contactCard}
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h3>Contact</h3>
            <p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Preak Pnov, Phnom Penh
            </p>
            <p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              lunlytayhok@gmail.com
            </p>
            <p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
              096 396 3542
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
