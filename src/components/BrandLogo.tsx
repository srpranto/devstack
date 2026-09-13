interface BrandLogoProps {
  className?: string;
}

const BrandLogo = ({ className = "" }: BrandLogoProps) => {
  return (
    <a
      href="#home"
      className={`flex items-center gap-1.5 sm:gap-2 shrink-0 ${className}`}
    >
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-xs">
        DS
      </span>
      <span className="text-sm sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
        Dev <span className="brand-gradient-text">Stack</span>
      </span>
    </a>
  );
};

export default BrandLogo;
