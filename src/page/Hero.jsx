import { motion } from "framer-motion";

const CODE_LINES = [
  <>
    <span className="text-terracotta">const</span>{" "}
    <span className="text-cream">developer</span> = {"{"}
  </>,
  <>
    {"  "}
    <span className="text-gold">name</span>:{" "}
    <span className="text-mint">"Lun Lytayhok"</span>,
  </>,
  <>
    {"  "}
    <span className="text-gold">role</span>:{" "}
    <span className="text-mint">"Junior Web Developer"</span>,
  </>,
  <>
    {"  "}
    <span className="text-gold">based</span>:{" "}
    <span className="text-mint">"Phnom Penh, Cambodia"</span>,
  </>,
  <>
    {"  "}
    <span className="text-gold">stack</span>: [
    <span className="text-mint">"React.js"</span>,{" "}
    <span className="text-mint">"Laravel"</span>,{" "}
    <span className="text-mint">"MySQL"</span>],
  </>,
  <>
    {"  "}
    <span className="text-gold">status</span>:{" "}
    <span className="text-mint">"open to work"</span>
  </>,
  <>
    {"};"}
    <span className="inline-block w-[2px] h-[1em] bg-cream align-text-bottom ml-[2px] animate-pulse" />
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
    <section
      id="home"
      className="relative overflow-hidden bg-green pt-[calc(76px+3.5rem)] pb-24"
    >
      {/* Sparkles */}
      <motion.svg
        className="absolute text-gold z-[1] pointer-events-none top-[18%] left-[5%] hidden sm:block"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        variants={sparkleVariants}
        animate="animate"
      >
        <path d="M12 0c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12 6.6 0 12-5.4 12-12z" />
      </motion.svg>

      <motion.svg
        className="absolute text-gold z-[1] pointer-events-none top-[32%] left-[10%] hidden sm:block"
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

      <div className="wrap relative z-[1]">
        {/* Headline + decorative outline stack */}
        <div className="relative">
          {/* PORTFOLIO headline */}
          <motion.h1
            className="text-cream font-serif font-black text-[clamp(5rem,15vw,11rem)] tracking-[-0.02em] uppercase will-change-[clip-path,opacity] leading-[0.88] text-center relative z-10"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Portfolio
          </motion.h1>

          {/* Decorative bg outline text — stacked vertically on the right, clipped inside section */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none flex flex-col items-center gap-[0.2rem] mt-[0.2rem]"
            aria-hidden="true"
          >
            {["PORTFOLIO", "PORTFOLIO", "PORTFOLIO"].map((t, i) => (
              <div
                key={i}
                className="font-serif font-black text-[clamp(5rem,15vw,11rem)] leading-[0.88] text-transparent [-webkit-text-stroke:1.5px_rgba(231,169,61,0.35)] whitespace-nowrap"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Grid: code window + socials column */}
        <div className="mt-10 grid grid-cols-1 min-[901px]:grid-cols-[1fr_220px] gap-8 items-start relative z-10">
          {/* Code window */}
          <motion.div
            className="bg-green-deep rounded-[14px] border border-line-dark overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line-dark">
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className="ml-3 font-mono text-[0.8rem] text-cream-soft opacity-70">
                hero.js
              </span>
            </div>
            <pre className="m-0 p-4 sm:p-6 font-mono text-[clamp(0.72rem,2.2vw,0.92rem)] leading-[1.9] text-cream-soft overflow-x-auto">
              <motion.code
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {CODE_LINES.map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    variants={lineVariants}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.code>
            </pre>
          </motion.div>

          {/* Socials / Contacts */}
          <motion.ul
            className="flex flex-col gap-0 list-none p-0 mt-6 min-[901px]:mt-28"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {[
              {
                label: "MAIL",
                value: "lunlytayhok@gmail.com",
                href: "mailto:lunlytayhok@gmail.com",
              },
              { label: "TEL", value: "096 396 3542", href: "tel:0963963542" },
              { label: "LOC", value: "Phnom Penh, KH", href: "#about" },
            ].map(({ label, value, href }) => (
              <li
                key={label}
                className="flex flex-col border-b border-line-dark pb-4 mb-4 last:border-0 last:mb-0 last:pb-0"
              >
                <span className="text-gold font-bold font-mono text-[0.78rem] tracking-wider mb-[0.2rem]">
                  {label}
                </span>
                <a
                  className="text-cream font-mono text-[0.87rem] leading-snug transition-opacity duration-150 hover:opacity-70 break-all"
                  href={href}
                >
                  {value}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Blurb card */}
        <motion.p
          className="max-w-[44ch] mt-10 p-[1.4rem_1.6rem] bg-green-deep text-cream-soft rounded-[10px] text-[0.97rem] leading-[1.75] border border-line-dark"
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
    </section>
  );
}
