import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import CategoryFilter from "../components/CategoryFilter";
import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import Footer from "../components/Footer";

import { fetchWeather } from "../services/weatherApi";
import { fetchNews } from "../services/newsApi";

function Dashboard() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light"
      ? false
      : true;
  });

  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const getWeather = async () => {
    try {

      setLoading(true);
      setError("");

      const data = await fetchWeather(city);

      setWeather(data);

    } catch (err) {

      setError("City not found");

    } finally {

      setLoading(false);

    }
  };

  const getNews = async () => {
    try {

      setNewsLoading(true);
      setNewsError("");

      const articles = await fetchNews(category);

      setNews(articles);

    } catch (err) {
      console.error(err);

    } finally {

      setNewsLoading(false);

    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-slate-100 text-zinc-900"
      }`}
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="mb-6">

          <SearchBar
            city={city}
            setCity={setCity}
            getWeather={getWeather}
          />

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-2xl mt-4">
              {error}
            </div>
          )}

        </div>

        <div className="mb-6">

          {loading ? (

            <div className="animate-pulse bg-zinc-900 border border-zinc-800 rounded-3xl h-64"></div>

          ) : (

            <WeatherCard weather={weather} />

          )}

        </div>

        <div className="mb-6">

          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />

        </div>

        {newsError && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-2xl mb-4">
            {newsError}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {newsLoading ? (

            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>

          ) : news.length === 0 ? (

            <div className="col-span-full text-center">
              No news found
            </div>

          ) : (

            news.map((article, index) => (
              <NewsCard
                key={index}
                article={article}
              />
            ))

          )}

        </div>

        <Footer />

      </div>

    </div>
  );
}

export default Dashboard;