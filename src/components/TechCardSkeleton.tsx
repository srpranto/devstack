const TechCardSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading technology card"
      className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="skeleton w-10 h-10 rounded-xl shrink-0" />
          <div className="skeleton h-5 w-16 rounded-md" />
        </div>

        <div className="skeleton h-5 w-28 rounded-md mt-4" />

        <div className="space-y-1.5 mt-2 min-h-9">
          <div className="skeleton h-3.5 w-full rounded" />
          <div className="skeleton h-3.5 w-4/5 rounded" />
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
          <div className="skeleton h-4 w-16 rounded-full" />
          <div className="skeleton h-4 w-14 rounded" />
          <div className="skeleton h-4 w-10 rounded" />
        </div>
      </div>

      <div className="skeleton h-9.5 w-full rounded-xl mt-4" />
    </div>
  );
};

export default TechCardSkeleton;
