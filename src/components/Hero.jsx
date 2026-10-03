import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const CODE_LINES = [
  <>
    <span className={styles.kw}>const</span>{" "}
    <span className={styles.var}>developer</span> = {"{"}
  </>,
  <>
    {"  "}
    <span className={styles.key}>name</span>:{" "}
    <span className={styles.str}>"Lun Lytayhok"</span>,
  </>,
  <>
    {"  "}
    <span className={styles.key}>role</span>:{" "}
    <span className={styles.str}>"Junior Web Developer"</span>,
  </>,
  <>
    {"  "}
    <span className={styles.key}>based</span>:{" "}
    <span className={styles.str}>"Phnom Penh, Cambodia"</span>,
  </>,
  <>
    {"  "}
    <span className={styles.key}>stack</span>: [
    <span className={styles.str}>"React.js"</span>,{" "}
    <span className={styles.str}>"Laravel"</span>,{" "}
    <span className={styles.str}>"Tailwind CSS"</span>,{" "}
    <span className={styles.str}>"MySQL"</span>],
  </>,
  <>
    {"  "}
    <span className={styles.key}>status</span>:{" "}
    <span className={styles.str}>"open to work"</span>
  </>,
  <>
    {"};"}
    <span className={styles.cursor} />
  </>,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.4,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const blurbVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.1, ease: "easeOut" },
  },
};

const sparkleVariants = {
  animate: {
    rotate: [0, 20, -10, 0],
    scale: [1, 1.15, 1],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* decorative bg type */}
      <div className={styles.bgType} aria-hidden="true">
        BUILD
        <br />
        BUILD
      </div>

      {/* sparkles */}
      <motion.svg
        className={`${styles.sparkle} ${styles.sparkle1}`}
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        variants={sparkleVariants}
        animate="animate"
      >
        <path d="M12 0c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12 6.6 0 12-5.4 12-12z" />
      </motion.svg>

      <motion.svg
        className={`${styles.sparkle} ${styles.sparkle2}`}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        variants={sparkleVariants}
        animate="animate"
        style={{ animationDelay: "0.8s" }}
      >
        <path d="M12 0c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12 6.6 0 12-5.4 12-12z" />
      </motion.svg>

      <div className="wrap">
        {/* Title */}
        <motion.h1
          className={styles.title}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Portfolio
        </motion.h1>

        {/* Grid: code window + socials */}
        <div className={styles.grid}>
          {/* Code window */}
          <motion.div
            className={styles.codeWindow}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            <div className={styles.windowBar}>
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className={styles.windowTab}>hero.js</span>
            </div>
            <pre className={styles.windowBody}>
              <motion.code
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {CODE_LINES.map((line, i) => (
                  <motion.span
                    key={i}
                    className={styles.codeLine}
                    variants={lineVariants}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.code>
            </pre>
          </motion.div>

          {/* Socials */}
          <motion.ul
            className={styles.socials}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <li>
              <span>MAIL</span>
              <a href="mailto:lunlytayhok@gmail.com">lunlytayhok@gmail.com</a>
            </li>
            <li>
              <span>TEL</span>
              <a href="tel:0963963542">096 396 3542</a>
            </li>
            <li>
              <span>LOC</span>
              <a href="#about">Phnom Penh, KH</a>
            </li>
          </motion.ul>
        </div>

        {/* Blurb */}
        <motion.p
          className={styles.blurb}
          variants={blurbVariants}
          initial="hidden"
          animate="visible"
        >
          Aspiring Full-Stack Developer currently studying Computer Science at
          RUPP. I build responsive, user-centric web applications with React.js,
          Laravel, and MySQL, supported by a creative background in design and
          video production.
        </motion.p>
      </div>

      {/* Scroll badge */}
      <motion.a
        href="#about"
        className={styles.scrollBadge}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        Scroll
        <br />
        down
      </motion.a>
    </section>
  );
}
