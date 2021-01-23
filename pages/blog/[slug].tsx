import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import Post from "../../templates/Post";
import MDXComponents from "../../components/MDXComponents/MDXComponents";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <Post frontMatter={frontMatter}>{content}</Post>;
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);
  return { props: post };
}
