"use client"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMedium, AiOutlineTwitter, AiOutlineYoutube, FaTiktok } from "react-icons/all";
import styled from "styled-components";

export default function SocialsPage() {
  return (
    <div className="mt-80 z-10 absolute -translate-x-1/2 left-1/2 right-1/2">
      <div className="flex flex-col justify-left items-center mb-32">
        <InstagramLink target="_blank" href="https://www.instagram.com/Kacper.hernacki" className="mt-8 max-[800px]:mt-2 max-[800px]:p-2 min-[800px]:m-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 ease-in-out duration-300">
          Instagram
          <AiOutlineInstagram className="text-xl text-white cursor-pointer ml-2" />
        </InstagramLink>
        <a target="_blank" href="https://www.twitter.com/kacperhernacki" className="mt-8 max-[800px]:mt-2 max-[800px]:p-2 min-[800px]:m-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 hover:bg-blue-400 ease-in-out duration-300">
          Twitter
          <AiOutlineTwitter className="text-xl text-white cursor-pointer" />
        </a>
        <a target="_blank" href="https://youtube.com/channel/UCTi-LX8VSgD_It9jDf8lpDQ" className="mt-8 max-[800px]:mt-2 max-[800px]:p-2 min-[800px]:m-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 hover:bg-red-600 ease-in-out duration-300">
          YouTube
          <AiOutlineYoutube className="text-xl text-white cursor-pointer" />
        </a>
        <a target="_blank" href="" className="mt-8 max-[800px]:mt-2 min-[800px]:m-2 max-[800px]:p-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 hover:bg-black ease-in-out duration-300">
          TikTok
          <FaTiktok className="text-xl text-white cursor-pointer" />
        </a>
        <a target="_blank" href="https://www.github.com/Kacper-Hernacki" className="mt-8 max-[800px]:mt-2 max-[800px]:p-2 min-[800px]:m-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 hover:bg-black ease-in-out duration-300">
          GitHub
          <AiOutlineGithub className="text-xl text-white cursor-pointer" />
        </a>
        <a target="_blank" href="http://linkedin.com/in/kacper-hernacki-965161203" className="mt-8 max-[800px]:mt-2 max-[800px]:p-2 min-[800px]:m-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 hover:bg-blue-700 ease-in-out duration-300">
          LinkedIn
          <AiOutlineLinkedin className="text-xl text-white cursor-pointer" />
        </a>
        <a target="_blank" href=" https://medium.com/@hernackikacper" className="mt-8 max-[800px]:mt-2 max-[800px]:p-2 min-[800px]:m-2 flex justify-center items-center border-2 p-4 text-white rounded-2xl w-80 hover:bg-black ease-in-out duration-300">
          Medium
          <AiOutlineMedium className="text-xl text-white cursor-pointer" />
        </a>
      </div>

    </div>

  );
}
const InstagramLink = styled.a`
  &:hover {
    background: #f09433 !important;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888',GradientType=1) !important;
  }
`

