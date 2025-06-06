// client/src/App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 bg-anime-blue">
        <input
          type="text"
          placeholder="Search anime..."
          className="w-full p-2 rounded-md text-black focus:outline-none"
        />
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="Anime"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <h2 className="text-lg font-bold">Anime Title</h2>
          <div className="flex space-x-2">
            <a href="#stream" className="bg-blue-500 text-white px-4 py-2 rounded">
              Stream
            </a>
            <a href="#download" className="bg-green-500 text-white px-4 py-2 rounded">
              Download
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
