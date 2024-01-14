import Box from '@frontend/components/Box/Box';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import PostCard from '@frontend/components/PostCard/PostCard';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = siteConfig.defaultRevalidate;

const TagPage = async ({ params }: Props) => {
  const { slug } = params;

  const posts = await postService.getAllPosts();

  const matchingPosts = posts.filter(post => {
    return post.tags && post.tags.some(tag => tag.slug.current === slug);
  });

  return (
    <Page heading={`Posts tagged with '${slug}'`}>
      <Box maxWidth="text">
        {!matchingPosts.length ? (
          <Text>No posts found with the tag {slug}</Text>
        ) : (
          <List>
            {matchingPosts.map(post => (
              <PostCard key={post.slug.current} post={post} />
            ))}
          </List>
        )}
      </Box>
    </Page>
  );
};
export default TagPage;
