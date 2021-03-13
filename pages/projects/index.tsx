import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PROJECT_CONTENT_PATH } from "../../src/constants/constants";
import { getMdxContent } from "../../src/utils/get-mdx-content";

import { Search } from "../../src/components/Search";
import ProjectCard from "@components/ProjectCard";
interface indexProps {}

const index: React.FC<indexProps> = ({ allMdx }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(allMdx);
  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };
  return (
    <Box pb={3}>
      <Text as="h1" fontSize="40px" align="center" mb={4}>
        Projects
      </Text>
      {/* Content Area + Input + Tag filter */}
      <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
        <Search blogs={allMdx} handleFilter={handleFilter} />
        <Stack spacing={[2, 6, 12]}>
          {filteredBlogs?.map((blog) => (
            <ProjectCard key={blog.slug} blog={blog} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export async function getStaticProps() {
  const posts = await getMdxContent(PROJECT_CONTENT_PATH);
  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      allMdx,
    },
  };
}
export default index;
