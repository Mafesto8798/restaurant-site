

export default function Contact(){
    return(
    <section className="w-7/8 lg:w-1/2 self-center py-20 px-6 bg-light">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        
        <div className="space-y-4 mb-8">
          <div>
            <p className="text-gray-600 mb-1">Phone: </p>
            <a 
              href="tel:4015551234" 
              className="text-2xl font-semibold text-primaryText hover:underline"
            >
              (401) 555-1234
            </a>
          </div>

          <div>
            <p className="text-gray-600 mb-1">Email: </p>
            <a 
              href="mailto:contact@rosaskitchen.com"
              className="text-xl text-primaryText hover:underline"
            >
              contact@rosaskitchen.com
            </a>
          </div>
        </div>

        <p className="text-gray-600 mb-4">Follow us on social media:</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Facebook
          </a>
          <a href="#" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Twitter
          </a>
          <a href="#" className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
            Instagram
          </a>
        </div>
      </div>
    </section>
    )
}