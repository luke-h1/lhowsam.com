import { Snippet } from '@lhowsam/cms/types/schema';
import config from '@src/config/config';
import imageService from '@src/services/imageService';
import snippetService from '@src/services/snippetService';
import { Center, Space } from '@src/styles/layouts';
import { Title, Paragraph } from '@src/styles/typography';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

interface Props {
  snippets: Snippet[];
}

const SnippetsPage = ({ snippets }: Props) => {

  const ogImageUrl = imageService.buildURL(
    process.env.NEXT_PUBLIC_OG_FUNCTION_URL,
    {
      author: "Luke Howsam",
      website: "lhowsam.com",
      title: 'Code snippets',
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/${config.profilePicture}`,
    }
  )
  
  return (
    <>
      <NextSeo
        title="Snippets"
        canonical="https://lhowsam.com/code-snippets"
        description="code snippets"
        openGraph={{
          url: 'https://lhowsam.com/code-snippets',
          title: 'Snippets | lhowsam.com',
          images: [{
            url: ogImageUrl,
            alt: "Code snippets"
          }],
        }}
      />
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
    revalidate: 60 * 30,
    props: {
      snippets,
    },
  };
};

export default SnippetsPage;
