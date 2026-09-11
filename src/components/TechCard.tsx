import type { Technology } from "../types/technology";

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  isAdded: boolean;
}

const TechCard = ({ tech, onAdd, onRemove, isAdded }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <img src={icon} alt={name} className="w-10 h-10 object-contain" />
          <span className="badge badge-sm border-slate-200 bg-slate-50 text-slate-600 font-medium">
            {badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mt-4">{name}</h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-9 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
          <span>{category}</span>
          <span>{difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-500">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          if (isAdded) {
            onRemove(tech.id);
          } else {
            onAdd(tech);
          }
        }}
        className={`w-full mt-4 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
          isAdded
            ? "bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 hover:border-red-200 active:scale-95 group"
            : "bg-slate-900 hover:bg-slate-800 text-white active:scale-95"
        }`}
      >
        {isAdded ? (
          <>
            <span className="group-hover:hidden">✓ Added to Stack</span>
            <span className="hidden group-hover:inline">
              ✕ Remove from Stack
            </span>
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechCard;
