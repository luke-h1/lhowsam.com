import Box from '@frontend/components/Box/Box';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading/Heading';
import Components from '@frontend/components/MDXComponents';
import Prose from '@frontend/components/Prose/Prose';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';

interface Props {
  params: { slug: string };
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
        <Prose>
          <MDXRemote
            components={Components}
            compiledSource={compiledSource.compiledSource}
            scope={undefined}
            frontmatter={undefined}
          />
        </Prose>
      </Box>
    </article>
  );
};
export default BlogSlugPage;
