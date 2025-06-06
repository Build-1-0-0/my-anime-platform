import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/search?q=${search}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error(err));
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 bg-anime-blue">
        <input
          type="text"
          placeholder="Search anime or paste YouTube URL..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-md text-black focus:outline-none"
        />
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {results.map((anime) => (
          <div key={anime._id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
            <img
              src="https://via.placeholder.com/150"
              alt={anime.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <h2 className="text-lg font-bold">{anime.title}</h2>
            <div className="flex space-x-2">
              {anime.source === "webtorrent" ? (
                <button
                  onClick={() => window.open(`#webtorrent-${anime.url}`, "_blank")}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Stream
                </button>
              ) : (
                <a href={anime.url} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Stream
                </a>
              )}
              <a
                href={`${process.env.REACT_APP_BACKEND_URL}/api/download?url=${encodeURIComponent(
                  anime.url
                )}`}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </main>
      <footer className="p-4 text-center">
        This platform aggregates public domain or user-contributed content. Users are responsible
        for copyright compliance.
      </footer>
    </div>
  );
}

export default App;
