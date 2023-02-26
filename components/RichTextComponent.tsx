
import Image from "next/image";
import urlFor from "../lib/urlFor";
import Link from "next/link";



export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image className="object-contain"
                 src={urlFor(value).url()}
                 alt="Blog Post Image"
                 fill
          />
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <div className='relative'>
          <p className='absolute top-2 right-4 text-blue-400 font-bold'>{value?.language}</p>
          <pre className='overflow-auto max-h-52 text-gray-50 bg-gray-800 p-6 my-4 rounded-xl'>
            <code>{value?.code}</code>
          </pre>
        </div>
      );
    },
  },
    list: {
      bullet: ({ children }: any) => (
        <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="mt-lg list-decimal">{children}</ol>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-5xl py-10 font-bold">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-4xl py-10 font-bold">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-3xl py-10 font-bold">{children}</h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-2xl py-10 font-bold">{children}</h4>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-blue-700 border-l-4 pl-5 py-5 my-5">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;

        return (
          <Link
            href={value.href}
            rel={rel}
            className="text-blue-600 decoration-blue-500 hover:decoration-black"
          >
            {children}
          </Link>
        );
      },
    },
};
