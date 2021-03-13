import { Text, Flex, Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { getMdxContent } from "../src/utils/get-mdx-content";
import {
  BLOG_CONTENT_PATH,
  PROJECT_CONTENT_PATH,
} from "../src/constants/constants";
import { NextSeo } from "next-seo";
import Intro from "@components/Intro";
import React, { useEffect } from "react";
import { Skills } from "@components/Skills";
import ProjectCard from "@components/ProjectCard";
import BlogCard from "@components/BlogCard";

export default function Home({ blogMdx, projectMdx }) {
  useEffect(() => {
    console.log(blogMdx);
    console.log(projectMdx);

  }, []);

  return (
    <>
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: "https://lhowsam.com",
          title: "Home | lhowsam.com",
        }}
      />
      <Intro />
      <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
        Projects
      </Text>
      <Flex direction="column" justify="center" align="center" mb={6}>
        {projectMdx?.map((blog) => (
          <ProjectCard key={blog.slug} blog={blog} />
        ))}
        {/* {projects.map((frontMatter) => (
          <ProjectCard key={frontMatter.title} {...frontMatter} />
        ))} */}
      </Flex>
      <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
        Blog
      </Text>
      <Flex direction="column" justify="center" align="center" mb={6}>
        <Stack spacing={[2, 6, 12]}>
          {blogMdx?.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </Stack>
        {/* {filterPosts.map((frontMatter) => (
          <BlogCard key={frontMatter.title} {...frontMatter} />
        ))} */}
      </Flex>
      <Flex direction="column" justify="center" align="center" mb={6}>
        <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
          Skills
        </Text>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {Skills &&
            Skills.map((s) => (
              <Box
                as="button"
                borderRadius="md"
                bg="tomato"
                color="white"
                px={2}
                h={8}
                key={s.id}
              >
                {s.name}
              </Box>
            ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
export async function getStaticProps() {
  const blogPosts = await getMdxContent(BLOG_CONTENT_PATH);
  const projectPosts = await getMdxContent(PROJECT_CONTENT_PATH);

  const projectMdx = projectPosts.map((project) => ({
    slug: project.slug,
    ...project.data,
  }));
  const blogMdx = blogPosts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      blogMdx,
      projectMdx,
    },
  };
}
