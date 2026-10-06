import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, profile } from "../data/profile";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the menu with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const linkClass =
    "rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-accent";

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav aria-label="Main navigation" className="container-page">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="truncate font-display text-lg font-semibold text-ink"
          >
            {profile.name}
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="rounded-md p-2 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              className="overflow-hidden md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <ul className="flex flex-col gap-1 pb-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`${linkClass} block py-3 text-base`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}