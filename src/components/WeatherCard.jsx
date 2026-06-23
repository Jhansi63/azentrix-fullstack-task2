import WeatherDetails from "./WeatherDetails";

function WeatherCard({ weather }) {

  if (!weather) {
    return null;
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-lg">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>

          <h2 className="text-3xl font-bold mb-2">
            {weather.name}
          </h2>

          <p className="text-zinc-400 capitalize">
            {weather.weather[0].description}
          </p>

          <div className="text-6xl font-bold mt-4">
            {Math.round(weather.main.temp)}°C
          </div>

        </div>

        <div className="flex items-center justify-center">

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather icon"
          />

        </div>

      </div>

      <WeatherDetails weather={weather} />

    </div>
  );
}

export default WeatherCard;