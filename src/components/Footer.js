const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal border-t border-cream/10 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-cream">Rosa&apos;s Kitchen</p>
            <p className="text-cream/30 text-xs mt-1 font-body">Est. 2004 · Pawtucket, RI</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/30 hover:text-cream text-md uppercase tracking-widest transition-colors duration-200 font-body"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-cream/20 text-xs font-body">© 2025 Rosa&apos;s Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
