import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  let Links = [
    { name: "NOSOTROS", link: "#nosotros" },
    { name: "SERVICIOS", link: "#servicios" },
    { name: "SOCIOS", link: "#socios" },
    { name: "CONTÁCTANOS", link: "#contacto" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full px-2 py-4 shadow-md">
      <div className="md:flex items-center justify-between bg-white">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span>LOGO</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-12 z-[5]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              className="md:ml-8 md:my-0 my-7 font-semibold"
              onClick={() => setOpen(false)}
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
