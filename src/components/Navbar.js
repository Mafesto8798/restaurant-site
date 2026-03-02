import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lg" : "bg-charcoal/0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="font-display text-xl md:text-2xl font-bold text-cream tracking-wide">
            Rosa&apos;s Kitchen
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream hover:text-gold text-xs uppercase tracking-[0.15em] transition-colors duration-200 font-body"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#menu"
              className="px-5 py-2 text-xs uppercase tracking-[0.15em] font-semibold bg-red text-cream hover:bg-red/80 transition-colors duration-200"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 flex flex-col justify-center gap-1.5 w-8 h-8"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-cream transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-cream transition-all duration-300 ${
                open ? "opacity-0 w-6" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center transition-opacity duration-400 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl font-bold text-cream hover:text-gold transition-colors duration-200"
              style={{
                transform: open ? "translateY(0)" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transition: `transform 0.4s ease ${i * 70}ms, opacity 0.4s ease ${i * 70}ms, color 0.2s ease`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 bg-red text-cream text-xs uppercase tracking-widest font-semibold hover:bg-red/80 transition-colors font-body"
            style={{
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
              transition: `transform 0.4s ease ${navLinks.length * 70}ms, opacity 0.4s ease ${navLinks.length * 70}ms`,
            }}
          >
            Order Now
          </a>
        </nav>
      </div>
    </>
  );
}
