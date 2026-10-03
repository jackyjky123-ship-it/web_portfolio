import { motion } from "framer-motion";

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
    <section id="about" className="bg-cream py-[7rem] pb-24">
      <div className="wrap grid grid-cols-1 min-[901px]:grid-cols-2 gap-14 min-[901px]:gap-16 items-start">
        {/* Left: text */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h2 className="font-serif font-black text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.05]">
            Hello,
            <br />
            I'm Lytayhok!
          </h2>
          <p className="mt-7 max-w-[52ch] text-[1.05rem] leading-[1.75] text-[#3a3e33]">
            I'm an aspiring Full-Stack Developer currently pursuing a Computer
            Science degree at the Royal University of Phnom Penh (RUPP). I
            combine strong technical proficiency in React.js, Laravel, and MySQL
            with creative expertise in graphic design and video production,
            adept at leveraging modern AI tools to build responsive,
            user-centric web applications.
          </p>
          {/* Email button — inline-flex keeps it self-contained, no overflow */}
          <motion.a
            className="mt-8 inline-flex pill-btn pill-btn--terracotta"
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

        {/* Right: visual panel — stacked flow, no absolute-positioned overlaps */}
        <motion.div
          className="flex flex-col gap-5"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Top badge */}
          <motion.span
            className="self-start bg-gold text-ink font-semibold text-[0.85rem] px-[1.2rem] py-[0.6rem] rounded-full shadow-[0_12px_24px_-10px_rgba(0,0,0,0.3)] whitespace-nowrap z-[2]"
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            CS Sophomore @ RUPP
          </motion.span>

          {/* Terminal card inside a green-bg wrapper panel */}
          <div className="relative rounded-2xl overflow-hidden p-4 bg-green">
            <div className="bg-green-deep rounded-[14px] border border-line-dark overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 px-[0.9rem] py-[0.7rem] border-b border-line-dark">
                <span className="dot dot--r" />
                <span className="dot dot--y" />
                <span className="dot dot--g" />
                <span className="ml-2 font-mono text-[0.75rem] text-cream-soft opacity-70">
                  whoami.sh
                </span>
              </div>
              {/* overflow-x-auto prevents horizontal overflow on 375px */}
              <pre className="m-0 p-6 font-mono text-[0.88rem] leading-[1.85] text-cream-soft whitespace-pre-wrap overflow-x-auto">
                <span className="text-gold">$</span> whoami{"\n"}
                <span className="text-mint">
                  lun-lytayhok — junior web developer
                </span>
                {"\n\n"}
                <span className="text-gold">$</span> cat status.txt{"\n"}
                <span className="text-cream-soft opacity-75">
                  open to web developer roles{"\n"}based in Phnom Penh, Cambodia
                </span>
              </pre>
            </div>
          </div>

          {/* Open-to-work badge — right aligned */}
          <motion.span
            className="self-end bg-gold text-ink font-semibold text-[0.85rem] px-[1.2rem] py-[0.6rem] rounded-full shadow-[0_12px_24px_-10px_rgba(0,0,0,0.3)] whitespace-nowrap"
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Open to web developer roles
          </motion.span>

          {/* Contact card — flows naturally below, zero overlap with terminal */}
          <motion.div
            className="bg-ink text-cream rounded-[14px] p-[1.5rem_1.6rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h3 className="text-cream font-serif text-[1.4rem] mb-[0.9rem]">
              Contact
            </h3>
            <p className="flex items-center gap-[0.6rem] text-[0.9rem] text-cream-soft py-[0.35rem]">
              <svg
                className="text-gold shrink-0"
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
            <p className="flex items-center gap-[0.6rem] text-[0.9rem] text-cream-soft py-[0.35rem]">
              <svg
                className="text-gold shrink-0"
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
            <p className="flex items-center gap-[0.6rem] text-[0.9rem] text-cream-soft py-[0.35rem]">
              <svg
                className="text-gold shrink-0"
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
