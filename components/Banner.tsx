function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="max-[600px]:text-4xl text-7xl">Kacper's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to
          <span className="underline decoration-4 decoration-blue-500 mx-1">
            The most practical
          </span>
          devs blog in the Planet
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New content for learning | The latest tech | debugging parties | huge community
      </p>
    </div>

  );
}

export default Banner;