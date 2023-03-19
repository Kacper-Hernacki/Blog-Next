"use client"
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

type PostData = {

  title: string;
  description: string;
  slug: string;

}

function ShareModule({ title, description, slug }: PostData) {
  const baseUrl = `thedevsuniverse.xyz/post/${slug}`;

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="my-4">Share this article:</h3>
      <div className="flex items-center justify-end mt-auto space-x-2">
        <FacebookShareButton url={baseUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={baseUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={baseUrl} title={title} summary={description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={baseUrl} subject={title} body={`Check out this blog post: ${title}\n${baseUrl}`}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <WhatsappShareButton url={baseUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton url={baseUrl} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <RedditShareButton url={baseUrl} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    </div>
  );
}

export default ShareModule;