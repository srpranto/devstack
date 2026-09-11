import { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  const handleAddToStack = (tech: Technology): void => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already added to your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string): void => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = (): void => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error("All items removed from your stack.");
  };

  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />

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
            <div className="w-full lg:flex-1">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <span className="loading loading-spinner loading-lg text-pink-500"></span>
                  <p className="text-xs text-slate-400 mt-3 font-medium">
                    Loading technologies...
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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

            <div className="w-full lg:w-80 xl:w-85 shrink-0">
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
