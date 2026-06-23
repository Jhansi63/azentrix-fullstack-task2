function NewsCard({ article }) {

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300">
      <img
      src={
        article.image
        ? article.image
        : "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
      }
      alt="news"
      className="w-full h-52 object-cover"
/>

      <div className="p-5">

        <p className="text-sm text-blue-400 mb-2 capitalize">
          {article.source.name}
        </p>

        <h2 className="text-xl font-semibold leading-snug mb-3">
          {article.title}
        </h2>

        <p className="text-zinc-400 text-sm mb-5">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-xl"
        >
          Read More
        </a>

      </div>

    </div>
  );
}

export default NewsCard;