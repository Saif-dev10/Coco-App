import { RiMenu3Line } from "react-icons/ri";

export function Navbar() {
  return (
    <main>
      <div className="bg-white w-full h-16 z-20 flex justify-center items-center px-10 sticky top-0 left-0 right-0">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-bold text-gray-800 cursor-pointer">Coco Delight</h1>

          <ul>
            <li className="md:hidden cursor-pointer">
              <RiMenu3Line className="w-10 h-8" />
            </li>
          </ul>
          
          <ul className="hidden md:flex gap-10 text-lg">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Mission</li>
          </ul>
        </div>
      </div>
    </main>
  )
}