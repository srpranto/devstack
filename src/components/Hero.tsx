import bannerStack from "../assets/banner-stack.png";

const buttonBaseClass =
  "flex-1 sm:flex-none sm:w-48 md:w-auto lg:w-48 max-w-48 h-10 sm:h-11 inline-flex items-center justify-center font-medium text-xs sm:text-sm rounded-lg px-4 sm:px-6 md:px-4 lg:px-6 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-out whitespace-nowrap cursor-pointer";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-10 lg:pb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#technologies"
              className={`${buttonBaseClass} text-white brand-gradient shadow-md shadow-violet-500/25 hover:shadow-lg hover:shadow-violet-500/35`}
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className={`${buttonBaseClass} bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm`}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
