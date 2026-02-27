

export default function About(){
    return (
        <div className="w-7/8 lg:w-1/2 self-center flex flex-col items-center justify-center bg-light py-16 px-8 lg:px-32">
            <h1 className="text-4xl text-center lg:text-5xl font-bold mb-12">About Rosa's Kitchen</h1>
            <img src="/restaurant.jpg" alt="Rosa's Kitchen" className="lg:w-3/4 h-80 lg:h-100 object-cover rounded-lg mb-8" />
            <p className="text-lg lg:text-xl py-8 text-center max-w-3xl leading-relaxed">At Rosa's Kitchen, we are passionate about bringing the authentic flavors of Mexico to your table. Our family-owned restaurant has been serving delicious homemade tacos for over 20 years, using traditional recipes and fresh ingredients. We believe in creating a warm and welcoming atmosphere where you can enjoy great food with friends and family. Join us for a taste of Mexico and experience the vibrant culture through our dishes.</p>
        </div>
    )
}