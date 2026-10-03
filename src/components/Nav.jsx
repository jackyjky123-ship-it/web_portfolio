import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#about", label: "About me" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
];

const SECTION_IDS = ["home", "about", "resume", "work", "contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-green-deep border-b border-line-dark h-[76px]">
      <div className="max-w-[1180px] mx-auto h-[76px] px-[clamp(1.25rem,4vw,3rem)] flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif font-bold text-[1.15rem] text-cream flex items-center gap-2 whitespace-nowrap"
        >
          <svg
            className="text-gold"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12 6.6 0 12-5.4 12-12z" />
          </svg>
          Lun Lytayhok
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary navigation">
          <ul className="hidden min-[861px]:flex gap-8 list-none p-0 m-0">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href} className="relative">
                  <a
                    href={href}
                    className={`text-[0.95rem] font-medium py-[0.4rem] block relative transition-colors duration-150 ${
                      isActive
                        ? "text-cream"
                        : "text-cream-soft hover:text-cream"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-gold rounded-[1px]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden min-[861px]:inline-flex pill-btn pill-btn--gold shrink-0 transition-transform duration-150 hover:-translate-y-[2px]"
        >
          Get in touch!
        </a>

        {/* Hamburger */}
        <button
          className="flex min-[861px]:hidden flex-col justify-center gap-[5px] w-[34px] h-[34px] bg-transparent border-none cursor-pointer p-0"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-cream rounded-[2px] origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-cream rounded-[2px] origin-center"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-cream rounded-[2px] origin-center"
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-green-deep border-b border-line-dark flex flex-col px-[clamp(1.25rem,4vw,3rem)] pt-2 pb-5 absolute top-[76px] left-0 right-0 z-[99] overflow-hidden"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-cream-soft py-3 border-b border-line-dark font-medium block hover:text-cream"
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-cream-soft py-3 font-medium block hover:text-cream"
              onClick={closeMenu}
            >
              Get in touch!
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
