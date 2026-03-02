export default function Hours() {
  return (
    <section id="visit" className="w-full bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-gold text-lg uppercase tracking-[0.3em] mb-12 font-body">Find Us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Address */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-10 leading-tight">
              Visit Us
            </h2>
            <p className="text-charcoal/40 text-[10px] uppercase tracking-widest mb-3 font-body">Address</p>
            <p className="text-charcoal text-xl leading-relaxed font-body">
              123 Main Street<br />
              Pawtucket, RI 02860
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-gold text-xs uppercase tracking-wider hover:underline font-body"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-10">Hours</h3>
            <div className="border-t border-charcoal/10">
              <div className="flex justify-between items-center py-5 border-b border-charcoal/10">
                <p className="text-charcoal text-sm uppercase tracking-wider font-medium font-body">Mon - Sat</p>
                <p className="text-charcoal/50 font-body">11am - 9pm</p>
              </div>
              <div className="flex justify-between items-center py-5 border-b border-charcoal/10">
                <p className="text-charcoal text-sm uppercase tracking-wider font-medium font-body">Sunday</p>
                <p className="text-charcoal/50 font-body">12pm - 8pm</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-charcoal/40 text-sm font-body">Open today until 9pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
