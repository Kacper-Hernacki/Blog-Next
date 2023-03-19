"use client";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import React, { useEffect, useState } from "react";

type PostData = {

  title: string;
  description: string;
  slug: string;

}

function ShareModule({ title, description, slug }: PostData) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`thedevsuniverse.xyz/post/${slug}`);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="my-4">Share this article:</h3>
      <div className="flex items-center justify-end mt-auto space-x-2">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title} summary={description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareUrl} subject={title} body={`Check out this blog post: ${title}\n${window.location.href}`}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <RedditShareButton url={shareUrl} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    </div>
  );
}

export default ShareModule;