import { motion } from "framer-motion";
import ScrollingBanner from "../components/ScrollingBanner";

import {
  SiReact,
  SiPhp,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";

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
  { label: "React",      Icon: SiReact,       bg: "bg-[#23272f]", text: "text-[#149eca]" },
  { label: "PHP",        Icon: SiPhp,         bg: "bg-[#4f5b93]", text: "text-white" },
  { label: "Tailwind",   Icon: SiTailwindcss,  bg: "bg-[#06b6d4]", text: "text-[#0f172a]" },
  { label: "JavaScript", Icon: SiJavascript,  bg: "bg-[#f0db4f]", text: "text-[#14160f]" },
  { label: "MySQL",      Icon: SiMysql,       bg: "bg-[#00758f]", text: "text-white" },
  { label: "Git",        Icon: SiGit,         bg: "bg-[#f05032]", text: "text-white" },
  { label: "HTML5",      Icon: SiHtml5,       bg: "bg-[#e44d26]", text: "text-white" },
  { label: "CSS3",       Icon: SiCss,         bg: "bg-[#2965f1]", text: "text-white" },
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
      className="list-none p-0 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex gap-4 pb-[1.9rem] relative [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[4px] [&:not(:last-child)]:after:top-[20px] [&:not(:last-child)]:after:-bottom-[6px] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:bg-line-dark"
          variants={itemVariants}
        >
          <span
            className={`w-[9px] h-[9px] mt-[7px] shrink-0 rotate-45 ${
              dark ? "bg-ink" : "bg-terracotta"
            }`}
          />
          <div>
            <strong
              className={`block font-sans text-[0.85rem] tracking-[0.02em] mb-[0.2rem] font-semibold ${
                dark ? "text-[#5a3f17]" : "text-gold"
              }`}
            >
              {item.years}
            </strong>
            <p
              className={`text-base font-semibold ${dark ? "text-ink" : "text-cream"}`}
            >
              {item.role}
              <span
                className={`block font-normal text-[0.9rem] mt-[0.15rem] ${
                  dark
                    ? "text-[#4a4632] opacity-85"
                    : "text-cream-soft opacity-75"
                }`}
              >
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
    <section
      id="resume"
      className="relative bg-green text-cream pt-28 pb-6 overflow-hidden"
    >

      <div className="wrap relative z-[1] grid grid-cols-1 min-[901px]:grid-cols-2 gap-14 min-[901px]:gap-20 items-start pb-16">
        {/* Left column: Education + Experience */}
        <div>
          <motion.h2
            className="font-serif font-bold text-[clamp(1.8rem,4vw,2.6rem)] mb-8 text-gold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Education
          </motion.h2>

          <Timeline items={EDUCATION} />

          {/* Experience card — pt-6 gives title room, preventing clip against top border */}
          <motion.div
            className="mt-12 bg-gold text-ink rounded-2xl px-8 pt-7 pb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h2 className="font-serif font-bold text-[1.6rem] mb-6 text-ink">
              Experience
            </h2>
            <Timeline items={EXPERIENCE} dark />
          </motion.div>
        </div>

        {/* Right column: Technical Skills */}
        <div>
          <motion.h2
            className="font-serif font-bold text-[clamp(1.8rem,4vw,2.6rem)] mb-8 text-gold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            Technical skills
          </motion.h2>

          {/* Language badges — flex-wrap with fixed badge size, no overflow on mobile */}
          <div className="mb-9">
            <h3 className="font-sans font-semibold text-base text-cream-soft mb-4">
              Languages &amp; Core
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {BADGES.map(({ label, Icon, bg, text }) => (
                <motion.span
                  key={label}
                  title={label}
                  className={`w-[60px] h-[60px] rounded-[14px] flex flex-col items-center justify-center gap-[3px] cursor-default shrink-0 ${bg} ${text}`}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.12, rotate: 4 }}
                >
                  <Icon size={24} />
                  <span className="text-[0.6rem] font-bold font-sans leading-none opacity-80 tracking-wide">
                    {label}
                  </span>
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Frameworks & tools */}
          <motion.div
            className="mb-9"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h3 className="font-sans font-semibold text-base text-cream-soft mb-4">
              Frameworks &amp; tools
            </h3>
            <div className="space-y-2 text-[0.95rem] text-cream-soft leading-[1.9]">
              <p>
                <strong className="text-cream font-semibold">
                  Web Development:
                </strong>{" "}
                React.js, Laravel (PHP), Tailwind CSS, RESTful APIs, MySQL,
                HTML5, CSS3, JavaScript (ES6+)
              </p>
              <p>
                <strong className="text-cream font-semibold">
                  Workflow &amp; Tools:
                </strong>{" "}
                Git, GitHub, AI Research &amp; Prompt Engineering, Technical
                Documentation
              </p>
              <p>
                <strong className="text-cream font-semibold">
                  Creative Suite:
                </strong>{" "}
                Adobe Premiere Pro, DaVinci Resolve, CapCut
              </p>
            </div>
          </motion.div>

          {/* Skill pills */}
          <motion.div
            className="flex flex-wrap gap-3 mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {PILLS.map((pill) => (
              <motion.span
                key={pill}
                className="bg-green-deep border border-line-dark text-cream-soft px-[1.1rem] py-[0.6rem] rounded-full text-[0.85rem] font-medium"
                variants={itemVariants}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scrolling "RESUME" marquee banner at bottom of section */}
      <ScrollingBanner
        text="RESUME"
        stroke="1.5px rgba(231,169,61,0.45)"
        bg="#26332b"
        duration="32s"
        py="py-4"
      />
    </section>
  );
}
