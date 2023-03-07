"use client";
import YouTube, { YouTubeProps } from "react-youtube";

function EmbeddedYoutube() {

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="bg-gray-800">
      <div className="w-full h-24 absolute bg-gradient-to-b from-gray-600" />
      <h1 className="absolute w-full text-center text-4xl font-bold p-6 text-white max-[800px]:pb-8">Latest YouTube
        Videos</h1>
      <div className="max-w-2xl p-6 pb-8 mx-auto pt-28">
        <YouTube videoId="gl6jD4qIO_8" opts={opts} onReady={onPlayerReady} />;
      </div>
      <div className="w-full h-32 bg-gradient-to-t from-gray-600" />
    </div>
  );
}

export default EmbeddedYoutube;

