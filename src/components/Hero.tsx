import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-10 lg:pb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Your Ideal <br className="hidden sm:inline" />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#technologies"
              className="text-white brand-gradient font-medium text-xs sm:text-sm rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 shadow-sm hover:opacity-95 transition-opacity text-center"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="bg-white border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-slate-50 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-full max-w-70 sm:max-w-sm md:max-w-md lg:max-w-115 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
