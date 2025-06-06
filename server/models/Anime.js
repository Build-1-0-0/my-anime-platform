const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  title: String,
  source: String, // "archive", "webtorrent", "youtube"
  url: String,
  resolutions: [String],
  genre: [String],
});

module.exports = mongoose.model("Anime", AnimeSchema);
