import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const tabs = [
  { id: "home", label: "home.jsx" },
  { id: "about", label: "about.md" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects.js" },
  { id: "contact", label: "contact.js" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-base-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <button
          onClick={() => goTo("home")}
          className="font-display font-semibold text-ink flex items-center gap-2 focus-ring rounded"
          aria-label="Go to home section"
        >
          <span className="text-amber">{"<"}</span>
          Manas<span className="text-amber">.</span>dev
          <span className="text-amber">{"/>"}</span>
        </button>

        <div className="hidden md:flex items-center bg-base-panel border border-base-line rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className={`relative px-4 py-2 font-mono text-sm transition-colors focus-ring ${
                active === tab.id ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-2 right-2 -bottom-px h-0.5 bg-amber"
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo("contact")}
          className="hidden md:inline-flex btn-secondary !py-2 !px-4 text-sm"
        >
          Say hello
        </button>

        <button
          className="md:hidden text-ink text-2xl focus-ring rounded"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-base-panel border-b border-base-line"
          >
            <div className="flex flex-col p-4 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => goTo(tab.id)}
                  className={`text-left font-mono text-sm px-3 py-2.5 rounded-md focus-ring ${
                    active === tab.id
                      ? "bg-base-card text-amber"
                      : "text-ink-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
