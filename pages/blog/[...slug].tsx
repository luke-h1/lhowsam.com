import hydrate from "next-mdx-remote/hydrate";
import { BLOG_CONTENT_PATH } from "../../src/constants/constants";
import { getMdxContent } from "../../src/utils/get-mdx-content";
import components from "../../src/components/MDXComponents";
import { NextSeo } from "next-seo";
import ShareButtons from "@components/ShareButtons";
import { Container, Flex, Text } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });
  const { title, author, tags, readingTime } = frontMatter;
  return (
    <>
      <Container maxW="700px" mb={4}>
        <NextSeo
          title={`${frontMatter.title} | lhowsam.com`}
          canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/blog/${frontMatter.slug}`,
            title: `${title} | lhowsam.com`,
          }}
        />

        <Flex as="article" direction="column" justify="center" mb={5}>
          <Text as="h1" fontSize="40px">
            {title}
          </Text>
        </Flex>
        <Flex direction="column" justify="between" mt={2} mb={5}>
          <Text as="p" fontSize="20px" mt={2} mb={2} color="gray.500">
            {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
          </Text>
          <Text as="p" fontSize="20px" mt={2} mb={2} color="#fff">
           {readingTime}
          </Text>
        </Flex>
        {/* <Text as="p" fontSize="20px" mt={2} mb={2} color="gray.500">
      {frontMatter.readingTime.text}
    </Text> */}
        <hr />
        <Text as="p" fontSize="20px" mt={2} mb={2} lineHeight="1.5">
          {content}
        </Text>
        <ShareButtons
          location={`https://lhowsam.com/blog/${frontMatter.slug}`}
        />
      </Container>
    </>
  );
}

// <Box>
// <Heading as="h1" pb="1rem">
//   {title}
// </Heading>
// {content}
// </Box>
export async function getStaticPaths() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const postSlug = slug.join("/");
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  };
}
