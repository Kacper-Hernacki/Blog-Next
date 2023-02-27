import backgroundSpace from "../public/images/space.svg";
import Image from "next/image";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMedium, AiOutlineTwitter, AiOutlineYoutube, FaTiktok } from "react-icons/all";

function Banner() {
  return (
    <div className="absolute top-15 h-72 bg-black w-full">
      <Image className="w-full object-cover" src={backgroundSpace} alt="background" fill />
      <div className="absolute top-0 w-full h-72 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute z-10 flex flex-col lg:flex-row lg:space-x-5 w-full justify-between font-bold px-10 py-5 mb-10">
        <div>
          <h1 className="max-[600px]:text-4xl text-7xl text-gray-200 mb-2">Coding Daily Blog</h1>
          <h2 className="mt-5 md:mt-0 text-gray-50">
            Welcome to
            <span className="underline underline-offset-4 decoration-4 decoration-blue-500 mx-1">
            The most practical
          </span>
            devs blog in the Planet
          </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          New content for learning | The latest tech | debugging parties | huge community
        </p>

        <div className="flex justify-left items-center w-full h-32">
          <a target="_blank" href="https://www.instagram.com/Kacper.hernacki" className="mr-2">
            <AiOutlineInstagram className="text-xl text-white cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.twitter.com/kacperhernacki" className="mr-2">
            <AiOutlineTwitter className="text-xl text-white cursor-pointer" />
          </a>
          <a target="_blank" href="https://youtube.com/channel/UCTi-LX8VSgD_It9jDf8lpDQ" className="mr-2">
            <AiOutlineYoutube className="text-xl text-white cursor-pointer" />
          </a>
          <a target="_blank" href="" className="mr-2">
            <FaTiktok className="text-xl text-white cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.github.com/Kacper-Hernacki" className="mr-2">
            <AiOutlineGithub className="text-xl text-white cursor-pointer" />
          </a>
          <a target="_blank" href="http://linkedin.com/in/kacper-hernacki-965161203" className="mr-2">
            <AiOutlineLinkedin className="text-xl text-white cursor-pointer" />
          </a>
          <a target="_blank" href=" https://medium.com/@hernackikacper">
            <AiOutlineMedium className="text-xl text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;