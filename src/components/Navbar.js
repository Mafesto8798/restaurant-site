

export default function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row w-full h-60 lg:h-40 items-center justify-around lg:justify-between self-center py-8  lg:px-32 bg-secondary">
        <h1 className="text-3xl lg:text-5xl font-bold text-primaryText dark:text-white">Rosa's Kitchen</h1>
        <span className=" flex flex-col lg:flex-row items-center justify-around gap-4 lg:gap-10">
          <button className="w-full bg-primary hover:bg-green-700 text-white font-bold py-2 px-8 rounded">Menu</button>
          <button className="w-full bg-primary hover:bg-green-700 text-white font-bold py-2 px-8 rounded">Contact</button>
        </span>
      </nav>
  );
}   