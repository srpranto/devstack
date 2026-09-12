import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start md:hidden flex-1 z-10">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-5 h-5 text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <a
              href="#home"
              className="flex items-center gap-1.5 sm:gap-2 shrink-0"
            >
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-black text-[10px] sm:text-sm shadow-xs shrink-0">
                DS
              </span>
              <span className="text-xs sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
          </div>

          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-8 text-xs lg:text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-slate-600 hover:text-violet-600 font-medium transition-colors block py-1 md:py-0"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-1 sm:gap-3 flex-1 md:flex-none z-10">
            <button
              type="button"
              className="text-[10px] sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-1.5 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-[10px] sm:text-sm font-medium text-white brand-gradient rounded-full px-2.5 sm:px-5 py-1 sm:py-2 shadow-sm hover:opacity-95 transition-opacity whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 shadow-lg">
          <ul className="flex flex-col gap-2.5 text-sm text-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-slate-600 hover:text-violet-600 font-medium transition-colors block py-1 md:py-0"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
