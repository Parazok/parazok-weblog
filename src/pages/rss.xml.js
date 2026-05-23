// import rss, { pagesGlobToRssItems } from '@astrojs/rss';

import { getCollection } from "astro:content";
const posts = await getCollection("blog");
import rss from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Parazok Personal Weblog",
    description: "Things I like to share plus other things!",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
