import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    cover_image: {
      type: "string",
      required: true,
    },
    cover_image_attribution_text: {
      type: "string",
      required: true,
    },
    cover_image_attribution_link: {
      type: "string",
      required: true,
    },
    og_image: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post]
});
