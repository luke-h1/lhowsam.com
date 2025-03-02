import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import Spacer from '@frontend/components/Spacer';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 1200;

export default async function TagPage({ params }: Props) {
  const { slug } = await params;

  const posts = await postService.getAllPosts();

  const matchingPosts = posts.filter(post => {
    return post.tags.some(tag => tag.slug.current === slug);
  });

  const allPosts = matchingPosts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    }

    if (a.publishedAt > b.publishedAt) {
      return -1;
    }

    return 0;
  });

  const postsByYear: Record<string, Post[]> = {};

  allPosts.forEach(post => {
    const year = new Date(post.publishedAt).getFullYear();

    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }

    postsByYear[year].push(post);
  });

  return (
    <Page>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="xxl" as="h1">
          Posts tagged with '{slug}'
        </Heading>
        <Spacer height="xl" />
      </Box>
      <Box>
        {Object.keys(postsByYear).map(year => {
          return (
            <Box key={year} marginBottom="xxxl">
              <Heading fontSize="xl" as="h2" color="foregroundNeutral">
                {year}
              </Heading>
              <Spacer height="xl" />
              {postsByYear[year].map(post => (
                <PostItem post={post} key={post._id} />
              ))}
            </Box>
          );
        })}
      </Box>
    </Page>
  );
}
