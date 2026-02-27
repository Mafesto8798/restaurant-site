

export default function Hours(){
    return(
    <section className="w-7/8 lg:w-1/2 self-center py-20 px-6 bg-light">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Visit Us</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <div>
            <p className="font-semibold mb-2">📍 Address</p>
            <p className="text-gray-700">123 Main Street, Pawtucket, RI 02860</p>
          </div>

          <div>
            <p className="font-semibold mb-2">🕐 Hours</p>
            <p className="text-gray-700">Mon-Sat: 11am - 9pm</p>
            <p className="text-gray-700">Sun: 12pm - 8pm</p>
          </div>
        </div>
      </div>
    </section>
    )
}