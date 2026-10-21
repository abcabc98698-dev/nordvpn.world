import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export async function GET(context) {
  const blog = await getCollection('post');
  return rss({
    title: siteConfig.title,
    description: siteConfig.meta.description,
    site: context.site || siteConfig.url,
    items: blog.map((post) => {
      const link = `/blog/${post.id}/`;
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link,
      };
    }),
  });
}
