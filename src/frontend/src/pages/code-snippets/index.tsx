import { Snippet } from '@lhowsam/cms/types/schema';
import snippetService from '@src/services/snippetService';
import { Center, Space } from '@src/styles/layouts';
import { Title, Paragraph } from '@src/styles/typography';
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
    revalidate: 60 * 60,
    props: {
      snippets,
    },
  };
};

export default SnippetsPage;
