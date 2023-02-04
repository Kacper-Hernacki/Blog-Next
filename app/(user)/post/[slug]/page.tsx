import groq from "groq";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "../../../../components/RichTextComponent";


type Props = {
  params: {
    slug: string;
  }
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
  ...,
  author->,
  categories[]->
  }
  `;

  const post: Post = await client.fetch(query, { slug });

  if(!post){
    return <div>Loading</div>
  }

  return (
    <article className="px-10 pb-28">

      <section className="space-y-2 border border-b-cyan-700 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image className="object-cover object-center mx-auto" src={urlFor(post?.mainImage)?.url()} alt={post.author.name} fill />

          </div>
        </div>
      </section>
      <section className="p-5 bg-gray-500 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-y-5">
          <div>
            <h1 className="text-4xl font-extrabold">
              {post.title}
            </h1>
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
          <div className="flex items-center space-x-2">
            <Image className="rounded-full" src={urlFor(post.author.image).url()} alt={post.author.name} height={40} width={40} />

            <div className="w-64">
              <h3 className="text-lg font-bold">{post.author.name}</h3>
              <div>
                {/*TODO:Author Bio*/}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="italic pt-10">{post.description}</h2>
          <div className="flex items-center justify-end mt-auto space-x-2">
            {post.categories.map((category) => {
              return (
                <p key={category._id} className="bg-white text-gray-black px-3 py-1 rounded-full text-sm font-semibold mt-4">{category.title}</p>);
            })}
          </div>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents}/>
    </article>
  );
}

export default Post;