const express = require("express");
const mongoose = require("mongoose");
const YTDlpWrap = require("yt-dlp-wrap").default;
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const ytDlp = new YTDlpWrap();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Anime = require("./models/Anime");

// Search endpoint
app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  try {
    const results = await Anime.find({ title: new RegExp(query, "i") });
    res.json(results);
  } catch (err) {
    res.status(500).send("Search failed");
  }
});

// Download endpoint
app.get("/api/download", async (req, res) => {
  const url = decodeURIComponent(req.query.url);
  const outputPath = path.join(__dirname, "output.mp4");
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    try {
      await ytDlp.exec(["-f", "best[height<=360]", url, "-o", outputPath]);
      res.download(outputPath, "video.mp4", (err) => {
        if (err) res.status(500).send("Download failed");
      });
    } catch (err) {
      res.status(500).send("Download failed");
    }
  } else {
    res.redirect(url); // Archive.org or WebTorrent
  }
});

app.listen(process.env.PORT || 3000, () => console.log("Server running"));
