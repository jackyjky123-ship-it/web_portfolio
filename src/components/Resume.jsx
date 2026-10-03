import { motion } from "framer-motion";
import styles from "./Resume.module.css";

const VIEWPORT = { once: true, amount: 0.2 };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 20 },
  },
};

const badgeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const EDUCATION = [
  {
    years: "2024 – 2026",
    role: "Bachelor of Science in Computer Science (Sophomore)",
    org: "Royal University of Phnom Penh (RUPP)",
  },
];

const EXPERIENCE = [
  {
    years: "2025 – 2026",
    role: "Graphic Designer & Cashier",
    org: "WoW Mart",
    desc: "Managed visual content creation and point-of-sale operations in a fast-paced retail environment.",
  },
];

const BADGES = [
  { label: "REACT", cls: styles.badgeReact },
  { label: "PHP", cls: styles.badgePhp },
  { label: "TW", cls: styles.badgeTailwind },
  { label: "JS", cls: styles.badgeJs },
  { label: "SQL", cls: styles.badgeSql },
  { label: "GIT", cls: styles.badgeGit },
  { label: "HTML", cls: styles.badgeHtml },
  { label: "CSS", cls: styles.badgeCss },
];

const PILLS = [
  "React.js & Laravel Full-Stack",
  "RESTful APIs & MySQL",
  "Tailwind CSS UI/UX",
  "Creative Suite (Premiere, DaVinci, CapCut)",
  "AI Research & Prompt Engineering",
  "Technical Documentation",
  "Khmer (Native) & English (Technical)",
  "Problem-Solving & Teamwork",
];

function Timeline({ items, dark }) {
  return (
    <motion.ul
      className={styles.timeline}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          className={styles.timelineItem}
          variants={itemVariants}
        >
          <span className={`${styles.dot} ${dark ? styles.dotDark : ""}`} />
          <div>
            <strong className={`${styles.year} ${dark ? styles.yearDark : ""}`}>
              {item.years}
            </strong>
            <p className={`${styles.role} ${dark ? styles.roleDark : ""}`}>
              {item.role}
              <span className={`${styles.org} ${dark ? styles.orgDark : ""}`}>
                {item.org}
                {item.desc ? ` — ${item.desc}` : ""}
              </span>
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.bgType} aria-hidden="true">
        RESUME
        <br />
        RESUME
      </div>

      <div className={`wrap ${styles.grid}`}>
        {/* Left column */}
        <div>
          <motion.h2
            className={`${styles.sectionTitle} ${styles.gold}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Education
          </motion.h2>

          <Timeline items={EDUCATION} />

          {/* Experience card */}
          <motion.div
            className={styles.expCard}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h2 className={`${styles.sectionTitle} ${styles.expTitle}`}>
              Experience
            </h2>
            <Timeline items={EXPERIENCE} dark />
          </motion.div>
        </div>

        {/* Right column */}
        <div>
          <motion.h2
            className={`${styles.sectionTitle} ${styles.gold}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Technical skills
          </motion.h2>

          {/* Languages badges */}
          <div className={styles.skillsBlock}>
            <h3 className={styles.skillsLabel}>Languages</h3>
            <motion.div
              className={styles.badgeRow}
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {BADGES.map(({ label, cls }) => (
                <motion.span
                  key={label}
                  className={`${styles.badge} ${cls}`}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Frameworks */}
          <motion.div
            className={styles.skillsBlock}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h3 className={styles.skillsLabel}>Frameworks &amp; tools</h3>
            <div className={styles.toolList}>
              <p>
                <strong>Web Development:</strong> React.js, Laravel (PHP),
                Tailwind CSS, RESTful APIs, MySQL, HTML5, CSS3, JavaScript
                (ES6+)
              </p>
              <p>
                <strong>Workflow &amp; Tools:</strong> Git, GitHub, AI Research
                &amp; Prompt Engineering, Technical Documentation
              </p>
              <p>
                <strong>Creative Suite:</strong> Adobe Premiere Pro, DaVinci
                Resolve, CapCut
              </p>
            </div>
          </motion.div>

          {/* Dark pills */}
          <motion.div
            className={styles.tagRow}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {PILLS.map((pill) => (
              <motion.span
                key={pill}
                className={styles.darkPill}
                variants={itemVariants}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
