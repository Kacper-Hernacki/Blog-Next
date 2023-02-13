import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[]
}

function BlogList({ posts }: Props) {

  return (
    <div>
      <hr className="max-w-7xl mb-72" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pt-10 pb-24">
        {posts?.map(post => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer border-solid border-2 border-gray-800 rounded-2xl cursor-pointer  bg-gray-800">
              <div className="relative w-full h-80 drop-shadow-xl">
                <Image
                  className="object-cover object-left lg:object-center rounded-t-2xl"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div className="mt-5 flex-1">
                    <p className="font-bold text-lg">
                      {post.title}
                    </p>
                    <p className="line-clamp-2 text-white">
                      {new Date(post._createdAt).toLocaleDateString(
                        "en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </p>

                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {
                      post.categories.map((category) => {
                        return (
                          <div className="bg-gray-500 text-center text-white px-3 py-1 rounded-full text-sm font-semibold">
                            <p>{category.title}</p>
                          </div>);
                      })
                    }
                  </div>

                </div>
              </div>

              <div className="mt-5 flex-1 p-3">
                <p className="text-lg font-bold text-gray-50">{post.title}</p>
                <p className="line-clamp-2 text-gray-400">{post.description}</p>
              </div>

              <p className="p-3 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;