export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-end bg-charcoal overflow-hidden"
      style={{ backgroundImage: "url('/taco.jpg')", backgroundSize: "cover", backgroundPosition: "center",backgroundColor: "rgba(0,0,0,0.4)", backgroundBlendMode: "multiply" }}
    >
      {/* Gradient: strong at bottom for text, fades to subtle at top */}
      <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/55 to-charcoal/20" />

      {/* Editorial bottom-left layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-28">
        <p className="text-gold text-lg uppercase tracking-[0.3em] mb-5 font-body">
          Est. 2004 · Pawtucket, RI
        </p>
        <h1 className="font-display text-8xl sm:text-9xl lg:text-[10rem] font-bold text-cream leading-none mb-6">
          Rosa&apos;s<br />Kitchen
        </h1>
        <p className="text-cream/60 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-body">
          Authentic Mexican tacos, crafted with tradition and fresh ingredients since 2004.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-red text-cream text-xs uppercase tracking-widest font-semibold hover:bg-red/80 transition-colors duration-200 font-body"
          >
            View Menu
          </a>
          <a
            href="tel:4015551234"
            className="inline-flex items-center justify-center px-8 py-4 border border-cream/40 text-cream text-xs uppercase tracking-widest font-semibold hover:border-cream hover:bg-cream/10 transition-all duration-200 font-body"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Vertical decorative label — large screens only */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-cream/25">
        <div className="w-px h-20 bg-current" />
        <span
          className="text-[10px] uppercase tracking-[0.4em] font-body"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Fresh · Authentic · Homemade
        </span>
        <div className="w-px h-20 bg-current" />
      </div>
    </section>
  );
}
