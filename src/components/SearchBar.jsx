import { FiSearch } from "react-icons/fi";

function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="flex gap-4 items-center">

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="flex-1 bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
      />

      <button
        onClick={getWeather}
        className="bg-blue-600 hover:bg-blue-500 transition px-6 py-4 rounded-2xl flex items-center justify-center gap-2 font-medium"
      >
        <FiSearch />
        Search
      </button>

    </div>
  );
}

export default SearchBar;