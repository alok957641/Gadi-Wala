import { BsSun, BsMoon } from "react-icons/bs";
import { FaCarRear } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const Navlinks = [
    { id: 1, name: "HOME", link: "#Home" },
    { id: 2, name: "ABOUT", link: "#About" },
    { id: 3, name: "BOOKING", link: "#Booking" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md overflow-x-hidden">
      
      <div className="max-w-[1280px] mx-auto px-5 min-h-[60px] flex justify-between items-center">

        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <FaCarRear className="text-2xl" />
          <h1 className="text-2xl font-bold font-serif">Gadi Wala</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {Navlinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="text-[14px] font-bold hover:text-yellow-500 duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5">
          {/* THEME */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          {/* MOBILE */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 flex flex-col items-center gap-6 py-6 shadow-lg">
          <a href="#Home" onClick={() => setOpen(false)}>Home</a>
          <a href="#About" onClick={() => setOpen(false)}>About</a>
          <a href="#Booking" onClick={() => setOpen(false)}>Booking</a>
        </div>
      )}
    </nav>
  );
}
