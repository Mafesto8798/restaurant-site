import MenuItems from "./MenuItems";

export default function Menu() {
  return (
    <section id="menu" className="w-full bg-charcoal py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-gold text-lg uppercase tracking-[0.3em] mb-4 font-body">What We Serve</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-cream leading-tight">
            Our Menu
          </h2>
          <p className="text-cream/40 max-w-xs text-sm leading-relaxed md:text-right font-body">
            Homemade Mexican food made with fresh ingredients and traditional recipes.
          </p>
        </div>
        <MenuItems />
      </div>
    </section>
  );
}
