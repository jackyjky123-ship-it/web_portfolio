import { motion } from "framer-motion";

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
    <footer
      id="contact"
      className="bg-green-deep text-cream py-24 pb-12 text-center"
    >
      <div className="wrap">
        <motion.h2
          className="font-serif font-bold text-[clamp(2.2rem,6vw,3.6rem)] max-w-[16ch] mx-auto mb-8"
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
            className="inline-flex pill-btn pill-btn--gold mb-12"
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
          className="flex justify-center gap-10 list-none p-0 mb-12 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {SOCIALS.map(({ prefix, label, href }) => (
            <motion.li
              key={prefix}
              className="font-mono text-[0.95rem] text-cream-soft flex gap-[0.4rem] items-center"
              variants={itemVariants}
            >
              <span className="text-gold font-bold">{prefix}</span>
              <a
                className="transition-opacity duration-150 hover:opacity-70"
                href={href}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Footer nav */}
        <motion.nav
          className="flex justify-center gap-8 mb-10 flex-wrap"
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
              className="text-[0.9rem] text-cream-soft hover:text-cream transition-colors duration-150"
              variants={itemVariants}
            >
              {label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.p
          className="text-[0.8rem] text-cream-soft opacity-60 m-0"
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
