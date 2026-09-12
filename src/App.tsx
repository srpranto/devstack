import { useState, useEffect } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  type ToastPosition,
} from "react-toastify";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

const App = () => {
  // States
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastPosition, setToastPosition] =
    useState<ToastPosition>("top-right");

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const updatePosition = () => {
      setToastPosition(media.matches ? "bottom-right" : "top-right");
    };

    updatePosition();
    media.addEventListener("change", updatePosition);

    return () => media.removeEventListener("change", updatePosition);
  }, []);

  // Load technology data on mount
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

  // Add technology to stack (with duplicate check)
  const handleAddToStack = (tech: Technology): void => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already added to your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove a single technology
  const handleRemove = (id: string): void => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack.`);
    }
  };

  // Clear the entire stack
  const handleRemoveAll = (): void => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("All items removed from your stack.");
  };

  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {/* Technologies section starts here */}
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
            {/* Technology cards grid starts here */}
            <div className="w-full lg:flex-1">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <span className="loading loading-spinner loading-lg text-violet-500"></span>
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
            {/* Technology cards grid ends here */}

            {/* Your stack sidebar starts here */}
            <div className="w-full lg:w-80 shrink-0">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
            {/* Your stack sidebar ends here */}
          </div>
        </section>
        {/* Technologies section ends here */}
      </main>

      <Footer />
      <ToastContainer
        position={toastPosition}
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
