function SkeletonCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden animate-pulse">

      <div className="h-52 bg-zinc-800"></div>

      <div className="p-5">

        <div className="h-4 bg-zinc-800 rounded w-1/3 mb-4"></div>

        <div className="h-6 bg-zinc-800 rounded mb-3"></div>

        <div className="h-6 bg-zinc-800 rounded w-5/6 mb-5"></div>

        <div className="h-4 bg-zinc-800 rounded w-1/4 mb-5"></div>

        <div className="h-10 bg-zinc-800 rounded-xl w-32"></div>

      </div>

    </div>
  );
}

export default SkeletonCard;