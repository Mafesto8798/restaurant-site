export default function About() {
  return (
    <section id="about" className="w-full bg-warm-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-gold text-lg uppercase tracking-[0.3em] mb-12 font-body">Our Story</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl font-bold text-charcoal leading-tight mb-8">
              Family recipes,<br />
              <em className="text-red not-italic">20 years</em><br />
              of flavor.
            </h2>
            <p className="text-charcoal/60 text-base md:text-lg leading-relaxed mb-4 font-body">
              At Rosa&apos;s Kitchen, we are passionate about bringing the authentic flavors of Mexico to your
              table. Our family-owned restaurant has been serving delicious homemade tacos for over 20 years,
              using traditional recipes and fresh ingredients.
            </p>
            <p className="text-charcoal/60 text-base md:text-lg leading-relaxed font-body">
              We believe in creating a warm and welcoming atmosphere where you can enjoy great food with
              friends and family. Join us for a taste of Mexico.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-charcoal/10">
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-charcoal">20+</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mt-1 font-body">Years Serving</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-charcoal">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mt-1 font-body">Fresh</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-charcoal">5★</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mt-1 font-body">Reviews</p>
              </div>
            </div>
          </div>

          {/* Image with gold corner accents */}
          <div className="relative">
            <img
              src="/restaurant.jpg"
              alt="Inside Rosa's Kitchen"
              className="w-full h-100 md:h-130 object-cover"
            />
            {/* Top-left corner accent */}
            <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-gold" />
            {/* Bottom-right corner accent */}
            <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
