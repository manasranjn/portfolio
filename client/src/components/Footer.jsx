import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-base-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-ink-faint font-mono text-xs">
        <p>© {new Date().getFullYear()} {profile.name}. Built with the MERN stack.</p>
        <p>Designed & developed with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
