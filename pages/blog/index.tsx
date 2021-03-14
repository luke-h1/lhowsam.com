import React, { useEffect } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BLOG_CONTENT_PATH } from "../../src/constants/constants";
import { getMdxContent } from "../../src/utils/get-mdx-content";
import { Search } from "../../src/components/Search";
import BlogCard from "@components/BlogCard";
import { BlogPost } from "@src/types";
interface indexProps {
  allMdx: BlogPost[]
}

const index: React.FC<indexProps> = ({ allMdx }) => {
// useeffect to get the shape
  // useEffect(() => {console.log(allMdx)}, [])

  const [filteredBlogs, setFilteredBlogs] = useState(allMdx);
  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };
  return (
    <Box pb={3}>
      <Text as="h1" fontSize="40px" align="center" mb={4}>
        Blog
      </Text>
      {/* Content Area + Input + Tag filter */}

      <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
        <Search blogs={allMdx} handleFilter={handleFilter} />
        <Stack spacing={[2, 6, 12]}>
          {filteredBlogs?.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export async function getStaticProps() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
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
