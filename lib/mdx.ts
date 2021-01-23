import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import path from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import MDXComponents from "../components/MDXComponents/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readFileSync(path.join(root, "data", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf-8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf-8");

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
    },
  });
}
