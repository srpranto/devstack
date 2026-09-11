const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center text-white font-black text-xs shadow-xs">
                DS
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="mt-4 text-xs text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources to develop and build
              big modern software.
            </p>
            <div className="flex gap-4 mt-6 text-xs text-slate-500 font-medium">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-3">
              Product
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-500">
              <li>
                <a href="#home" className="hover:text-pink-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-600">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-3">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-500">
              <li>
                <a href="#about" className="hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-pink-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-3">
              Legal
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-pink-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-pink-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-pink-600">
              Privacy
            </a>
            <a href="#terms" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
