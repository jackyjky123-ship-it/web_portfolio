import { motion } from "framer-motion";
import Experience from "./Experience";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-cream py-28">
      {/* Background watermark */}
      <div
        className="absolute top-[2%] -right-[3%] font-serif font-black text-[clamp(4rem,13vw,9rem)] text-transparent [-webkit-text-stroke:1.5px_var(--line-light)] leading-[0.95] pointer-events-none z-0 select-none"
        aria-hidden="true"
      >
        WORK
      </div>

      <div className="wrap relative z-[1]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[0.8rem] font-bold tracking-widest uppercase font-mono text-terracotta block mb-2">
              Portfolio Showcase
            </span>
            <motion.h2
              className="font-serif font-bold text-[clamp(2rem,4.5vw,3rem)]"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              Selected Work
            </motion.h2>
          </div>
        </div>

        {/* Experience: filter tabs + project grid + modals */}
        <Experience />
      </div>
    </section>
  );
}
