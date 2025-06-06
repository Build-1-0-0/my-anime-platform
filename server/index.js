// server/index.js
const express = require("express");
const app = express();

app.use(express.json());

// Mock database (replace with free MongoDB Atlas later)
const animeData = [
  { id: 1, title: "Public Domain Anime", url: "https://archive.org/download/anime/anime.mp4", resolutions: ["240p"] },
];

app.get("/api/search", (req, res) => {
  const query = req.query.q;
  const results = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );
  res.json(results);
});

app.listen(process.env.PORT || 3000, () => console.log("Server running"));
