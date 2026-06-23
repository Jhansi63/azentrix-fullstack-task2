const categories = [
  "general",
  "technology",
  "sports",
  "business",
  "health",
  "entertainment",
  "science",
];

function CategoryFilter({ category, setCategory }) {

  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full transition capitalize border

          ${
            category === item
              ? "bg-blue-600 border-blue-600"
              : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;