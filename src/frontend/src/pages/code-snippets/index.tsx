import { Snippet } from '@lhowsam/cms/types/schema';
import snippetService from '@src/services/snippetService';
import {
  AnchorUnstyled,
  PostMetaDataGrid,
  ReadMorePrompt,
} from '@src/styles/blog';
import { Center, PreviewLayout, Space } from '@src/styles/layouts';
import { Card } from '@src/styles/project';
import { Title, BlogPostPreviewTitle, Paragraph } from '@src/styles/typography';
import Link from 'next/link';
import React from 'react';

interface Props {
  snippets: Snippet[];
}

const SnippetsPage = ({ snippets }: Props) => {
  return (
    <>
      <Center>
        <Title size={5}>Code snippets</Title>
      </Center>
      <Paragraph>
      These are a collection of code snippets I've used in the past and saved
      </Paragraph>
      <Space>
        Table of contents
        <ul>
          {snippets &&
            snippets.map((snippet) => (
              <li key={snippet._id}>
                <Link href={`/code-snippets/${snippet.slug.current}`} scroll>
                  {snippet.title}
                </Link>
              </li>
            ))}
        </ul>
      </Space>
      <PostMetaDataGrid>
        <PreviewLayout>
          {snippets &&
            snippets.map((snippet) => (
              <article
                data-testid={`snippet-${snippet.title}`}
                key={snippet._id}
              >
                <Link
                  href={`/code-snippets/${snippet.slug.current}`}
                  passHref
                  scroll
                >
                  <AnchorUnstyled href={`/blog/${snippet.slug.current}`}>
                    <Card>
                      <BlogPostPreviewTitle isHovered={false}>
                        {snippet.title}
                      </BlogPostPreviewTitle>
                      {/* <SmallText>{snippet.description}</SmallText> */}
                      <ReadMorePrompt isHovered={false}>Read more </ReadMorePrompt>
                    </Card>
                  </AnchorUnstyled>
                </Link>
              </article>
            ))}
        </PreviewLayout>
      </PostMetaDataGrid>
    </>
  );
};

export const getStaticProps = async () => {
  const snippets = await snippetService.getAllSnippets();
  if (!snippets.length) {
    return {
      props: [],
      notFound: true,
    };
  }

  return {
    revalidate: 60 * 30,
    props: {
      snippets,
    },
  };
};

export default SnippetsPage;
