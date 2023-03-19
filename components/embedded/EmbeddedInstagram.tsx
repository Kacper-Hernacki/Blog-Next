"use client";
import Embed from "react-embed";

const InstagramEmbed = ({ url }) => {
  return (
    <iframe
      className="mx-4"
      src={`${url}/embed`}
      width="340"
      height="590"
      frameBorder="0"
      scrolling="no"
      allowTransparency={true}
      allowFullScreen={true}
      title="Instagram Embed"
    ></iframe>
  );
};

function EmbeddedInstagram() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-6">Check the pinned Instagram posts</h1>
      <div className="flex flex-wrap justify-center items-center p-6 pb-8 mx-auto">
        <InstagramEmbed url="https://www.instagram.com/p/ChcYl3kjMw7" />
        <InstagramEmbed url="https://www.instagram.com/reel/Cd8Lo1OjBvN" />
        <InstagramEmbed url="https://www.instagram.com/p/ChcYl3kjMw7" />
     </div>
    </div>
  );
}

export default EmbeddedInstagram;