function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-2xl">
      {message}
    </div>
  );
}

export default ErrorMessage;