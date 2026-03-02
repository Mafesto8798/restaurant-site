const socialLinks = ["Facebook", "Instagram", "Twitter"];

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-charcoal py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-gold text-lg uppercase tracking-[0.3em] mb-4 font-body">Get In Touch</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact info */}
          <div>
            <h2 className="font-display text-3xl md:text-6xl font-bold text-cream leading-tight mb-12">
              Let&apos;s Talk
            </h2>
            <div className="space-y-10">
              <div>
                <p className="text-cream/30 text-[10px] uppercase tracking-widest mb-2 font-body">Phone</p>
                <a
                  href="tel:4015551234"
                  className="font-display text-4xl md:text-5xl  text-cream hover:text-gold transition-colors duration-200"
                >
                  (401) 555-1234
                </a>
              </div>
              <div>
                <p className="text-cream/30 text-[10px] uppercase tracking-widest mb-2 font-body">Email</p>
                <a
                  href="mailto:contact@rosaskitchen.com"
                  className="text-cream text-lg hover:text-gold transition-colors duration-200 font-body"
                >
                  contact@rosaskitchen.com
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="lg:pt-28">
            <p className="text-cream/30 text-[10px] uppercase tracking-widest mb-6 font-body">
              Follow Along
            </p>
            <div className="flex flex-col gap-px">
              {socialLinks.map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex items-center justify-between p-5 border border-cream/10 text-cream hover:border-gold/50 hover:text-gold hover:bg-cream/5 transition-all duration-200 group"
                >
                  <span className="text-xs uppercase tracking-widest font-body">{platform}</span>
                  <span className="text-cream/30 group-hover:text-gold transition-colors duration-200 text-lg">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
