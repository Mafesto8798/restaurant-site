

export default function Hero(){
    return(
        <section 
      className=" w-full h-200 lg:h-275 flex items-center justify-center bg-cover bg-center relative mb-24"
      style={{
        backgroundImage: "url('/taco.jpg')",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content on top of overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Fresh Mexican Tacos
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience authentic taste with our homemade Mexican tacos
        </p>
        
        <div className="w-full flex gap-10 items-center justify-center">
          <a 
            href="#menu"
            className="lg:w-1/4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            View Menu
          </a>
          <a 
            href="tel:4015551234"
            className="lg:w-1/4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
    )
}