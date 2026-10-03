import { motion } from "framer-motion";

/**
 * SectionDivider
 * Renders the circular "Scroll down" badge floating directly on the seam
 * between two sections (50% in the top section, 50% in the bottom section).
 */
export default function SectionDivider({
  label = (
    <>
      Scroll
      <br />
      down
    </>
  ),
  href = "#about",
}) {
  const Badge = href ? motion.a : motion.div;

  return (
    <div className="relative z-20 h-0 pointer-events-none">
      <div className="absolute right-[clamp(1.25rem,4vw,3rem)] top-0 -translate-y-1/2 pointer-events-auto">
        <Badge
          {...(href ? { href } : {})}
          className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] flex items-center justify-center rounded-full bg-gold text-ink font-semibold text-[0.78rem] sm:text-[0.85rem] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] cursor-pointer select-none text-center transition-shadow hover:shadow-[0_16px_36px_-6px_rgba(231,169,61,0.5)]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label={href ? "Scroll down" : undefined}
        >
          <span className="leading-[1.25] text-center px-2">{label}</span>
        </Badge>
      </div>
    </div>
  );
}
