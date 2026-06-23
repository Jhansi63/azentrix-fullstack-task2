import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function WeatherDetails({ weather }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">

      <div className="bg-zinc-800 rounded-2xl p-4 flex items-center gap-3">
        <WiHumidity className="text-4xl text-blue-400" />

        <div>
          <p className="text-zinc-400 text-sm">
            Humidity
          </p>

          <h3 className="text-xl font-semibold">
            {weather.main.humidity}%
          </h3>
        </div>
      </div>

      <div className="bg-zinc-800 rounded-2xl p-4 flex items-center gap-3">
        <FaWind className="text-2xl text-cyan-400" />

        <div>
          <p className="text-zinc-400 text-sm">
            Wind Speed
          </p>

          <h3 className="text-xl font-semibold">
            {weather.wind.speed} km/h
          </h3>
        </div>
      </div>

    </div>
  );
}

export default WeatherDetails;