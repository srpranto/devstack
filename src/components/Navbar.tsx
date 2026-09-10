import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = (
    <>
      <li>
        <a
          href="#home"
          onClick={closeMenu}
          className="text-pink-600 font-medium transition-colors block py-1 md:py-0"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#technologies"
          onClick={closeMenu}
          className="text-slate-600 hover:text-pink-600 font-medium transition-colors block py-1 md:py-0"
        >
          Technologies
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={closeMenu}
          className="text-slate-600 hover:text-pink-600 font-medium transition-colors block py-1 md:py-0"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={closeMenu}
          className="text-slate-600 hover:text-pink-600 font-medium transition-colors block py-1 md:py-0"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={closeMenu}
          className="text-slate-600 hover:text-pink-600 font-medium transition-colors block py-1 md:py-0"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -ml-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              <img
                src={hamburger}
                alt="Menu"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start shrink-0">
            <a href="#home">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            {navLinks}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-2 sm:px-3 py-1.5">
              Sign In
            </button>
            <button className="text-xs sm:text-sm font-medium text-white brand-gradient rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-sm hover:opacity-95 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 shadow-lg">
          <ul className="flex flex-col gap-2.5 text-sm">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
