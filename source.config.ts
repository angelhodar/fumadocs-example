import { defineDocs, defineConfig, defineCollections, frontmatterSchema, } from 'fumadocs-mdx/config';
import { z } from "zod"

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
  //docs: { async: true }
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  //async: true,
  schema: frontmatterSchema.extend({
    thumbnail: z.string().optional(),
    date: z.string().date().or(z.date()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
  lastModifiedTime: "git"
});
