const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
] as const;

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 text-center sm:text-left">
            <a
              href="#home"
              className="flex items-center justify-center sm:justify-start gap-2"
            >
              <span className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center text-white font-black text-xs shadow-xs">
                DS
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="mt-4 text-xs text-slate-500 max-w-sm leading-relaxed mx-auto sm:mx-0">
              Curated tools, technologies, and resources to develop and build
              big modern software.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-4 mt-6 text-xs text-slate-500 font-medium">
              {socialLinks.map((link, index) => (
                <span key={link.label} className="contents">
                  {index > 0 && (
                    <span className="sm:hidden text-slate-300">•</span>
                  )}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-violet-600"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="hidden sm:block">
              <h4 className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-3">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-slate-500">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-violet-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 gap-2 sm:gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex justify-end gap-3 sm:gap-4 shrink-0">
            <a href="#privacy" className="hover:text-violet-600">
              Privacy
            </a>
            <a href="#terms" className="hover:text-violet-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
