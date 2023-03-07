import { previewData } from "next/headers";
import groq from "groq";
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "@sanity/preview-kit";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import EmbeddedNewsletter from "../../components/EmbeddedNewsletter";
import EmbeddedTweets from "../../components/EmbeddedTwitter";
import EmbeddedYoutube from "../../components/EmbeddedYoutube";

const query = groq`
*[_type=='post'] {
...,
author->,
categories[]->
} | order(_createdAt desc)
`;
export default async function HomePage() {

  if (previewData()) {
    return <PreviewSuspense fallback={(
      <div role="status">
        <p className="text-center text-lg animate-pulse text-blue-600">
          Loading Preview Data...
        </p>
      </div>
    )}>
      <PreviewBlogList query={query} />
    </PreviewSuspense>;
  }

  const posts = await client.fetch(query);

  return (
    <>
      <BlogList posts={posts} />
      <EmbeddedTweets />
      {/*<EmbeddedInstagram />*/}
      <EmbeddedYoutube />
      <EmbeddedNewsletter />
      {/*<MediumArticles/>*/}
    </>
  );
}




