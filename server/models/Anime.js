// server/models/Anime.js
const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  title: String,
  source: String, // "archive" or "webtorrent"
  url: String, // Archive.org URL or WebTorrent magnet link
  resolutions: [String],
});

module.exports = mongoose.model("Anime", AnimeSchema);
