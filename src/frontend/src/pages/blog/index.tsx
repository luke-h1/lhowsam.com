import { Blog } from '@lhowsam/cms/types/schema';
import { BlogPostPreview } from '@src/components/blog';
import config from '@src/config/config';
import blogService from '@src/services/blogService';
import imageService from '@src/services/imageService';
import { PreviewLayout, Center } from '@src/styles/layouts';
import { Title } from '@src/styles/typography';
import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
  posts: Blog[];
}

const Index = ({ posts }: Props) => {

  const ogImageUrl = imageService.buildURL(
    process.env.NEXT_PUBLIC_OG_FUNCTION_URL,
    {
      author: "Luke Howsam",
      website: "lhowsam.com",
      title: 'Blog',
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/${config.profilePicture}`,
    }
  )

  return (
    <>
      <NextSeo
        title="Blog"
        canonical="https://lhowsam.com/blog"
        description='Blog'
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Blog | lhowsam.com',
          images: [{
            url: ogImageUrl,
            alt: 'blog'
          }],
        }}
      />
      <Center>
        <Title size={5}>blog</Title>
      </Center>

      <PreviewLayout>
        {posts &&
          posts.map((post) => <BlogPostPreview post={post} key={post._id} />)}
      </PreviewLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await blogService.getAllPosts();

  if (!posts.length) {
    return {
      props: [],
      notFound: true,
    };
  }

  return {
    revalidate: 60 * 30,
    props: {
      posts,
    },
  };
};

export default Index;
