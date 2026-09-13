import type { Technology } from "../types/technology";

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

const TechCard = ({ tech, onAdd, isAdded }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-start justify-between">
          <img
            src={icon}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 object-contain"
          />
          <span className="badge badge-sm border-slate-200 bg-slate-50 text-slate-600 font-medium shrink-0">
            {badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mt-4">{name}</h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-9 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between gap-1.5 sm:gap-2 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-violet-600 bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full shrink-0">
            {category}
          </span>
          <span className="truncate min-w-0 text-center" title={difficulty}>
            {difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-700 shrink-0 whitespace-nowrap">
            <span className="text-amber-500 leading-none">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-semibold border transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
            : "bg-slate-900 hover:bg-slate-800 text-white border-transparent active:scale-95 cursor-pointer"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
