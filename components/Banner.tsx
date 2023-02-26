import backgroundSpace from "../public/images/space.svg";
import Image from "next/image";

function Banner() {
  return (
    <div className="absolute top-15 h-72 bg-black w-full">
      <Image className="w-full object-cover" src={backgroundSpace} alt="background" fill />
      <div className="absolute top-0 w-full h-72 bg-gradient-to-b from-black to-transparent"/>
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
      </div>
    </div>
  );
}

export default Banner;