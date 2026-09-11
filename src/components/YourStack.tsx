import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-20">
      <div>
        <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
        <p className="text-xs text-slate-500 mt-1">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-8 sm:py-10 px-4 flex items-center justify-center mt-5 sm:mt-6">
          <span className="text-slate-400 text-xs font-normal">
            Your stack is empty.
          </span>
        </div>
      ) : (
        <div className="mt-5">
          <div className="flex flex-col gap-2.5 max-h-96 sm:max-h-120 lg:max-h-140 overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 ease-out hover:border-slate-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-7 h-7 object-contain shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </p>
                    <span className="text-xs text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  aria-label={`Remove ${item.name}`}
                  onClick={() => onRemove(item.id)}
                  className="text-slate-400 hover:text-slate-700 text-sm p-1 leading-none transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-5 py-2 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-xs transition-colors text-center"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
