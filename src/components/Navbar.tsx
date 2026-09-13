import { useState } from "react";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = navItems.map((item) => (
    <li key={item.label}>
      <a
        href={item.href}
        onClick={closeMenu}
        className={`inline-block font-semibold py-1 transition-colors duration-200 ${
          item.label === "Home"
            ? "brand-gradient-text"
            : "text-slate-600 hover:text-violet-600"
        }`}
      >
        {item.label}
      </a>
    </li>
  ));

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start md:hidden flex-1 z-10">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
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
            <BrandLogo />
          </div>

          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-8 text-xs lg:text-sm">
            {navLinks}
          </ul>

          <div className="flex items-center justify-end gap-1 sm:gap-3 flex-1 md:flex-none z-10">
            <button
              type="button"
              className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-1.5 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-xs sm:text-sm font-medium text-white brand-gradient rounded-full px-2.5 sm:px-5 py-1 sm:py-2 shadow-sm hover:opacity-95 transition-opacity whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 shadow-lg">
          <ul className="flex flex-col gap-2.5 text-sm text-center">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
