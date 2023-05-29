import Box from '@frontend/app/(components)/Box/Box';
import ContentRenderer from '@frontend/app/(components)/ContentRenderer';
import FormattedDate from '@frontend/app/(components)/FormattedDate';
import Heading from '@frontend/app/(components)/Heading/Heading';
import Spacer from '@frontend/app/(components)/Spacer/Spacer';
import Text from '@frontend/app/(components)/Text/Text';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = siteConfig.defaultRevalidate;

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await postService.getPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.intro,
  };
}

const BlogSlugPage = async ({ params }: Props) => {
  const post = await postService.getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { compiledSource } = await mdxToHtml(post.content);

  return (
    <article>
      <Box
        as="header"
        maxWidth="text"
        marginX="auto"
        textAlign={{ md: 'center' }}
      >
        <Heading
          fontSize="xxl"
          as="h1"
          style={{
            marginBottom: '1rem',
          }}
        >
          {post.title}
        </Heading>

        <Box>
          <Image
            src={imageService.urlFor(post.image.asset)}
            width={950}
            height={330}
            priority
            placeholder="blur"
            blurDataURL={imageService.urlFor(post.image.asset)}
            style={{
              borderRadius: '0.5rem',
              objectFit: 'contain',
            }}
            alt={post.image.alt ?? post.title}
          />
        </Box>
        <Spacer height="sm" />
        <Text
          as="time"
          dateTime={post.publishedAt}
          color="foregroundNeutral"
          data-testid="time"
        >
          <FormattedDate>{post.publishedAt}</FormattedDate>
        </Text>
      </Box>

      <Spacer height="xxxl" />
      <Box maxWidth="text" marginX="auto">
        <ContentRenderer compiledSource={compiledSource} />
      </Box>
    </article>
  );
};
export default BlogSlugPage;
