import { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import TechCardSkeleton from "./components/TechCardSkeleton";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // load technologies data
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies data.");
      });
  }, []);

  // add technology to stack
  const handleAddToStack = (tech: Technology): void => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already added to your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // remove technology from stack
  const handleRemove = (id: string): void => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack.`);
    }
  };

  // clear all items from stack
  const handleRemoveAll = (): void => {
    setStack([]);
    toast.info("All items removed from your stack.");
  };

  return (
    <div className="min-h-screen text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {/* Technologies Section */}
        <section
          id="technologies"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        >
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Explore the{" "}
              <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-full lg:flex-1 min-w-0">
              {loading ? (
                <div>
                  <div className="flex items-center gap-2.5 mb-5 px-3.5 py-2.5 bg-violet-50/70 border border-violet-100 rounded-xl text-violet-700 text-xs font-medium w-fit">
                    <span className="loading loading-spinner loading-xs text-violet-600"></span>
                    <span>Loading technologies...</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <TechCardSkeleton key={index} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAddToStack}
                      isAdded={stack.some((item) => item.id === tech.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Selected Stack Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default App;
