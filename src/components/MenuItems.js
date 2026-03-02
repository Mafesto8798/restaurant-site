const categories = [
  {
    label: "Mains",
    items: [
      {
        name: "Taco",
        price: "$3.50",
        description: "Soft corn tortilla with your choice of meat and fresh toppings",
        tag: "Most Popular",
      },
      {
        name: "Burrito",
        price: "$9.50",
        description: "Rice, beans, and your choice of meat or vegetarian filling",
        tag: null,
      },
      {
        name: "Quesadilla",
        price: "$7.50",
        description: "Flour tortilla with melted cheese and your choice of filling",
        tag: null,
      },
      {
        name: "Enchiladas",
        price: "$10.50",
        description: "Two corn tortillas rolled with chicken and smothered in red sauce",
        tag: null,
      },
      {
        name: "Tamale",
        price: "$4.50",
        description: "Slow-cooked masa with seasoned pork, wrapped in a corn husk",
        tag: null,
      },
    ],
  },
  {
    label: "Sides & Extras",
    items: [
      {
        name: "Nachos",
        price: "$8.50",
        description: "Tortilla chips with cheese, jalapeños, sour cream, and salsa",
        tag: null,
      },
      {
        name: "Guacamole",
        price: "$5.00",
        description: "Fresh avocado, lime, cilantro, and tomato — served with chips",
        tag: null,
      },
      {
        name: "Elote",
        price: "$4.00",
        description: "Street-style corn with mayo, cotija cheese, and chili powder",
        tag: null,
      },
    ],
  },
  {
    label: "Drinks & Desserts",
    items: [
      {
        name: "Horchata",
        price: "$3.00",
        description: "Traditional rice milk with cinnamon and a hint of vanilla",
        tag: null,
      },
      {
        name: "Churros",
        price: "$5.50",
        description: "Crispy fried dough rolled in cinnamon sugar with chocolate dip",
        tag: null,
      },
    ],
  },
];

export default function MenuItems() {
  return (
    <div>
      <div className="flex flex-col gap-12">
        {categories.map((category) => (
          <div key={category.label}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-2">
              <p className="text-gold text-xl uppercase tracking-[0.3em] whitespace-nowrap font-body">
                {category.label}
              </p>
              <div className="flex-1 h-px bg-cream/10" />
            </div>

            {/* Items list */}
            <div className="divide-y divide-cream/10">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group py-5 hover:bg-cream/5 -mx-4 px-4 transition-colors duration-200 cursor-default"
                >
                  {/* Name + dotted leader + price */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl md:text-3xl  text-cream group-hover:text-gold transition-colors duration-200">
                      {item.name}
                    </span>
                    {item.tag && (
                      <span className="text-[9px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-0.5 font-body self-center">
                        {item.tag}
                      </span>
                    )}
                    {/* Dotted leader line */}
                    <span className="flex-1 border-b border-dashed border-cream/20 self-end mb-1.25" />
                    <span className="font-display text-xl text-gold font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-cream/40 text-sm leading-relaxed mt-1 font-body max-w-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <a
          href="tel:4015551234"
          className="inline-flex items-center gap-3 px-10 py-4 bg-red text-cream text-xs uppercase tracking-widest font-semibold hover:bg-red/80 transition-colors duration-200 font-body"
        >
          Order Now — Call (401) 555-1234
        </a>
      </div>
    </div>
  );
}
