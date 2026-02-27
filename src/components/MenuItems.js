

export default function MenuItems(){
    return(
        <section className="w-full flex flex-col self-center items-center justify-center bg-gray-100 gap-24 my-12 p-2 lg:p-8">
            <span className="w-full flex flex-col items-center justify-center gap-4 border-b-2 border-gray-400 p-4">
                <div className="w-full flex items-center justify-between bg-gray-200 rounded">
                <p className=" font-bold mb-2">Tacos</p>
                <p>$3.50</p>
                </div>
                <p className=" self-start text-center lg:text-start">Three soft corn tortillas with your choice of meat and toppings</p>
            </span>
            <span className="w-full flex flex-col items-center justify-center gap-4 border-b-2 border-gray-400 p-4">
                <div className="w-full flex items-center justify-between bg-gray-200 rounded">
                <p className=" font-bold mb-2">Burrito</p>
                <p>$9.50</p>
                </div>
                <p className="self-start text-center lg:text-start">Rice, beans, and your choice of meat or vegetarian filling</p>
            </span>
            <span className="w-full flex flex-col items-center justify-center gap-4 border-b-2 border-gray-400 p-4">
                <div className="w-full flex items-center justify-between bg-gray-200 rounded">
                <p className=" font-bold mb-2">Quesadilla</p>
                <p>$7.50</p>
                </div>
                <p className="self-start text-center lg:text-start">Cheese, choice of meat or vegetarian filling</p>
            </span>
            <span className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-8 px-8 py-4">
            <button className="w-full lg:w-1/2 bg-tertiary hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Order Now</button>
            </span>
        </section>
    )
}