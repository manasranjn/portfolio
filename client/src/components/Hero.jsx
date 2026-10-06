import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import { profile } from "../data/portfolioData";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: '${profile.name}',` },
  { indent: 1, text: "stack: ['React', 'Node', 'Express', 'MongoDB']," },
  { indent: 1, text: "Language: ['JavaScript', 'Python', 'Java', 'C']," },
  { indent: 1, text: "focus: 'building reliable, fast web apps'," },
  { indent: 1, text: "available: true," },
  { indent: 0, text: "};" },
];

function useTypewriter(lines, speed = 22, lineDelay = 220) {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const full = lines[i].text;
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          setRendered((prev) => {
            const next = [...prev];
            next[i] = { ...lines[i], text: full.slice(0, c) };
            return next;
          });
          await new Promise((r) => setTimeout(r, speed));
        }
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { rendered, done };
}

function highlight(text) {
  const parts = [];
  const tokenRegex = /('.*?'|\btrue\b|\bfalse\b|\bconst\b)/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    const token = match[0];
    let cls = "text-teal";
    if (token === "const") cls = "text-amber";
    if (token === "true" || token === "false") cls = "text-amber";
    parts.push(
      <span key={key++} className={cls}>
        {token}
      </span>,
    );
    lastIndex = tokenRegex.lastIndex;
  }
  parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  return parts;
}

export default function Hero() {
  const { rendered, done } = useTypewriter(codeLines);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber/10 blur-3xl animate-floatSlow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl animate-floatSlow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">portfolio.init()</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mt-4 text-ink">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />I build with <span className="text-amber">M</span>
            <span className="text-teal">E</span>
            <span className="text-amber">R</span>
            <span className="text-teal">N</span>.
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-md">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-ink-faint font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            Currently based in {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-surface shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-base-line bg-base-panel">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 font-mono text-xs text-ink-faint">
              developer.js
            </span>
          </div>
          <div className="p-6 font-mono text-sm sm:text-[15px] leading-7 min-h-[240px]">
            {rendered.map((line, i) => (
              <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {highlight(line.text)}
                {!done && i === rendered.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-teal ml-0.5 align-middle animate-blink" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint font-mono text-xs focus-ring rounded"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        scroll
        <HiOutlineArrowDown />
      </motion.a>
    </section>
  );
}
