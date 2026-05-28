 "use client";
import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

export function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  function menu() {
    setIsMenu(!isMenu);
  }

  return (
    <main className="border-b border-gray-300">
      <div className="bg-white w-full h-16 z-20 flex justify-center items-center px-10 sticky top-0 left-0 right-0">
        <div className="flex justify-between w-full">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 cursor-pointer">Coco Delight</h1>
          </Link>

          <ul>
            <li 
              className="cursor-pointer md:hidden">
              <RiMenu3Line 
                className="w-10 h-8"
                onClick={menu}
              />
            </li>
          </ul>

          {isMenu && (
            <div className="fixed right-0 h-screen bg-white w-60">
              <div className="pl-8 mt-10">
                <IoCloseSharp 
                  className="text-3xl cursor-pointer active:opacity-75"
                  onClick={menu}
                />
              </div>
              

             <ul className="flex flex-col gap-4 text-lg mt-8">
                <Link href="/">
                  <li 
                    className="cursor-pointer hover:bg-gray-100 active:bg-gray-50 transition w-full py-4 text-center"
                  >
                    Home
                  </li>
                </Link>

                <Link href="/about">
                  <li 
                    className="cursor-pointer hover:bg-gray-100 active:bg-gray-50 w-full py-4 text-center"
                  >
                    About Us
                  </li>
                </Link>

                <Link href="/mission">
                  <li 
                    className="cursor-pointer hover:bg-gray-100 active:bg-gray-50 w-full py-4 text-center"
                  >
                    Mission
                  </li>
                </Link>
              </ul>
            </div>
          )}
          
          <ul className="hidden md:flex gap-10 text-lg">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>

            <Link href="/about">
              <li className="cursor-pointer">About Us</li>
            </Link>
            
            <Link href="/mission">
              <li className="cursor-pointer">Mission</li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  )
}