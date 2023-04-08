"use client";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function EmbeddedTweets() {

  return (
    <div className="bg-gray-800">
      <div className="w-full h-24 absolute bg-gradient-to-b from-gray-800" />
      <h1 className="absolute w-full text-center text-4xl font-bold p-6 text-white max-[800px]:pb-8">Check the latest
        tweets</h1>

      <div className="max-w-2xl p-6 pb-8 mx-auto pt-28">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kacperhernacki"
          options={{ height: 400 }}
        />
      </div>
      <div className="w-full h-32 bg-gradient-to-t from-gray-600" />
    </div>
  );
}

export default EmbeddedTweets;

