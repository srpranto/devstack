import { useState, useEffect } from "react";

const navItems = [
  "Home",
  "Technologies",
  "Projects",
  "About",
  "Contact",
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Cache only the section elements that actually exist in the DOM
    const sectionElements = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter((el): el is HTMLElement => Boolean(el));

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140;

          for (let i = sectionElements.length - 1; i >= 0; i--) {
            const el = sectionElements[i];
            if (el.offsetTop <= scrollPosition) {
              setActiveSection(el.id);
              ticking = false;
              return;
            }
          }
          setActiveSection("home");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = () =>
    navItems.map((item) => {
      const isActive = activeSection === item.toLowerCase();
      return (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            onClick={() => {
              setActiveSection(item.toLowerCase());
              closeMenu();
            }}
            className="relative inline-block font-semibold py-1 transition-colors duration-300"
          >
            <span
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-transparent"
                  : "text-slate-600 hover:text-violet-600"
              }`}
            >
              {item}
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-0 py-1 brand-gradient-text pointer-events-none transition-opacity duration-300 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {item}
            </span>
          </a>
        </li>
      );
    });

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
              onClick={() => setActiveSection("home")}
              className="flex items-center gap-1.5 sm:gap-2 shrink-0"
            >
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-black text-[10px] sm:text-sm shadow-xs">
                DS
              </span>
              <span className="text-xs sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
          </div>

          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-8 text-xs lg:text-sm">
            {renderNavLinks()}
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
            {renderNavLinks()}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
