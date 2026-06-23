function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-800 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h3 className="text-lg font-semibold mb-2">
          WeatherNews Dashboard
        </h3>

        <p className="text-zinc-400 text-sm">
          Real-time weather updates and latest news in one place.
        </p>

        <p className="text-zinc-500 text-xs mt-3">
          Built with React, Tailwind CSS, OpenWeather API and GNews API.
        </p>

      </div>
    </footer>
  );
}

export default Footer;