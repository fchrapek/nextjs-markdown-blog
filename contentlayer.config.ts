import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) =>
      doc._raw.flattenedPath.replace(/(\d{4})-(\d{2})-(\d{2})-/g, ""),
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) =>
      doc._raw.flattenedPath
        .replace(/(\d{4})-(\d{2})-(\d{2})-/g, "")
        .split("/")
        .slice(1)
        .join("/"),
  },
};

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
    // date: {
    //   type: "date",
    //   required: true,
    // },
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
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post]
});
