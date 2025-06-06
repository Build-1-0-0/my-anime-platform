import React, { useEffect, useRef } from "react";

function VideoPlayer({ magnet }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const WebTorrent = window.WebTorrent;
    if (WebTorrent && magnet) {
      const client = new WebTorrent();
      client.add(magnet, (torrent) => {
        const file = torrent.files.find((f) => f.name.endsWith(".mp4"));
        file.streamTo(videoRef.current);
      });
    }
  }, [magnet]);

  return <video ref={videoRef} controls className="w-full" />;
}

export default VideoPlayer;
