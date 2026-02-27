import MenuItems from "./MenuItems";

export default function Menu(){
    return(
        <div className="w-7/8 lg:w-1/2 flex flex-col self-center items-center justify-center  bg-light py-16 px-8 lg:px-32">
            <p className="text-4xl lg:text-5xl font-bold mb-8">Our Menu</p>
            <p className="text-lg lg:text-xl mb-8 text-center max-w-2xl leading-relaxed">Explore our delicious menu featuring a variety of homemade Mexican tacos, made with fresh ingredients and traditional recipes.</p>
            <MenuItems />
        </div>
    )
}